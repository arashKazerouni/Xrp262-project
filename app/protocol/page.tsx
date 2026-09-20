import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP262 Protocol | Architecture You Can Verify",
  description:
    "Explore the XRP262 protocol architecture, verified mainnet contracts, supply controls, and the LEXORA controller.",
  alternates: { canonical: "/protocol" },
};

const LEXORA = "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const SAC = "CC7L34EWYCTDCA3L7CRRULWX577UJWET32KNJFD2WTEQ4KD7IAUKHIS6";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";
const DISTRIBUTION = "GBCPYP3TS6OAV37SXGKKY3YBY3QXMNWN2WZSDJ3RG2KZQAN5JWZDCY6Q";

const transactions = [
  ["GENESIS MINT", "7afe1d6f7be92cb0b7859b71c71e3eae4ad68fa523362c915217a425782be67f"],
  ["REGISTRY ENABLE", "c26e354ac5fe32565aeacd42cfe0dfcdad5e40bbb8f58c47a67ef08520859a90"],
  ["LEXORA TRANSFER", "2f89fbfd0ced1d7392950a1a6bcbfb2f22ea61b0c9d77898447598b3e511cbc5"],
  ["BURN", "4ed32c2fe4b14466c8ce92db3f94e695071e26db4ef49f7f8979b043cd65f434"],
];

const addresses = [
  ["LEXORA CONTROLLER", LEXORA, "SOROBAN CONTRACT"],
  ["XRP262 SAC", SAC, "STELLAR ASSET CONTRACT"],
  ["XRP262 ISSUER", ISSUER, "CLASSIC STELLAR ASSET"],
  ["DISTRIBUTION", DISTRIBUTION, "TREASURY / DISTRIBUTION"],
];

function CopyAddress({ value }: { value: string }) {
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(value);
      }}
      className="group flex min-w-0 items-center gap-3 text-left font-mono text-[11px] leading-5 text-slate-400 transition hover:text-blue-300"
      title={value}
    >
      <span className="truncate">{value}</span>
      <span className="shrink-0 text-[9px] tracking-widest text-slate-700 group-hover:text-blue-400">
        COPY
      </span>
    </button>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] font-semibold tracking-[0.22em] text-blue-400">
      {children}
    </div>
  );
}

function ExplorerLink({ hash }: { hash: string }) {
  return (
    <a
      href={`https://stellar.expert/explorer/public/tx/${hash}`}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-[9px] tracking-widest text-blue-400 transition hover:text-blue-300"
    >
      VIEW TX ↗
    </a>
  );
}

