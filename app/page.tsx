'use client';

import { useEffect, useState } from "react";

const LEXORA = "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const SAC = "CC7L34EWYCTDCA3L7CRRULWX577UJWET32KNJFD2WTEQ4KD7IAUKHIS6";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";

const state = {
  maxSupply: "900,000,000,000",
  minted: "900,000,000,000",
  burned: "426,026,808",
  circulating: "899,573,973,192",
};

function CopyAddress({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }}
      className="group flex min-w-0 items-center gap-2 text-left font-mono text-xs text-slate-400 transition hover:text-blue-300"
      title={value}
    >
      <span className="truncate">{value}</span>
      <span className="shrink-0 text-[9px] tracking-widest text-slate-600 group-hover:text-blue-400">
        {copied ? "COPIED" : "COPY"}
      </span>
    </button>
  );
}

function NetworkStatus() {
  const [ledger, setLedger] = useState<number | null>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let mounted = true;
    const read = async () => {
      try {
        const res = await fetch("/api/network", { cache: "no-store" });
        const data = await res.json();
        if (mounted && data.ok) {
          setLedger(data.ledger);
          setLive(true);
        } else if (mounted) setLive(false);
      } catch {
        if (mounted) setLive(false);
      }
    };
    read();
    const id = setInterval(read, 15000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-blue-300">
      <span className={`h-1.5 w-1.5 rounded-full bg-blue-400 ${live ? "pulse" : "opacity-40"}`} />
      MAINNET {live ? "LIVE" : "SYNCING"}{ledger ? ` · LEDGER ${ledger.toLocaleString()}` : ""}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 font-mono text-[10px] font-semibold tracking-[0.2em] text-blue-400">
      {children}
    </div>
  );
}

