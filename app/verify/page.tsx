import type { Metadata } from "next";
import VerifyCopy from "./VerifyCopy";

export const metadata: Metadata = {
  title: "Verify XRP262 | Public Mainnet Proof",
  description:
    "Independently inspect XRP262 addresses, supply assertions, genesis transactions, and LEXORA control state on Stellar mainnet.",
  alternates: { canonical: "/verify" },
};

const LEXORA = "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const SAC = "CC7L34EWYCTDCA3L7CRRULWX577UJWET32KNJFD2WTEQ4KD7IAUKHIS6";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";
const DISTRIBUTION = "GBCPYP3TS6OAV37SXGKKY3YBY3QXMNWN2WZSDJ3RG2KZQAN5JWZDCY6Q";
const ASSET =
  "https://stellar.expert/explorer/public/asset/XRP262-GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP-2";

const checks = [
  ["SAC BINDING", "PASS", "Configured SAC matches the verified XRP262 SAC."],
  ["MAX SUPPLY", "PASS", "900,000,000,000 XRP262"],
  ["GENESIS MINTED", "PASS", "900,000,000,000 XRP262"],
  ["BURNED", "PASS", "426,026,808 XRP262"],
  ["CIRCULATING", "PASS", "899,573,973,192 XRP262"],
  ["REGISTRY", "PASS", "ACTIVE"],
  ["TOKEN ALLOWED", "PASS", "TRUE"],
  ["SAC ADMIN", "PASS", "LEXORA controller"],
  ["LEXORA BALANCE", "PASS", "0 XRP262"],
  ["DISTRIBUTION BALANCE", "PASS", "899,573,973,192 XRP262"],
];

const transactions = [
  ["01", "GENESIS MINT", "7afe1d6f7be92cb0b7859b71c71e3eae4ad68fa523362c915217a425782be67f"],
  ["02", "REGISTRY ENABLE", "c26e354ac5fe32565aeacd42cfe0dfcdad5e40bbb8f58c47a67ef08520859a90"],
  ["03", "LEXORA TRANSFER", "2f89fbfd0ced1d7392950a1a6bcbfb2f22ea61b0c9d77898447598b3e511cbc5"],
  ["04", "SUPPLY BURN", "4ed32c2fe4b14466c8ce92db3f94e695071e26db4ef49f7f8979b043cd65f434"],
];

const identifiers = [
  ["LEXORA CONTROLLER", LEXORA, "contract"],
  ["XRP262 STELLAR ASSET CONTRACT", SAC, "contract"],
  ["XRP262 ISSUER", ISSUER, "account"],
  ["DISTRIBUTION / TREASURY", DISTRIBUTION, "account"],
];

function Label({ children }: { children: React.ReactNode }) {
  return <div className="font-mono text-[10px] font-semibold tracking-[0.2em] text-blue-400">{children}</div>;
}

