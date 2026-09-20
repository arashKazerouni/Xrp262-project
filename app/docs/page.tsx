import type { Metadata } from "next";
import AddressCopy from "./AddressCopy";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Technical reference for XRP262: asset identity, Stellar Asset Contract, LEXORA controller, supply policy, verification model, and public mainnet identifiers.",
  alternates: { canonical: "/docs" },
};

const LEXORA = "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const SAC = "CC7L34EWYCTDCA3L7CRRULWX577UJWET32KNJFD2WTEQ4KD7IAUKHIS6";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";
const DISTRIBUTION = "GBCPYP3TS6OAV37SXGKKY3YBY3QXMNWN2WZSDJ3RG2KZQAN5JWZDCY6Q";

const sections = [
  ["01", "Protocol model", "How the XRP262 asset, SAC, and LEXORA controller relate."],
  ["02", "Asset identity", "Canonical code, issuer, network, and contract identifiers."],
  ["03", "LEXORA state", "The controller policy surface and its current mainnet state."],
  ["04", "Supply accounting", "Genesis issuance, burn accounting, and the circulating-supply invariant."],
  ["05", "Verification", "How to independently reconcile addresses, state, balances, and transactions."],
];

const policy = [
  ["Registry", "ACTIVE", "The XRP262 asset record is active."],
  ["Token allowed", "TRUE", "The active registry state permits the token."],
  ["SAC binding", SAC, "Configured XRP262 Stellar Asset Contract."],
  ["Minting", "ENABLED", "Controller policy currently allows minting."],
  ["Paused", "FALSE", "Protocol pause flag is not active."],
  ["Clawback", "FALSE", "Clawback policy is disabled."],
  ["Max supply", "900,000,000,000 XRP262", "Configured maximum supply."],
  ["Minted", "900,000,000,000 XRP262", "Genesis amount recorded by the controller."],
  ["Burned", "426,026,808 XRP262", "Amount recorded as burned through the controller."],
  ["Circulating", "899,573,973,192 XRP262", "Minted minus burned."],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] font-semibold tracking-[0.2em] text-blue-400">
      {children}
    </div>
  );
}

function AddressRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-3 border-b border-slate-900 bg-[#0b101b] p-5 last:border-b-0 md:grid-cols-[220px_1fr]">
      <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
      <AddressCopy value={value} />
    </div>
  );
}

