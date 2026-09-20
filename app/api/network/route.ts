import { NextResponse } from "next/server";

const RPC_URL = "https://mainnet.sorobanrpc.com";

export async function GET() {
  try {
    const response = await fetch(RPC_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "getLatestLedger",
        params: {},
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "RPC unavailable" }, { status: 502 });
    }

    const data = await response.json();
    return NextResponse.json({
      ok: true,
      ledger: data?.result?.sequence ?? null,
      protocolVersion: data?.result?.protocolVersion ?? null,
      closeTime: data?.result?.closeTime ?? null,
      checkedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "RPC unavailable" }, { status: 502 });
  }
}
