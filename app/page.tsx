"use client";

import { useEffect, useState } from "react";

const LEXORA = "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const SAC = "CC7L34EWYCTDCA3L7CRRULWX577UJWET32KNJFD2WTEQ4KD7IAUKHIS6";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";

const state = {
  maxSupply: "900,000,000,000",
  minted: "900,000,000,000",
  burned: "426,026,808",
  circulating: "899,573,973,192",
  registry: "ACTIVE",
  allowed: true,
};

function CopyAddress({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      className="group flex min-w-0 items-center gap-2 text-left font-mono text-xs text-slate-400 transition hover:text-blue-300"
      title={value}
    >
      <span className="truncate">{value}</span>
      <span className="shrink-0 text-[10px] text-slate-600 group-hover:text-blue-400">
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
      <span
        className={`h-1.5 w-1.5 rounded-full bg-blue-400 ${live ? "pulse" : "opacity-40"}`}
      />
      MAINNET {live ? "LIVE" : "SYNCING"}
      {ledger ? ` · LEDGER ${ledger.toLocaleString()}` : ""}
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
  return (
    <div className="hidden h-px flex-1 bg-gradient-to-r from-blue-500/30 via-blue-500/70 to-blue-500/20 md:block" />
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[900px]" />

      <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="XRP262 home"
          >
            <img
              src="/logo.png"
              alt="XRP262"
              className="h-9 w-9 object-contain"
            />
            <span className="text-sm font-semibold tracking-[0.14em]">
              XRP262
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-xs text-slate-400 md:flex">
            <a href="#architecture" className="transition hover:text-white">
              Architecture
            </a>
            <a href="#state" className="transition hover:text-white">
              State
            </a>
            <a href="#supply" className="transition hover:text-white">
              Supply
            </a>
            <a href="#verification" className="transition hover:text-white">
              Verification
            </a>
          </nav>
          <NetworkStatus />
        </div>
      </header>

      <section className="mx-auto grid min-h-[720px] max-w-[1280px] items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-28">
        <div>
          <SectionLabel>STELLAR INFRASTRUCTURE PROTOCOL</SectionLabel>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px] lg:leading-[.94]">
            XRP<span className="text-blue-400">262</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
            A Stellar-native asset infrastructure layer. Powered by LEXORA.
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-500">
            XRP262 combines a native Stellar asset with programmable controller
            infrastructure and explicit on-chain supply controls. Built for
            transparent verification across Stellar Core and Soroban.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#architecture"
              className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_0_32px_rgba(37,99,235,.22)] transition hover:bg-blue-500"
            >
              Explore protocol
            </a>
            <a
              href="#verification"
              className="rounded-md border border-slate-700 bg-slate-950/50 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white"
            >
              Verify on-chain
            </a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-slate-800/80 pt-6 sm:grid-cols-4">
            <div>
              <div className="font-mono text-lg text-white">900B</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-slate-600">
                Max supply
              </div>
            </div>
            <div>
              <div className="font-mono text-lg text-white">899.57B</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-slate-600">
                Circulating
              </div>
            </div>
            <div>
              <div className="font-mono text-lg text-white">ACTIVE</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-slate-600">
                Registry
              </div>
            </div>
            <div>
              <div className="font-mono text-lg text-white">SAC</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-slate-600">
                Asset layer
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-blue-600/[0.055] blur-3xl" />
          <div className="card blue-line relative rounded-xl p-5 sm:p-7">
            <div className="mb-7 flex items-center justify-between">
              <div className="font-mono text-[10px] tracking-[0.18em] text-slate-500">
                LIVE ARCHITECTURE SIGNAL
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] text-blue-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 pulse" />{" "}
                VERIFIED MODEL
              </div>
            </div>
            {[
              ["01", "CLASSIC ASSET", ISSUER],
              ["02", "STELLAR ASSET CONTRACT", SAC],
              ["03", "LEXORA CONTROLLER", LEXORA],
            ].map(([n, name, address], i) => (
              <div key={name}>
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 transition hover:border-blue-500/40">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-blue-400">
                      {n}
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {name}
                    </span>
                  </div>
                  <div className="mt-3 truncate font-mono text-[10px] text-slate-600">
                    {address}
                  </div>
                </div>
                {i < 2 && (
                  <div className="mx-auto h-7 w-px bg-gradient-to-b from-blue-500/60 to-transparent" />
                )}
              </div>
            ))}
            <div className="mt-6 border-t border-slate-800 pt-5 font-mono text-[10px] text-slate-500">
              <span className="text-blue-400">RPC</span> mainnet.sorobanrpc.com
              <span className="mx-2 text-slate-700">·</span>
              <span className="text-blue-400">NETWORK</span> PUBLIC
            </div>
          </div>
        </div>
      </section>

      <section
        id="architecture"
        className="border-y border-slate-900 bg-[#0a0e17]/55"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <SectionLabel>01 / ARCHITECTURE</SectionLabel>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Tri-tier asset architecture.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              A classic Stellar asset, its native Soroban Asset Contract, and
              the LEXORA controller form the protocol surface.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 md:grid-cols-3">
            {[
              [
                "01",
                "Classic Asset",
                "Issuer-defined Stellar asset",
                "Native ledger layer",
              ],
              [
                "02",
                "SAC",
                "Stellar Asset Contract",
                "Programmable asset interface",
              ],
              [
                "03",
                "LEXORA",
                "Protocol controller",
                "Policy and supply controls",
              ],
            ].map(([n, t, d, s]) => (
              <div key={n} className="bg-[#0b101b] p-6 sm:p-8">
                <div className="font-mono text-[10px] text-blue-400">{n}</div>
                <h3 className="mt-8 text-lg font-medium">{t}</h3>
                <p className="mt-2 text-sm text-slate-500">{d}</p>
                <div className="mt-12 border-t border-slate-800 pt-4 font-mono text-[10px] uppercase tracking-wider text-slate-600">
                  {s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="state"
        className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8"
      >
        <SectionLabel>02 / VERIFIED STATE</SectionLabel>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Protocol telemetry.
            </h2>
            <p className="mt-4 text-sm text-slate-500">
              Genesis state verified against XRP262 mainnet control records.
            </p>
          </div>
          <span className="font-mono text-[10px] text-slate-600">
            PRECISION / STANDARD
          </span>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["MAX SUPPLY", state.maxSupply, "XRP262"],
            ["GENESIS MINTED", state.minted, "XRP262"],
            ["TOTAL BURNED", state.burned, "XRP262"],
            ["CIRCULATING", state.circulating, "XRP262"],
            ["REGISTRY", state.registry, "TOKEN STATUS"],
            ["ALLOWED", state.allowed ? "TRUE" : "FALSE", "LEXORA REGISTRY"],
            ["SAC ADMIN", "LEXORA", "CONTROLLER"],
            ["LEXORA BALANCE", "0", "XRP262"],
          ].map(([label, value, unit]) => (
            <div key={label} className="card rounded-lg p-5">
              <div className="font-mono text-[9px] tracking-[0.16em] text-slate-600">
                {label}
              </div>
              <div className="mt-4 truncate font-mono text-xl text-slate-100">
                {value}
              </div>
              <div className="mt-1 text-[10px] text-slate-600">{unit}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="supply"
        className="border-y border-slate-900 bg-[#0a0e17]/55"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <SectionLabel>03 / SUPPLY ARCHITECTURE</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Supply with an explicit invariant.
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
            {[
              ["GENESIS", "900,000,000,000", "minted"],
              ["BURN", "426,026,808", "removed"],
              ["CURRENT", "899,573,973,192", "circulating"],
            ]
              .map(([title, value, caption], i) => (
                <div key={title} className="card rounded-xl p-7">
                  <div className="font-mono text-[10px] tracking-widest text-blue-400">
                    {title}
                  </div>
                  <div className="mt-5 font-mono text-2xl tracking-tight text-white">
                    {value}
                  </div>
                  <div className="mt-2 text-xs text-slate-600">
                    XRP262 · {caption}
                  </div>
                </div>
              ))
              .flatMap((node, i, arr) =>
                i < arr.length - 1 ? [node, <Arrow key={`a${i}`} />] : [node],
              )}
          </div>
          <div className="mt-8 rounded-lg border border-blue-500/20 bg-blue-500/[0.035] px-5 py-4 font-mono text-xs text-slate-400">
            <span className="text-blue-400">INVARIANT</span> · Circulating =
            Genesis Minted − Total Burned
          </div>
        </div>
      </section>

      <section
        id="verification"
        className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8"
      >
        <SectionLabel>04 / VERIFICATION</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Verify the state yourself.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
              The interface is a view into public protocol state. Addresses and
              ledger state can be independently checked through Stellar
              infrastructure.
            </p>
          </div>
          <div className="space-y-3">
            {[
              ["LEXORA CONTROLLER", LEXORA],
              ["STELLAR ASSET CONTRACT", SAC],
              ["XRP262 ISSUER", ISSUER],
            ].map(([label, address]) => (
              <div
                key={label}
                className="card flex flex-col gap-3 rounded-lg p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">
                    {label}
                  </div>
                  <div className="mt-2 text-xs text-slate-600">
                    MAINNET / PUBLIC
                  </div>
                </div>
                <CopyAddress value={address} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="XRP262 logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <div className="font-mono text-xs tracking-[0.16em]">XRP262</div>
              <div className="mt-2 text-xs text-slate-600">
                Stellar-native asset infrastructure.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 font-mono text-[10px] text-slate-600 md:items-end">
            <span className="tracking-[0.18em] text-blue-400">
              POWERED BY LEXORA
            </span>
            <span>PUBLIC NETWORK · SOROBAN · MAINNET</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
