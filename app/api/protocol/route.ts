import { NextResponse } from "next/server";
import {
  Address,
  Networks,
  Operation,
  scValToNative,
  TransactionBuilder,
  xdr,
} from "@stellar/stellar-sdk";
import { Server } from "@stellar/stellar-sdk/rpc";

const RPC_URL = "https://mainnet.sorobanrpc.com";
const NETWORK = Networks.PUBLIC;
const LEXORA = process.env.LEXORA_MAINNET_CONTRACT ?? "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const SAC = "CC7L34EWYCTDCA3L7CRRULWX577UJWET32KNJFD2WTEQ4KD7IAUKHIS6";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";
const DISTRIBUTION = "GBCPYP3TS6OAV37SXGKKY3YBY3QXMNWN2WZSDJ3RG2KZQAN5JWZDCY6Q";
const DEPLOYER = process.env.LEXORA_DEPLOYER_PUBLIC_KEY ?? "GCGJIJ4YYQR7ROEVXW4QNPN3E2C7AJMTQA7KVA2BMX7JGWFJAYTSFDFU";
const DECIMALS = 10_000_000n;
const server = new Server(RPC_URL);

function assetIdScVal() {
  return xdr.ScVal.scvMap([
    new xdr.ScMapEntry({
      key: xdr.ScVal.scvSymbol("code"),
      val: xdr.ScVal.scvString("XRP262"),
    }),
    new xdr.ScMapEntry({
      key: xdr.ScVal.scvSymbol("issuer"),
      val: Address.fromString(ISSUER).toScVal(),
    }),
  ]);
}

function normalizeTokenStatus(value: unknown) {
  return Array.isArray(value) ? value[0] : value;
}

function serializeValue(value: unknown): unknown {
  if (typeof value === "bigint") return value.toString();
  if (Array.isArray(value)) return value.map(serializeValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, serializeValue(item)]),
    );
  }
  return value;
}

async function simulate(
  sourceAccount: Awaited<ReturnType<Server["getAccount"]>>,
  contract: string,
  functionName: string,
  args: xdr.ScVal[] = [],
) {
  const tx = new TransactionBuilder(sourceAccount, {
    networkPassphrase: NETWORK,
    fee: "10000000",
  })
    .addOperation(Operation.invokeContractFunction({ contract, function: functionName, args }))
    .setTimeout(60)
    .build();

  const result = await server.simulateTransaction(tx);
  if (result.error) throw new Error(`${contract}::${functionName}() simulation failed: ${result.error}`);
  if (!result.result?.retval) throw new Error(`${contract}::${functionName}() returned no value`);
  return scValToNative(result.result.retval);
}

export async function GET() {
  try {
    const sourceAccount = await server.getAccount(DEPLOYER);
    const latest = await server.getLatestLedger();

    const [configuredSac, policyRaw, registryStatusRaw, allowed, sacAdmin, lexoraBalanceRaw, distributionBalanceRaw] =
      await Promise.all([
        simulate(sourceAccount, LEXORA, "xrp262_sac"),
        simulate(sourceAccount, LEXORA, "xrp262_policy"),
        simulate(sourceAccount, LEXORA, "token_status", [assetIdScVal()]),
        simulate(sourceAccount, LEXORA, "is_token_allowed", [assetIdScVal()]),
        simulate(sourceAccount, SAC, "admin"),
        simulate(sourceAccount, SAC, "balance", [Address.fromString(LEXORA).toScVal()]),
        simulate(sourceAccount, SAC, "balance", [Address.fromString(DISTRIBUTION).toScVal()]),
      ]);

    const policy = policyRaw as Record<string, unknown>;
    const minted = BigInt(String(policy.minted ?? 0));
    const burned = BigInt(String(policy.burned ?? 0));

    return NextResponse.json(
      {
        ok: true,
        source: "stellar-rpc",
        rpc: RPC_URL,
        latestLedger: latest.sequence,
        checkedAt: new Date().toISOString(),
        addresses: { lexora: LEXORA, sac: SAC, issuer: ISSUER, distribution: DISTRIBUTION },
        configuredSac,
        registryStatus: normalizeTokenStatus(registryStatusRaw),
        allowed,
        sacAdmin,
        policy: serializeValue({ ...policy, circulating: minted - burned }),
        balances: { lexora: String(lexoraBalanceRaw), distribution: String(distributionBalanceRaw) },
        decimals: 7,
        precision: DECIMALS.toString(),
      },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  } catch (error) {
    console.error("XRP262 protocol RPC read failed:", error);
    return NextResponse.json(
      { ok: false, source: "stellar-rpc", error: error instanceof Error ? error.message : "RPC read failed" },
      { status: 502, headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  }
}
