'use client';

import { useState } from "react";

const LEXORA = "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const SAC = "CC7L34EWYCTDCA3L7CRRULWX577UJWET32KNJFD2WTEQ4KD7IAUKHIS6";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";
const DISTRIBUTION = "GBCPYP3TS6OAV37SXGKKY3YBY3QXMNWN2WZSDJ3RG2KZQAN5JWZDCY6Q";

const transactions = [
  ["GENESIS MINT", "7afe1d6f7be92cb0b7859b71c71e3eae4ad68fa523362c915217a425782be67f"],
  ["REGISTRY ENABLE", "c26e354ac5fe32565aeacd42cfe0dfcdad5e40bbb8f58c47a67ef08520859a90"],
  ["LEXORA TRANSFER", "2f89fbfd0ced1d7392950a1a6bcbfb2f22ea61b0c9d77898447598b3e511cbc5"],
  ["SUPPLY BURN", "4ed32c2fe4b14466c8ce92db3f94e695071e26db4ef49f7f8979b043cd65f434"],
];

const checks = [
  ["SAC BINDING", "PASS", "Configured XRP262 SAC matches the verified contract address."],
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

function CopyAddress({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      title={value}
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }}
      className="group flex min-w-0 items-center gap-3 text-left"
    >
      <span className="truncate font-mono text-[11px] text-slate-400 transition group-hover:text-blue-300">{value}</span>
      <span className="shrink-0 font-mono text-[9px] tracking-widest text-slate-600 group-hover:text-blue-400">{copied ? "COPIED" : "COPY"}</span>
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="font-mono text-[10px] font-semibold tracking-[0.2em] text-blue-400">{children}</div>;
}

