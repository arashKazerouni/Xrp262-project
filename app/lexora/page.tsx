'use client';

import { useState } from "react";

const LEXORA = "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const SAC = "CC7L34EWYCTDCA3L7CRRULWX577UJWET32KNJFD2WTEQ4KD7IAUKHIS6";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";

const policy = [
  ["MAX SUPPLY", "900,000,000,000", "XRP262"],
  ["MINTED", "900,000,000,000", "XRP262"],
  ["BURNED", "426,026,808", "XRP262"],
  ["CIRCULATING", "899,573,973,192", "XRP262"],
];

const capabilities = [
  ["01", "Asset registration", "Registers an asset identity in the controller registry and records its active/disabled status."],
  ["02", "Asset allowance", "Exposes an explicit is_token_allowed state so integrations can check whether a registered asset is currently active."],
  ["03", "SAC binding", "Stores the configured XRP262 Stellar Asset Contract address as part of the controller policy surface."],
  ["04", "Supply policy", "Tracks maximum supply, minted amount, burned amount, minting state, pause state, and clawback policy state."],
  ["05", "Controlled minting", "Owner-authorized minting is constrained by the configured maximum-supply accounting and controller policy."],
  ["06", "Burn accounting", "Records XRP262 burned through the controller and exposes the resulting supply accounting on-chain."],
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
      <span className="max-w-[420px] truncate font-mono text-[11px] text-slate-400 transition group-hover:text-blue-300">{value}</span>
      <span className="shrink-0 font-mono text-[9px] tracking-widest text-slate-600 group-hover:text-blue-400">{copied ? "COPIED" : "COPY"}</span>
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="font-mono text-[10px] font-semibold tracking-[0.2em] text-blue-400">{children}</div>;
}

