import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protocol Architecture",
  description:
    "The XRP262 protocol architecture: Stellar classic asset, XRP262 Stellar Asset Contract, and LEXORA controller.",
  alternates: { canonical: "/protocol" },
};

const LEXORA = "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const SAC = "CC7L34EWYCTDCA3L7CRRULWX577UJWET32KNJFD2WTEQ4KD7IAUKHIS6";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";

const layers = [
  {
    number: "01",
    name: "XRP262 CLASSIC ASSET",
    type: "STELLAR NATIVE ASSET",
    address: ISSUER,
    description:
      "The native Stellar asset identified by the XRP262 code and its issuer account.",
  },
  {
    number: "02",
    name: "XRP262 SAC",
    type: "STELLAR ASSET CONTRACT",
    address: SAC,
    description:
      "The Soroban representation of the Stellar asset, with its administrator bound to LEXORA.",
  },
  {
    number: "03",
    name: "LEXORA CONTROLLER",
    type: "SOROBAN CONTRACT",
    address: LEXORA,
    description:
      "The programmable controller responsible for XRP262 registration and explicit protocol policy state.",
  },
];

const controls = [
  ["Token registry", "Active / Disabled state for registered assets"],
  ["Token allowance", "Active registry state determines whether the token is allowed"],
  ["Maximum supply", "Explicit XRP262 supply ceiling recorded in policy state"],
  ["Mint accounting", "Tracks the amount minted against the configured policy"],
  ["Burn accounting", "Tracks XRP262 permanently removed through the controller flow"],
  ["Minting state", "Explicit minting-enabled policy flag"],
  ["Pause state", "Explicit protocol pause flag"],
  ["SAC binding", "Configured XRP262 SAC address is stored and verifiable"],
];

function CopyAddress({ value }: { value: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(value)}
      className="break-all text-left font-mono text-[11px] leading-5 text-slate-500 transition hover:text-blue-300"
      title="Copy address"
    >
      {value}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] font-semibold tracking-[0.2em] text-blue-400">
      {children}
    </div>
  );
}

export default function ProtocolPage() {
  return (
    <main className="min-h-screen">
      <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="XRP262 home">
            <img src="/logo.png" alt="XRP262" className="h-9 w-9 object-contain" />
            <span className="text-sm font-semibold tracking-[0.14em]">XRP262</span>
          </a>
          <nav className="hidden items-center gap-7 text-xs text-slate-400 md:flex">
            <a href="/" className="transition hover:text-white">Overview</a>
            <a href="/protocol" className="text-blue-300">Protocol</a>
            <a href="/supply" className="transition hover:text-white">Supply</a>
            <a href="/lexora" className="transition hover:text-white">LEXORA</a>
            <a href="/verify" className="transition hover:text-white">Verify</a>
          </nav>
          <a
            href="https://stellar.expert/explorer/public/asset/XRP262-GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP-2"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-blue-300 transition hover:border-blue-400/50"
          >
            ASSET ↗
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionLabel>01 / PROTOCOL ARCHITECTURE</SectionLabel>
        <div className="mt-5 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
              Three layers. One verifiable asset system.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
              XRP262 separates the native Stellar asset, its Soroban Asset Contract,
              and the LEXORA controller into explicit protocol layers with public
              addresses and inspectable state.
            </p>
          </div>
          <div className="card rounded-xl p-6">
            <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">NETWORK</div>
            <div className="mt-3 text-lg text-white">STELLAR MAINNET</div>
            <div className="mt-2 font-mono text-[10px] text-blue-400">
              Public Global Stellar Network ; September 2015
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <SectionLabel>02 / LAYER MODEL</SectionLabel>
          <div className="mt-10 space-y-3">
            {layers.map((layer, index) => (
              <div key={layer.number}>
                <div className="card grid gap-6 rounded-xl p-6 lg:grid-cols-[72px_1fr_1.2fr] lg:items-center">
                  <div className="font-mono text-sm text-blue-400">{layer.number}</div>
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{layer.type}</div>
                    <h2 className="mt-2 text-xl font-medium text-slate-100">{layer.name}</h2>
                  </div>
                  <div>
                    <p className="text-sm leading-6 text-slate-500">{layer.description}</p>
                    <CopyAddress value={layer.address} />
                  </div>
                </div>
                {index < layers.length - 1 && (
                  <div className="ml-9 h-8 w-px bg-gradient-to-b from-blue-500/60 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
        <SectionLabel>03 / CONTROL SURFACE</SectionLabel>
        <div className="mt-5 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Explicit state instead of hidden assumptions.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            LEXORA records protocol state in defined storage structures. The following
            controls are part of the XRP262 implementation and can be independently
            inspected on mainnet.
          </p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 sm:grid-cols-2">
          {controls.map(([title, description]) => (
            <div key={title} className="bg-[#0b101b] p-6">
              <div className="text-sm font-medium text-slate-200">{title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-500">{description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <SectionLabel>04 / CONTROL RELATIONSHIP</SectionLabel>
          <div className="mt-10 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            {[
              ["ISSUER", "XRP262", "Classic Stellar asset"],
              ["SAC", "XRP262 SAC", "Soroban asset interface"],
              ["CONTROLLER", "LEXORA", "Protocol policy layer"],
            ].map(([role, name, description], index) => (
              <div key={role} className="contents">
                <div className="card rounded-xl p-6">
                  <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400">{role}</div>
                  <div className="mt-4 text-lg text-white">{name}</div>
                  <div className="mt-2 text-xs text-slate-600">{description}</div>
                </div>
                {index < 2 && (
                  <div className="hidden text-center font-mono text-blue-500 md:block">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-slate-800 bg-slate-950/50 p-5 text-sm leading-7 text-slate-500">
            The layers are related, but they are not interchangeable. The issuer is a
            Stellar account, the SAC is a Soroban contract representation of the asset,
            and LEXORA is the protocol controller. This distinction is part of the
            public verification model.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
        <SectionLabel>05 / PUBLIC ADDRESSES</SectionLabel>
        <div className="mt-8 divide-y divide-slate-900 overflow-hidden rounded-xl border border-slate-800">
          {[
            ["LEXORA CONTROLLER", LEXORA],
            ["XRP262 SAC", SAC],
            ["XRP262 ISSUER", ISSUER],
          ].map(([label, address]) => (
            <div key={label} className="grid gap-3 bg-[#0b101b] p-5 md:grid-cols-[240px_1fr]">
              <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
              <CopyAddress value={address} />
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="XRP262" className="h-8 w-8 object-contain" />
            <span className="font-mono text-xs tracking-[0.14em]">XRP262</span>
          </a>
          <div className="flex gap-5 font-mono text-[10px] text-slate-600">
            <a href="/supply" className="transition hover:text-blue-300">Supply</a>
            <a href="/lexora" className="transition hover:text-blue-300">LEXORA</a>
            <a href="/verify" className="transition hover:text-blue-300">Verify</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