export default function DocumentationPage() {
  return (
    <main className="min-h-screen">


      <section className="relative border-b border-slate-900">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[620px]" />
        <div className="relative mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <SectionLabel>XRP262 / TECHNICAL REFERENCE</SectionLabel>
          <div className="mt-5 grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[68px] lg:leading-[.98]">
                Documentation for the protocol, not the pitch.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                A concise technical reference for developers, integrators, and anyone
                who wants to understand the XRP262 implementation from its public
                identifiers and on-chain state.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                This page documents the currently verified mainnet implementation. It
                does not describe unimplemented roadmap features or make guarantees
                beyond the contract state and repository implementation.
              </p>
            </div>
            <aside className="card blue-line rounded-2xl p-6 sm:p-8">
              <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">REFERENCE INDEX</div>
              <div className="mt-5 space-y-3">
                {sections.map(([number, title, description]) => (
                  <a key={number} href={`#section-${number}`} className="block rounded-lg border border-slate-800 bg-slate-950/45 p-4 transition hover:border-blue-500/30">
                    <div className="font-mono text-[9px] text-blue-400">{number}</div>
                    <div className="mt-1 text-sm text-slate-200">{title}</div>
                    <div className="mt-1 text-xs leading-5 text-slate-600">{description}</div>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="section-01" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>01 / PROTOCOL MODEL</SectionLabel>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Three distinct protocol layers.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            XRP262 uses a native Stellar asset identity, a Stellar Asset Contract
            representation, and a Soroban controller. These components are related but
            are not the same contract or account.
          </p>
        </div>
        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {[
            ["01", "CLASSIC ASSET", ISSUER, "XRP262 code + issuer identity on Stellar."],
            ["02", "STELLAR ASSET CONTRACT", SAC, "Soroban contract representation of the asset."],
            ["03", "LEXORA CONTROLLER", LEXORA, "Programmable registration and supply policy layer."],
          ].map(([n, title, address, body]) => (
            <article key={n} className="card rounded-xl p-6">
              <div className="font-mono text-[10px] text-blue-400">{n}</div>
              <h3 className="mt-6 text-base font-medium text-slate-100">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{body}</p>
              <div className="mt-6 break-all rounded-lg border border-slate-800 bg-slate-950/55 p-3 font-mono text-[9px] leading-5 text-slate-600">{address}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="section-02" className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>02 / ASSET IDENTITY</SectionLabel>
          <div className="mt-4 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Canonical identifiers.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              Use the asset code and issuer together to identify XRP262 as a Stellar
              classic asset. Contract addresses identify the separate Soroban layers.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-800">
            <AddressRow label="ASSET CODE" value="XRP262" />
            <AddressRow label="ISSUER" value={ISSUER} />
            <AddressRow label="SAC" value={SAC} />
            <AddressRow label="LEXORA CONTROLLER" value={LEXORA} />
            <AddressRow label="NETWORK" value="Public Global Stellar Network ; September 2015" />
            <AddressRow label="DISTRIBUTION ACCOUNT" value={DISTRIBUTION} />
          </div>
        </div>
      </section>

      <section id="section-03" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>03 / LEXORA STATE</SectionLabel>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Current controller policy.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            These values describe the verified XRP262 policy snapshot after the
            completed genesis sequence.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-800">
          {policy.map(([label, value, description], i) => (
            <div key={label} className={`grid gap-4 bg-[#0b101b] px-5 py-4 md:grid-cols-[190px_1fr_1.4fr] md:items-center ${i ? "border-t border-slate-800" : ""}`}>
              <span className="font-mono text-[9px] tracking-wider text-slate-500">{label}</span>
              <span className="break-all font-mono text-[10px] text-blue-300">{value}</span>
              <span className="text-xs leading-5 text-slate-600">{description}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="section-04" className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <SectionLabel>04 / SUPPLY ACCOUNTING</SectionLabel>
          <div className="mt-4 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">The supply model is explicit.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Genesis minting established the configured 900 billion XRP262 maximum.
                The completed sequence then recorded a 426,026,808 XRP262 burn.
              </p>
              <div className="mt-7 rounded-lg border border-blue-500/15 bg-blue-500/[0.035] p-5">
                <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400">INVARIANT</div>
                <div className="mt-3 font-mono text-xs leading-7 text-slate-400">
                  900,000,000,000 − 426,026,808 = 899,573,973,192 XRP262
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                ["GENESIS MINT", "900,000,000,000", "XRP262"],
                ["BURNED", "426,026,808", "XRP262"],
                ["CIRCULATING", "899,573,973,192", "XRP262"],
                ["LEXORA BALANCE", "0", "XRP262"],
                ["DISTRIBUTION BALANCE", "899,573,973,192", "XRP262"],
              ].map(([label, value, unit]) => (
                <div key={label} className="card flex items-center justify-between gap-5 rounded-lg p-5">
                  <span className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</span>
                  <span className="text-right font-mono text-sm text-slate-200">{value} <span className="text-[9px] text-slate-600">{unit}</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="section-05" className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <SectionLabel>05 / VERIFICATION WORKFLOW</SectionLabel>
        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Reproduce the verification independently.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            The recommended verification path is deliberately simple: identify the
            public contracts, read mainnet state, then reconcile supply and balances.
          </p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[
            ["01", "IDENTIFY", "Confirm the XRP262 issuer, SAC, and LEXORA controller addresses."],
            ["02", "READ", "Inspect contract state and asset balances through Stellar explorers or native Soroban RPC."],
            ["03", "RECONCILE", "Check minted, burned, circulating, registry, SAC administration, and balances against the documented state."],
          ].map(([n, title, body]) => (
            <article key={n} className="card rounded-xl p-6">
              <div className="font-mono text-[10px] text-blue-400">{n}</div>
              <h3 className="mt-6 text-lg font-medium text-slate-100">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a href="/verify" className="rounded-lg border border-slate-800 bg-slate-950/40 p-5 transition hover:border-blue-500/35">
            <div className="font-mono text-[9px] tracking-widest text-blue-400">VERIFICATION SURFACE</div>
            <div className="mt-2 text-sm text-slate-200">Open the complete mainnet verification page →</div>
          </a>
          <a href="/protocol" className="rounded-lg border border-slate-800 bg-slate-950/40 p-5 transition hover:border-blue-500/35">
            <div className="font-mono text-[9px] tracking-widest text-blue-400">FORMAL DOSSIER</div>
            <div className="mt-2 text-sm text-slate-200">Read the protocol architecture PDF →</div>
          </a>
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="card blue-line rounded-2xl p-7 sm:p-10">
            <SectionLabel>REFERENCE SCOPE</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Mainnet facts, implementation context, no roadmap fiction.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
              This reference intentionally focuses on the deployed XRP262 architecture
              and verified genesis state. Future features, integrations, governance
              models, audits, or market behavior should not be inferred from this page
              unless separately documented and verified.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="font-mono text-xs tracking-[0.16em]">XRP262 / DOCS</div>
            <div className="mt-2 text-xs text-slate-600">Technical reference for the deployed mainnet protocol.</div>
          </div>
          <div className="flex flex-wrap gap-5 font-mono text-[10px] text-slate-600">
            <a href="/" className="transition hover:text-blue-300">Home</a>
            <a href="/protocol" className="transition hover:text-blue-300">Protocol</a>
            <a href="/supply" className="transition hover:text-blue-300">Supply</a>
            <a href="/lexora" className="transition hover:text-blue-300">LEXORA</a>
            <a href="/verify" className="transition hover:text-blue-300">Verify</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