export default function LexoraPage() {
  return (
    <main className="min-h-screen overflow-hidden">


      <section className="relative border-b border-slate-900">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[760px]" />
        <div className="mx-auto grid max-w-[1280px] gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-32">
          <div className="relative">
            <SectionLabel>LEXORA / PROGRAMMABLE CONTROLLER</SectionLabel>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[72px] lg:leading-[.98]">
              The control plane behind XRP<span className="text-blue-400">262</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-300">
              LEXORA is the Soroban controller that gives XRP262 an explicit, inspectable policy layer around registration and supply management.
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-500">
              Instead of hiding protocol state behind a website, XRP262 exposes the controller address, the asset contract binding, supply policy, and current registry state so users and integrators can verify the system directly on Stellar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#capabilities" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_0_32px_rgba(37,99,235,.22)] transition hover:bg-blue-500">Explore controls</a>
              <a href="/verify" className="rounded-md border border-slate-700 bg-slate-950/50 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">Verify on-chain</a>
            </div>
            <div className="mt-12 border-t border-slate-800 pt-6">
              <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">LEXORA CONTRACT ACCOUNT</div>
              <div className="mt-3 flex items-center gap-4">
                <CopyAddress value={LEXORA} />
                <span className="hidden rounded border border-blue-500/20 bg-blue-500/[0.05] px-2 py-1 font-mono text-[9px] text-blue-300 sm:inline-flex">SOROBAN / MAINNET</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-blue-600/[0.07] blur-3xl" />
            <div className="card blue-line relative rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">CONTROL PLANE</div>
                  <div className="mt-2 text-sm font-medium text-slate-200">XRP262 policy surface</div>
                </div>
                <span className="rounded-full border border-blue-500/20 px-2.5 py-1 font-mono text-[9px] text-blue-300">ACTIVE</span>
              </div>
              <div className="mt-6 space-y-2">
                {[
                  ["ASSET REGISTRY", "ACTIVE"],
                  ["TOKEN ALLOWED", "TRUE"],
                  ["SAC BINDING", "VERIFIED"],
                  ["MINTING", "ENABLED"],
                  ["PAUSED", "FALSE"],
                  ["CLAWBACK POLICY", "FALSE"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/55 px-4 py-3">
                    <span className="font-mono text-[9px] tracking-wider text-slate-600">{k}</span>
                    <span className="font-mono text-[10px] text-slate-300">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-slate-800 pt-5">
                <div className="font-mono text-[9px] tracking-wider text-slate-600">CONFIGURED SAC</div>
                <div className="mt-2 truncate font-mono text-[10px] text-blue-300">{SAC}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>01 / CONTROLLER CAPABILITIES</SectionLabel>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Explicit controls. Public state.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            The controller contract defines the policy surface used by XRP262. These are contract capabilities and state variables—not promises about future functionality.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 md:grid-cols-2">
          {capabilities.map(([n, title, body]) => (
            <article key={n} className="bg-[#0b101b] p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-[10px] text-blue-400">{n}</span>
                <span className="font-mono text-[9px] tracking-widest text-slate-700">ON-CHAIN</span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-slate-100">{title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>02 / CONTROL FLOW</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">One asset. Three protocol layers.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            LEXORA does not replace the native Stellar asset. It sits alongside the asset and its Stellar Asset Contract as a programmable policy and accounting layer.
          </p>
          <div className="mt-12 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
            {[
              ["01", "XRP262 ASSET", ISSUER, "Classic Stellar asset identity"],
              ["02", "SAC", SAC, "Soroban interface for the Stellar asset"],
              ["03", "LEXORA", LEXORA, "Controller policy and supply accounting"],
            ].map(([n, title, address, description], i) => (
              <div key={title} className="contents">
                <div className="card rounded-xl p-6">
                  <div className="font-mono text-[10px] text-blue-400">{n}</div>
                  <h3 className="mt-7 text-base font-medium">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600">{description}</p>
                  <div className="mt-7 truncate font-mono text-[9px] text-slate-500">{address}</div>
                </div>
                {i < 2 && <div className="hidden items-center justify-center lg:flex"><span className="text-blue-500/60">→</span></div>}
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-lg border border-blue-500/15 bg-blue-500/[0.035] p-5">
            <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400">DESIGN PRINCIPLE</div>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              Keep the underlying asset recognizable and interoperable, while making the protocol policy surface explicit and inspectable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>03 / LIVE POLICY SNAPSHOT</SectionLabel>
        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Supply policy, in one view.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Current XRP262 controller records verified from the completed mainnet genesis state.
            </p>
          </div>
          <a href="/supply" className="font-mono text-[10px] tracking-widest text-blue-400 transition hover:text-blue-300">OPEN SUPPLY ARCHITECTURE →</a>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {policy.map(([label, value, unit]) => (
            <div key={label} className="card rounded-lg p-5">
              <div className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</div>
              <div className="mt-4 font-mono text-xl tracking-tight text-slate-100">{value}</div>
              <div className="mt-1 text-[10px] text-slate-600">{unit}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["MINTING ENABLED", "TRUE"],
            ["PAUSED", "FALSE"],
            ["CLAWBACK ENABLED", "FALSE"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-slate-800 bg-slate-950/35 px-5 py-4">
              <div className="font-mono text-[9px] tracking-widest text-slate-600">{label}</div>
              <div className="mt-2 font-mono text-sm text-blue-300">{value}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-slate-800 bg-slate-950/45 p-5 font-mono text-xs text-slate-500">
          <span className="text-blue-400">INVARIANT</span> · 900,000,000,000 minted − 426,026,808 burned = 899,573,973,192 circulating
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <SectionLabel>04 / VERIFIABLE BY DESIGN</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Trust the ledger, not the page.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Every important address shown here is public. The controller state can be read through Stellar infrastructure, and the protocol dossier documents the architecture and completed genesis sequence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/verify" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500">Open verification</a>
                <a href="/protocol.pdf" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">Protocol dossier</a>
              </div>
            </div>
            <div className="space-y-3">
              {[
                ["LEXORA CONTROLLER", LEXORA],
                ["XRP262 STELLAR ASSET CONTRACT", SAC],
                ["XRP262 ISSUER", ISSUER],
              ].map(([label, address]) => (
                <div key={label} className="card rounded-lg p-5">
                  <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
                  <div className="mt-3 flex min-w-0 items-center justify-between gap-5">
                    <CopyAddress value={address} />
                    <span className="hidden shrink-0 font-mono text-[9px] text-slate-700 sm:inline">PUBLIC ADDRESS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="font-mono text-xs tracking-[0.16em]">LEXORA</div>
            <div className="mt-2 text-xs text-slate-600">Programmable controller infrastructure for XRP262.</div>
          </div>
          <div className="flex flex-wrap gap-5 font-mono text-[10px] text-slate-600">
            <a href="/" className="transition hover:text-blue-300">Home</a>
            <a href="/protocol.pdf" className="transition hover:text-blue-300">Protocol</a>
            <a href="/supply" className="transition hover:text-blue-300">Supply</a>
            <a href="/verify" className="transition hover:text-blue-300">Verify</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