export default function VerifyPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="XRP262" className="h-9 w-9 object-contain" />
            <span className="text-sm font-semibold tracking-[0.14em]">XRP262</span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[10px] tracking-wider text-slate-500 md:flex">
            <a href="/" className="transition hover:text-white">HOME</a>
            <a href="/protocol.pdf" className="transition hover:text-white">PROTOCOL</a>
            <a href="/supply" className="transition hover:text-white">SUPPLY</a>
            <a href="/lexora" className="transition hover:text-white">LEXORA</a>
            <span className="text-blue-400">VERIFY</span>
          </nav>
          <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.05] px-3 py-1.5 font-mono text-[9px] tracking-[0.16em] text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 pulse" /> MAINNET / VERIFIED
          </div>
        </div>
      </header>

      <section className="relative border-b border-slate-900">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[700px]" />
        <div className="relative mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionLabel>VERIFICATION / MAINNET CONTROL STATE</SectionLabel>
          <div className="mt-5 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[70px] lg:leading-[.98]">
                Verify the protocol.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
                Do not trust this interface. Verify the controller, asset contract, supply state, and genesis transactions directly on Stellar.
              </p>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-500">
                The values below are the completed XRP262 genesis state verified against the LEXORA controller and XRP262 Stellar Asset Contract on mainnet.
              </p>
            </div>
            <div className="card blue-line rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">FINAL CONTROL CHECK</div>
                  <div className="mt-2 text-lg font-medium text-white">XRP262 MAINNET</div>
                </div>
                <span className="rounded-full border border-blue-500/25 bg-blue-500/[0.06] px-3 py-1.5 font-mono text-[10px] tracking-widest text-blue-300">PASS</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-4">
                  <div className="font-mono text-[9px] text-slate-600">REGISTRY</div>
                  <div className="mt-2 font-mono text-sm text-slate-200">ACTIVE</div>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-4">
                  <div className="font-mono text-[9px] text-slate-600">ALLOWED</div>
                  <div className="mt-2 font-mono text-sm text-blue-300">TRUE</div>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-4">
                  <div className="font-mono text-[9px] text-slate-600">SAC ADMIN</div>
                  <div className="mt-2 font-mono text-sm text-slate-200">LEXORA</div>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-4">
                  <div className="font-mono text-[9px] text-slate-600">PAUSED</div>
                  <div className="mt-2 font-mono text-sm text-slate-200">FALSE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>01 / PUBLIC IDENTIFIERS</SectionLabel>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start with the addresses.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            These identifiers are public on Stellar mainnet. Copy any address and verify its ledger state independently.
          </p>
        </div>
        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {[
            ["LEXORA CONTROLLER", LEXORA, "Soroban controller contract"],
            ["XRP262 STELLAR ASSET CONTRACT", SAC, "Soroban Stellar Asset Contract"],
            ["XRP262 ISSUER", ISSUER, "Classic Stellar asset issuer"],
            ["DISTRIBUTION / TREASURY", DISTRIBUTION, "Genesis distribution account"],
          ].map(([label, address, description]) => (
            <div key={label} className="card rounded-xl p-5 sm:p-6">
              <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
              <p className="mt-2 text-xs text-slate-600">{description}</p>
              <div className="mt-5 min-w-0 rounded-lg border border-slate-800 bg-slate-950/55 p-3">
                <CopyAddress value={address} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>02 / CONTROL ASSERTIONS</SectionLabel>
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Every assertion has a state.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                This is the same control-state model used by the final mainnet verifier in the XRP262 protocol repository.
              </p>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-slate-600">READ-ONLY STATE</span>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-800">
            {checks.map(([label, status, value], i) => (
              <div key={label} className={`grid gap-4 bg-[#0b101b] px-5 py-4 sm:grid-cols-[220px_90px_1fr] sm:items-center ${i ? "border-t border-slate-800" : ""}`}>
                <span className="font-mono text-[10px] tracking-wider text-slate-500">{label}</span>
                <span className="w-fit rounded border border-blue-500/20 bg-blue-500/[0.05] px-2 py-1 font-mono text-[9px] tracking-widest text-blue-300">{status}</span>
                <span className="font-mono text-[10px] text-slate-400">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-blue-500/15 bg-blue-500/[0.035] p-5">
            <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400">SUPPLY INVARIANT</div>
            <div className="mt-3 font-mono text-xs leading-7 text-slate-400">
              900,000,000,000 minted − 426,026,808 burned = 899,573,973,192 circulating
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>03 / GENESIS TRANSACTIONS</SectionLabel>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">The genesis sequence is public.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            The completed genesis sequence is represented by these mainnet transaction hashes. Open them in a Stellar explorer and inspect the underlying operations.
          </p>
        </div>
        <div className="mt-10 space-y-3">
          {transactions.map(([label, hash], i) => (
            <div key={hash} className="card rounded-xl p-5 sm:p-6">
              <div className="grid gap-4 lg:grid-cols-[190px_1fr_auto] lg:items-center">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">0{i + 1}</div>
                  <div className="mt-2 text-sm font-medium text-slate-200">{label}</div>
                </div>
                <code className="min-w-0 break-all rounded-lg border border-slate-800 bg-slate-950/55 p-3 font-mono text-[10px] leading-5 text-slate-500">{hash}</code>
                <a
                  href={`https://stellar.expert/explorer/public/tx/${hash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[9px] tracking-widest text-blue-400 transition hover:text-blue-300"
                >
                  OPEN EXPLORER →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>04 / DIRECT VERIFICATION</SectionLabel>
          <div className="mt-4 grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Verify outside the interface.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Use the public contract and asset identifiers with Stellar explorers or native Soroban RPC. The website is a presentation layer; the ledger is the source of truth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/protocol.pdf" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">Protocol dossier</a>
                <a href="/supply" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">Supply architecture</a>
              </div>
            </div>
            <div className="space-y-3">
              {[
                ["LEXORA CONTROLLER", `https://stellar.expert/explorer/public/contract/${LEXORA}`],
                ["XRP262 SAC", `https://stellar.expert/explorer/public/contract/${SAC}`],
                ["XRP262 ISSUER", `https://stellar.expert/explorer/public/account/${ISSUER}`],
                ["XRP262 ASSET", "https://stellar.expert/explorer/public/asset/XRP262-GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP-2"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="card flex items-center justify-between gap-5 rounded-lg p-5 transition hover:border-blue-500/35"
                >
                  <span>
                    <span className="block font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</span>
                    <span className="mt-2 block font-mono text-[10px] text-slate-400">STELLAR EXPERT / PUBLIC MAINNET</span>
                  </span>
                  <span className="font-mono text-blue-400">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="card blue-line rounded-2xl p-7 sm:p-10">
          <SectionLabel>05 / VERIFICATION DIRECTIVE</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">The interface is not the proof.</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
            Verify the addresses, contract storage, policy values, balances, and transactions independently. If a future interface value conflicts with the ledger, the ledger wins.
          </p>
          <div className="mt-8 grid gap-3 font-mono text-[10px] text-slate-600 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-800 bg-slate-950/45 p-4">1 · IDENTIFY THE CONTRACTS</div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/45 p-4">2 · READ MAINNET STATE</div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/45 p-4">3 · RECONCILE THE INVARIANT</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="font-mono text-xs tracking-[0.16em]">XRP262 / VERIFY</div>
            <div className="mt-2 text-xs text-slate-600">Mainnet state verification surface for the XRP262 protocol.</div>
          </div>
          <div className="flex flex-wrap gap-5 font-mono text-[10px] text-slate-600">
            <a href="/" className="transition hover:text-blue-300">Home</a>
            <a href="/protocol.pdf" className="transition hover:text-blue-300">Protocol</a>
            <a href="/supply" className="transition hover:text-blue-300">Supply</a>
            <a href="/lexora" className="transition hover:text-blue-300">LEXORA</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