export default function ProtocolPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="XRP262 home">
            <img src="/logo.png" alt="XRP262" className="h-9 w-9 object-contain" />
            <span className="text-sm font-semibold tracking-[0.14em]">XRP262</span>
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[10px] tracking-wider text-slate-500 md:flex">
            <a href="/" className="transition hover:text-white">OVERVIEW</a>
            <a href="/protocol" className="text-blue-300">PROTOCOL</a>
            <a href="/supply" className="transition hover:text-white">SUPPLY</a>
            <a href="/lexora" className="transition hover:text-white">LEXORA</a>
            <a href="/verify" className="transition hover:text-white">VERIFY</a>
          </nav>
          <a
            href="/protocol.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-blue-500/25 bg-blue-500/[0.06] px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-blue-300 transition hover:border-blue-400/50"
          >
            PROTOCOL PDF ↗
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_72%_18%,rgba(37,99,235,.14),transparent_34rem)]" />
        <div className="mx-auto grid max-w-[1280px] gap-14 px-4 pb-24 pt-24 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-32">
          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.045] px-3 py-1.5 font-mono text-[9px] tracking-[0.18em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 pulse" />
              STELLAR MAINNET / PROTOCOL REFERENCE
            </div>
            <Label>THE XRP262 PROTOCOL</Label>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-[76px] lg:leading-[.94]">
              An asset system built to be
              <span className="block text-blue-400">inspected.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              XRP262 combines a native Stellar asset, its Stellar Asset Contract,
              and the LEXORA controller into one explicit protocol architecture.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              This page is the public architecture layer: what exists, where it
              lives, how the components relate, and which mainnet state can be
              independently verified.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="/verify" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_0_36px_rgba(37,99,235,.2)] transition hover:bg-blue-500">
                Verify on mainnet
              </a>
              <a href="/protocol.pdf" target="_blank" rel="noreferrer" className="rounded-md border border-slate-700 bg-slate-950/50 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">
                Read protocol dossier
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-12 rounded-full bg-blue-600/[0.06] blur-3xl" />
            <div className="card blue-line relative rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">PROTOCOL STACK</div>
                  <div className="mt-2 text-sm font-medium text-slate-200">Three layers. Clear boundaries.</div>
                </div>
                <div className="font-mono text-[9px] text-blue-400">MAINNET</div>
              </div>

              <div className="mt-6 space-y-2">
                {[
                  ["01", "XRP262", "CLASSIC STELLAR ASSET", ISSUER],
                  ["02", "XRP262 SAC", "STELLAR ASSET CONTRACT", SAC],
                  ["03", "LEXORA", "SOROBAN CONTROLLER", LEXORA],
                ].map(([number, name, type, address], index) => (
                  <div key={name}>
                    <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 transition hover:border-blue-500/40">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-blue-400">{number}</span>
                        <span className="text-sm font-medium text-slate-200">{name}</span>
                      </div>
                      <div className="mt-2 font-mono text-[8px] tracking-[0.14em] text-slate-600">{type}</div>
                      <div className="mt-4 truncate font-mono text-[10px] text-slate-500">{address}</div>
                    </div>
                    {index < 2 && <div className="mx-auto h-6 w-px bg-gradient-to-b from-blue-500/60 to-transparent" />}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-800 pt-5">
                {[
                  ["NETWORK", "PUBLIC"],
                  ["STATE", "ACTIVE"],
                  ["PROOF", "ON-CHAIN"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="font-mono text-[8px] tracking-widest text-slate-700">{label}</div>
                    <div className="mt-1 font-mono text-[10px] text-blue-300">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto grid max-w-[1280px] gap-px overflow-hidden border-x border-slate-800 bg-slate-800 sm:grid-cols-3">
          {[
            ["NATIVE ASSET", "XRP262 exists as a classic Stellar asset."],
            ["SOROBAN INTERFACE", "The SAC exposes the asset to Soroban."],
            ["POLICY LAYER", "LEXORA records explicit controller state."],
          ].map(([title, body]) => (
            <div key={title} className="bg-[#0b101b] p-6">
              <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{title}</div>
              <p className="mt-2 text-xs leading-6 text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <Label>01 / ARCHITECTURE</Label>
        <div className="mt-5 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            Separate the asset from the systems around it.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-500">
            XRP262 is intentionally presented as distinct layers. The issuer identifies
            the native asset; the SAC is its Soroban representation; LEXORA is the
            programmable controller and policy surface.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {[
            ["01", "CLASSIC ASSET", "XRP262", "Native Stellar asset", ISSUER],
            ["02", "STELLAR ASSET CONTRACT", "XRP262 SAC", "Soroban representation", SAC],
            ["03", "LEXORA CONTROLLER", "LEXORA", "Programmable policy layer", LEXORA],
          ].map(([number, type, title, description, address]) => (
            <div key={number} className="card group rounded-xl p-7 transition hover:-translate-y-0.5 hover:border-blue-500/35">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-blue-400">{number}</span>
                <span className="font-mono text-[8px] tracking-[0.16em] text-slate-700">{type}</span>
              </div>
              <h3 className="mt-10 text-xl font-medium text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
              <div className="mt-8 border-t border-slate-800 pt-4">
                <CopyAddress value={address} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/45 p-6 text-sm leading-7 text-slate-500">
          These components are related, but they are not interchangeable. Keeping
          their identities explicit makes the architecture easier to inspect and verify.
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <Label>02 / SUPPLY CONTROL</Label>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Supply state with a visible accounting trail.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                The completed genesis sequence is reconciled through explicit mint
                and burn accounting. The numbers below are the verified protocol snapshot.
              </p>
            </div>
            <a href="/supply" className="font-mono text-[10px] tracking-widest text-blue-400 transition hover:text-blue-300">
              EXPLORE SUPPLY ARCHITECTURE →
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["MAX SUPPLY", "900,000,000,000", "XRP262"],
              ["GENESIS MINTED", "900,000,000,000", "XRP262"],
              ["BURNED", "426,026,808", "XRP262"],
              ["CIRCULATING", "899,573,973,192", "XRP262"],
            ].map(([label, value, unit]) => (
              <div key={label} className="card rounded-xl p-6">
                <div className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</div>
                <div className="mt-5 font-mono text-xl tracking-tight text-white">{value}</div>
                <div className="mt-1 text-[10px] text-slate-600">{unit}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/[0.035] p-6">
            <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400">SUPPLY INVARIANT</div>
            <div className="mt-3 overflow-x-auto font-mono text-sm text-slate-300">
              900,000,000,000 − 426,026,808 = 899,573,973,192 XRP262
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <Label>03 / LEXORA CONTROL PLANE</Label>
        <div className="mt-5 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
              The policy surface behind XRP262.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              LEXORA adds an explicit, inspectable controller layer around registration
              and supply management. It does not replace the native Stellar asset.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/lexora" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500">
                Explore LEXORA
              </a>
              <a href="/verify" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">
                Verify state
              </a>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 sm:grid-cols-2">
            {[
              ["REGISTRY", "ACTIVE"],
              ["TOKEN ALLOWED", "TRUE"],
              ["SAC BINDING", "VERIFIED"],
              ["MINTING", "ENABLED"],
              ["PAUSED", "FALSE"],
              ["CLAWBACK", "FALSE"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#0b101b] p-5">
                <div className="font-mono text-[9px] tracking-widest text-slate-600">{label}</div>
                <div className="mt-3 font-mono text-sm text-blue-300">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <Label>04 / GENESIS EXECUTION</Label>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                From issuance to final state.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                The protocol dossier records the completed mainnet sequence. Each
                transaction is independently inspectable on Stellar.
              </p>
            </div>

            <div className="space-y-3">
              {transactions.map(([label, hash], index) => (
                <div key={hash} className="card rounded-xl p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-[10px] text-blue-400">0{index + 1}</span>
                      <div className="min-w-0">
                        <div className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</div>
                        <div className="mt-2 truncate font-mono text-[10px] text-slate-400">{hash}</div>
                      </div>
                    </div>
                    <ExplorerLink hash={hash} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <Label>05 / CONTRACT REGISTRY</Label>
        <div className="mt-5 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            Public identifiers. No black boxes.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            These are the canonical mainnet addresses used by the XRP262 protocol.
            Copy them directly or inspect them through Stellar infrastructure.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-slate-800">
          {addresses.map(([label, address, type]) => (
            <div key={label} className="grid gap-4 border-b border-slate-800 bg-[#0b101b] p-5 last:border-b-0 md:grid-cols-[240px_1fr_auto] md:items-center">
              <div>
                <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
                <div className="mt-1 font-mono text-[8px] tracking-widest text-slate-700">{type}</div>
              </div>
              <CopyAddress value={address} />
              <a
                href={`https://stellar.expert/explorer/public/${label.includes("ISSUER") ? `account/${address}` : `contract/${address}`}`}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[9px] tracking-widest text-slate-600 transition hover:text-blue-300"
              >
                INSPECT ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="card blue-line rounded-2xl p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Label>VERIFICATION FIRST</Label>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Read the architecture. Inspect the state. Verify the ledger.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Use this page for orientation, the protocol PDF for the formal
                  dossier, and the verification surface for direct mainnet checks.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="/verify" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500">
                  Verify XRP262
                </a>
                <a href="/protocol.pdf" target="_blank" rel="noreferrer" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">
                  Open PDF ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="XRP262" className="h-9 w-9 object-contain" />
            <div>
              <div className="font-mono text-xs tracking-[0.16em]">XRP262</div>
              <div className="mt-1 text-xs text-slate-600">Stellar-native asset infrastructure.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 font-mono text-[10px] text-slate-600">
            <a href="/" className="transition hover:text-blue-300">Overview</a>
            <a href="/protocol.pdf" className="transition hover:text-blue-300">Protocol PDF</a>
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