export default function VerifyPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      

      <section className="relative border-b border-slate-900">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[720px] opacity-70" />
        <div className="pointer-events-none absolute right-[-14rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.06] blur-3xl" />
        <div className="relative mx-auto grid max-w-[1280px] gap-12 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-[1fr_.72fr] lg:items-end lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.045] px-3 py-1.5 font-mono text-[9px] tracking-[0.18em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 pulse" />
              STELLAR MAINNET / PUBLIC EVIDENCE
            </div>
            <div className="mt-7"><Label>01 / VERIFICATION SURFACE</Label></div>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-[72px] lg:leading-[0.95]">
              Verify it
              <span className="block text-blue-400">yourself.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              XRP262 exposes the identifiers, state assertions, and transaction trail needed to inspect its completed genesis state on Stellar mainnet.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              This page is an index of evidence—not a substitute for the ledger.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#evidence" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(37,99,235,.18)] transition hover:bg-blue-500">Start verification</a>
              <a href={ASSET} target="_blank" rel="noreferrer" className="rounded-md border border-slate-700 bg-slate-950/50 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">Open asset ↗</a>
            </div>
          </div>

          <div className="card blue-line rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-5">
              <div>
                <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">CONTROL SNAPSHOT</div>
                <div className="mt-2 text-lg font-medium text-white">XRP262 / MAINNET</div>
              </div>
              <span className="rounded-full border border-blue-500/25 bg-blue-500/[0.06] px-3 py-1.5 font-mono text-[10px] tracking-widest text-blue-300">10 / 10</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["REGISTRY", "ACTIVE"],
                ["ALLOWED", "TRUE"],
                ["SAC ADMIN", "LEXORA"],
                ["PAUSED", "FALSE"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-slate-800 bg-slate-950/50 p-4">
                  <div className="font-mono text-[9px] text-slate-600">{label}</div>
                  <div className="mt-2 font-mono text-sm text-slate-200">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-slate-800 pt-5 font-mono text-[9px] leading-5 text-slate-600">
              READ-ONLY • COMPLETED GENESIS STATE
            </div>
          </div>
        </div>
      </section>

      <section id="evidence" className="scroll-mt-20 border-b border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <Label>02 / PUBLIC IDENTIFIERS</Label>
          <div className="mt-5 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Start with what is public.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Four identifiers connect the asset, its Soroban contract, its controller, and its genesis distribution account.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {identifiers.map(([label, address, kind]) => (
                <div key={label} className="card rounded-xl p-5">
                  <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
                  <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/55 p-3">
                    <VerifyCopy value={address} href={`https://stellar.expert/explorer/public/${kind}/${address}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <Label>03 / CONTROL STATE</Label>
        <div className="mt-5 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">A compact audit surface.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            These are the read-only assertions used by the final XRP262 mainnet control verification.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-[#0b101b]">
          <div className="hidden grid-cols-[220px_90px_1fr] border-b border-slate-800 px-5 py-3 font-mono text-[8px] tracking-[0.16em] text-slate-700 sm:grid">
            <span>ASSERTION</span><span>STATE</span><span>VALUE</span>
          </div>
          {checks.map(([label, status, value], i) => (
            <div key={label} className={`grid gap-3 px-5 py-4 sm:grid-cols-[220px_90px_1fr] sm:items-center ${i ? "border-t border-slate-800" : ""}`}>
              <span className="font-mono text-[10px] tracking-wider text-slate-500">{label}</span>
              <span className="w-fit rounded border border-blue-500/20 bg-blue-500/[0.05] px-2 py-1 font-mono text-[9px] tracking-widest text-blue-300">{status}</span>
              <span className="font-mono text-[10px] text-slate-400">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/[0.035] p-6">
          <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400">SUPPLY INVARIANT</div>
          <div className="mt-4 overflow-x-auto whitespace-nowrap font-mono text-lg tracking-tight text-white">
            900,000,000,000 <span className="text-slate-600">−</span> 426,026,808 <span className="text-slate-600">=</span> <span className="text-blue-300">899,573,973,192</span>
          </div>
          <div className="mt-2 font-mono text-[9px] tracking-widest text-slate-600">MINTED − BURNED = CIRCULATING / XRP262</div>
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.68fr_1.32fr]">
            <div>
              <Label>04 / TRANSACTION EVIDENCE</Label>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Follow the genesis trail.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Open each hash in a public Stellar explorer and inspect the underlying ledger operations.
              </p>
              <div className="mt-7 rounded-xl border border-slate-800 bg-slate-950/45 p-5">
                <div className="font-mono text-[8px] tracking-[0.16em] text-slate-700">SEQUENCE</div>
                <div className="mt-3 font-mono text-xs leading-7 text-slate-400">mint → enable → transfer → burn</div>
              </div>
            </div>
            <div className="space-y-3">
              {transactions.map(([step, label, hash]) => (
                <div key={hash} className="card rounded-xl p-5 transition hover:border-blue-500/30 sm:p-6">
                  <div className="grid gap-4 sm:grid-cols-[44px_180px_1fr_auto] sm:items-center">
                    <span className="font-mono text-[10px] text-blue-400">{step}</span>
                    <span className="text-sm font-medium text-slate-200">{label}</span>
                    <code className="min-w-0 truncate rounded-lg border border-slate-800 bg-slate-950/55 px-3 py-2 font-mono text-[9px] text-slate-600">{hash}</code>
                    <a href={`https://stellar.expert/explorer/public/tx/${hash}`} target="_blank" rel="noreferrer" className="font-mono text-[9px] tracking-widest text-blue-400 transition hover:text-blue-300">OPEN ↗</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <Label>05 / INDEPENDENT ROUTES</Label>
        <div className="mt-5 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Take the shortest path to the ledger.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Use a public explorer for a visual audit, or use native Soroban RPC when you need contract state directly.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={ASSET} target="_blank" rel="noreferrer" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500">Open XRP262 ↗</a>
              <a href="/supply" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">Supply architecture</a>
            </div>
          </div>
          <div className="space-y-3">
            {[
              ["LEXORA CONTROLLER", `https://stellar.expert/explorer/public/contract/${LEXORA}`],
              ["XRP262 SAC", `https://stellar.expert/explorer/public/contract/${SAC}`],
              ["XRP262 ISSUER", `https://stellar.expert/explorer/public/account/${ISSUER}`],
              ["XRP262 ASSET", ASSET],
            ].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="card flex items-center justify-between gap-5 rounded-xl p-5 transition hover:border-blue-500/35">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</div>
                  <div className="mt-2 font-mono text-[9px] text-slate-500">STELLAR EXPERT / PUBLIC MAINNET</div>
                </div>
                <span className="font-mono text-blue-400">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="card blue-line rounded-2xl p-7 sm:p-10">
            <Label>06 / VERIFICATION DIRECTIVE</Label>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">The interface explains. The ledger confirms.</h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
              Check the identifiers, read the state, inspect the transactions, and reconcile the invariant. If a future interface value conflicts with the ledger, the ledger wins.
            </p>
            <div className="mt-8 grid gap-3 font-mono text-[10px] text-slate-600 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-800 bg-slate-950/45 p-4">01 · IDENTIFY</div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/45 p-4">02 · INSPECT</div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/45 p-4">03 · RECONCILE</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="XRP262" className="h-9 w-9 object-contain" />
            <div><div className="font-mono text-xs tracking-[0.14em]">XRP262 / VERIFY</div><div className="mt-1 text-[10px] text-slate-600">Public mainnet evidence surface.</div></div>
          </a>
          <div className="flex flex-wrap gap-5 font-mono text-[10px] text-slate-600">
            <a href="/" className="transition hover:text-blue-300">Home</a>
            <a href="/protocol" className="transition hover:text-blue-300">Protocol</a>
            <a href="/supply" className="transition hover:text-blue-300">Supply</a>
            <a href="/lexora" className="transition hover:text-blue-300">LEXORA</a>
            <a href="/docs.pdf" className="transition hover:text-blue-300">Docs</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