function Arrow() {
  return <div className="hidden h-px flex-1 bg-gradient-to-r from-blue-500/25 via-blue-500/70 to-blue-500/20 md:block" />;
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[980px]" />

      <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="XRP262 home">
            <img src="/logo.png" alt="XRP262" className="h-9 w-9 object-contain" />
            <span className="text-sm font-semibold tracking-[0.14em]">XRP262</span>
          </a>
          <nav className="hidden items-center gap-6 font-mono text-[10px] tracking-wider text-slate-500 md:flex">
            <a href="/protocol.pdf" className="transition hover:text-white">PROTOCOL</a>
            <a href="/docs" className="transition hover:text-white">DOCS</a>
            <a href="/supply" className="transition hover:text-white">SUPPLY</a>
            <a href="/lexora" className="transition hover:text-white">LEXORA</a>
            <a href="/verify" className="transition hover:text-white">VERIFY</a>
          </nav>
          <NetworkStatus />
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid min-h-[760px] max-w-[1280px] items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.045] px-3 py-1.5 font-mono text-[9px] tracking-[0.18em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 pulse" />
              STELLAR MAINNET / VERIFIED CONTROL STATE
            </div>
            <SectionLabel>STELLAR INFRASTRUCTURE PROTOCOL</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-[78px] lg:leading-[.92]">
              Infrastructure you can
              <span className="block text-blue-400">verify.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
              XRP262 is a Stellar-native asset infrastructure layer powered by LEXORA.
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-500">
              A native Stellar asset, its Soroban Asset Contract, and an explicit
              controller policy surface—designed so the important parts can be
              inspected rather than simply believed.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/verify" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_0_36px_rgba(37,99,235,.24)] transition hover:bg-blue-500">
                Verify XRP262
              </a>
              <a href="/protocol.pdf" className="rounded-md border border-slate-700 bg-slate-950/50 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">
                Read protocol
              </a>
              <a
                href="https://stellar.expert/explorer/public/asset/XRP262-GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP-2"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-blue-500/30 bg-blue-500/[0.06] px-5 py-3 text-sm font-medium text-blue-300 transition hover:border-blue-400/60 hover:bg-blue-500/[0.1] hover:text-blue-200"
              >
                Explore asset ↗
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
              {[
                ["900B", "MAX SUPPLY"],
                ["899.57B", "CIRCULATING"],
                ["ACTIVE", "REGISTRY"],
                ["3", "PROTOCOL LAYERS"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-mono text-lg text-white">{value}</div>
                  <div className="mt-1 text-[9px] tracking-[0.14em] text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-blue-600/[0.065] blur-3xl" />
            <div className="card blue-line relative rounded-2xl p-5 sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">PROTOCOL TOPOLOGY</div>
                  <div className="mt-2 text-sm font-medium text-slate-200">Three layers. One asset system.</div>
                </div>
                <div className="font-mono text-[9px] text-blue-400">MAINNET</div>
              </div>
              {[
                ["01", "CLASSIC ASSET", "XRP262", ISSUER, "NATIVE STELLAR LAYER"],
                ["02", "STELLAR ASSET CONTRACT", "XRP262 SAC", SAC, "SOROBAN ASSET INTERFACE"],
                ["03", "LEXORA CONTROLLER", "LEXORA", LEXORA, "POLICY + SUPPLY CONTROL"],
              ].map(([n, name, title, address, layer]) => (
                <div key={name}>
                  <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 transition hover:border-blue-500/40 hover:bg-blue-500/[0.025]">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-blue-400">{n}</span>
                        <span className="text-sm font-medium text-slate-200">{name}</span>
                      </div>
                      <span className="font-mono text-[8px] tracking-widest text-slate-700">{layer}</span>
                    </div>
                    <div className="mt-3 truncate font-mono text-[10px] text-slate-600">{address}</div>
                    <div className="mt-3 text-[10px] text-slate-500">{title}</div>
                  </div>
                  {n !== "03" && <div className="mx-auto h-7 w-px bg-gradient-to-b from-blue-500/60 to-transparent" />}
                </div>
              ))}
              <div className="mt-6 border-t border-slate-800 pt-5">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] text-slate-600">
                  <span><span className="text-blue-400">RPC</span> mainnet.sorobanrpc.com</span>
                  <span><span className="text-blue-400">NETWORK</span> PUBLIC</span>
                  <span><span className="text-blue-400">STATUS</span> READABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-7 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-lg border border-slate-800 bg-slate-800 sm:grid-cols-3">
            {[
              ["ON-CHAIN STATE", "Registry, supply policy, balances"],
              ["PUBLIC IDENTIFIERS", "Issuer, SAC, controller"],
              ["INDEPENDENT PROOF", "Explorer + Soroban RPC"],
            ].map(([title, body]) => (
              <div key={title} className="bg-[#0b101b] px-5 py-4">
                <div className="font-mono text-[9px] tracking-[0.15em] text-blue-400">{title}</div>
                <div className="mt-1 text-xs text-slate-500">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>01 / ARCHITECTURE</SectionLabel>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A protocol surface with clear boundaries.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              The asset remains a native Stellar asset. Soroban provides the contract
              interface. LEXORA adds an explicit controller and policy layer.
            </p>
          </div>
          <a href="/docs" className="font-mono text-[10px] tracking-widest text-blue-400 transition hover:text-blue-300">
            READ TECHNICAL REFERENCE →
          </a>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 md:grid-cols-3">
          {[
            ["01", "Classic Asset", "XRP262 + issuer identity", "Native ledger layer"],
            ["02", "SAC", "Stellar Asset Contract", "Soroban asset interface"],
            ["03", "LEXORA", "Programmable controller", "Policy + supply controls"],
          ].map(([n, title, description, footer]) => (
            <div key={n} className="bg-[#0b101b] p-6 sm:p-8">
              <div className="font-mono text-[10px] text-blue-400">{n}</div>
              <h3 className="mt-8 text-lg font-medium text-slate-100">{title}</h3>
              <p className="mt-2 text-sm text-slate-500">{description}</p>
              <div className="mt-12 border-t border-slate-800 pt-4 font-mono text-[10px] uppercase tracking-wider text-slate-600">{footer}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="state" className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>02 / VERIFIED STATE</SectionLabel>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">The numbers are part of the protocol.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                A verified snapshot of the completed XRP262 genesis state—not a marketing estimate.
              </p>
            </div>
            <a href="/verify" className="font-mono text-[10px] tracking-widest text-blue-400 transition hover:text-blue-300">
              OPEN FULL VERIFICATION →
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["MAX SUPPLY", state.maxSupply, "XRP262"],
              ["GENESIS MINTED", state.minted, "XRP262"],
              ["TOTAL BURNED", state.burned, "XRP262"],
              ["CIRCULATING", state.circulating, "XRP262"],
              ["REGISTRY", "ACTIVE", "TOKEN STATUS"],
              ["ALLOWED", "TRUE", "LEXORA REGISTRY"],
              ["SAC ADMIN", "LEXORA", "CONTROLLER"],
              ["LEXORA BALANCE", "0", "XRP262"],
            ].map(([label, value, unit]) => (
              <div key={label} className="card rounded-lg p-5 transition hover:border-blue-500/30">
                <div className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</div>
                <div className="mt-4 truncate font-mono text-xl text-slate-100">{value}</div>
                <div className="mt-1 text-[10px] text-slate-600">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="supply" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>03 / SUPPLY ARCHITECTURE</SectionLabel>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Supply with a visible proof.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Genesis issuance and burn accounting reconcile to the current circulating supply.
            </p>
          </div>
          <a href="/supply" className="font-mono text-[10px] tracking-widest text-blue-400 transition hover:text-blue-300">
            OPEN SUPPLY ARCHITECTURE →
          </a>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
          {[
            ["GENESIS", "900,000,000,000", "minted"],
            ["BURN", "426,026,808", "removed"],
            ["CURRENT", "899,573,973,192", "circulating"],
          ].map(([title, value, caption], i) => (
            <div key={title} className="contents">
              <div className="card rounded-xl p-7">
                <div className="font-mono text-[10px] tracking-widest text-blue-400">{title}</div>
                <div className="mt-5 font-mono text-2xl tracking-tight text-white">{value}</div>
                <div className="mt-2 text-xs text-slate-600">XRP262 · {caption}</div>
              </div>
              {i < 2 && <Arrow />}
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-blue-500/20 bg-blue-500/[0.035] px-5 py-4 font-mono text-xs text-slate-400">
          <span className="text-blue-400">INVARIANT</span> · 900,000,000,000 − 426,026,808 = 899,573,973,192 XRP262
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>04 / LEXORA</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">The control plane behind XRP262.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                LEXORA provides the explicit registration and supply-policy surface
                that sits alongside the native asset and its SAC.
              </p>
              <a href="/lexora" className="mt-7 inline-flex rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">
                Explore LEXORA →
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["REGISTRY", "ACTIVE"],
                ["TOKEN ALLOWED", "TRUE"],
                ["MINTING", "ENABLED"],
                ["PAUSED", "FALSE"],
                ["CLAWBACK", "FALSE"],
                ["SAC BINDING", "VERIFIED"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-slate-800 bg-slate-950/45 p-5">
                  <div className="font-mono text-[9px] tracking-widest text-slate-600">{label}</div>
                  <div className="mt-2 font-mono text-sm text-blue-300">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="verification" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>05 / VERIFICATION</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Trust the ledger, not the interface.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
              Every critical identifier is public. Verify addresses, controller state,
              balances, and genesis transactions through Stellar infrastructure.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/verify" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500">Open verification</a>
              <a href="/docs" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">Technical docs</a>
            </div>
          </div>
          <div className="space-y-3">
            {[
              ["LEXORA CONTROLLER", LEXORA, "SOROBAN / MAINNET"],
              ["STELLAR ASSET CONTRACT", SAC, "SOROBAN / MAINNET"],
              ["XRP262 ISSUER", ISSUER, "CLASSIC ASSET / MAINNET"],
            ].map(([label, address, type]) => (
              <div key={label} className="card flex flex-col gap-4 rounded-lg p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
                  <div className="mt-2 font-mono text-[9px] text-slate-600">{type}</div>
                </div>
                <CopyAddress value={address} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="card blue-line rounded-2xl p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <SectionLabel>BUILT FOR INSPECTION</SectionLabel>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Read it. Inspect it. Verify it.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Start with the protocol dossier, inspect the documented mainnet
                  state, then verify the underlying contracts and transactions yourself.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="/protocol.pdf" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500">Protocol PDF</a>
                <a href="/docs" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">Documentation</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="XRP262 logo" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-mono text-xs tracking-[0.16em]">XRP262</div>
              <div className="mt-2 text-xs text-slate-600">Stellar-native asset infrastructure.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 font-mono text-[10px] text-slate-600 md:items-end md:justify-end">
            <a href="/protocol.pdf" className="transition hover:text-blue-300">Protocol</a>
            <a href="/docs" className="transition hover:text-blue-300">Docs</a>
            <a href="/supply" className="transition hover:text-blue-300">Supply</a>
            <a href="/lexora" className="transition hover:text-blue-300">LEXORA</a>
            <a href="/verify" className="transition hover:text-blue-300">Verify</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
