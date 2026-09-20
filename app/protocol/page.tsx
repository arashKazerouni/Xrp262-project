import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP262 Protocol | Built to Be Verified",
  description:
    "Explore the XRP262 architecture, verified mainnet state, supply accounting, LEXORA controls, and public on-chain identifiers.",
  alternates: { canonical: "/protocol" },
};

const LEXORA = "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const SAC = "CC7L34EWYCTDCA3L7CRRULWX577UJWET32KNJFD2WTEQ4KD7IAUKHIS6";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";
const DISTRIBUTION = "GBCPYP3TS6OAV37SXGKKY3YBY3QXMNWN2WZSDJ3RG2KZQAN5JWZDCY6Q";

const transactions = [
  ["01", "GENESIS MINT", "9.00 × 10¹¹ XRP262", "7afe1d6f7be92cb0b7859b71c71e3eae4ad68fa523362c915217a425782be67f"],
  ["02", "REGISTRY ENABLE", "ASSET ACTIVATED", "c26e354ac5fe32565aeacd42cfe0dfcdad5e40bbb8f58c47a67ef08520859a90"],
  ["03", "LEXORA TRANSFER", "426,026,808 XRP262", "2f89fbfd0ced1d7392950a1a6bcbfb2f22ea61b0c9d77898447598b3e511cbc5"],
  ["04", "BURN", "426,026,808 XRP262", "4ed32c2fe4b14466c8ce92db3f94e695071e26db4ef49f7f8979b043cd65f434"],
];

const architecture = [
  ["01", "XRP262", "CLASSIC STELLAR ASSET", "The canonical asset identity on Stellar.", ISSUER],
  ["02", "XRP262 SAC", "STELLAR ASSET CONTRACT", "The Soroban representation of the Stellar asset.", SAC],
  ["03", "LEXORA", "SOROBAN CONTROLLER", "The programmable policy and accounting layer.", LEXORA],
];

const addresses = [
  ["LEXORA CONTROLLER", "SOROBAN / MAINNET", LEXORA, "contract"],
  ["XRP262 SAC", "SOROBAN / MAINNET", SAC, "contract"],
  ["XRP262 ISSUER", "CLASSIC ASSET / MAINNET", ISSUER, "account"],
  ["DISTRIBUTION", "TREASURY / MAINNET", DISTRIBUTION, "account"],
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] font-semibold tracking-[0.22em] text-blue-400">
      {children}
    </div>
  );
}

function CopyAddress({ value }: { value: string }) {
  return (
    <button
      type="button"
      title={value}
      onClick={async () => {
        await navigator.clipboard.writeText(value);
      }}
      className="group flex min-w-0 items-center gap-3 text-left"
    >
      <span className="truncate font-mono text-[10px] text-slate-500 transition group-hover:text-blue-300">
        {value}
      </span>
      <span className="shrink-0 font-mono text-[9px] tracking-widest text-slate-700 transition group-hover:text-blue-400">
        COPY
      </span>
    </button>
  );
}

function TxLink({ hash }: { hash: string }) {
  return (
    <a
      href={`https://stellar.expert/explorer/public/tx/${hash}`}
      target="_blank"
      rel="noreferrer"
      className="shrink-0 font-mono text-[9px] tracking-widest text-blue-400 transition hover:text-blue-300"
    >
      INSPECT ↗
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
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-blue-500/20 bg-blue-500/[0.05] px-3 py-1.5 font-mono text-[9px] tracking-[0.14em] text-blue-300 sm:inline-flex">
              MAINNET / ACTIVE
            </span>
            <a
              href="/protocol.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-slate-300 transition hover:border-blue-500/50 hover:text-white"
            >
              PDF ↗
            </a>
          </div>
        </div>
      </header>

      <section className="relative border-b border-slate-900">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[780px] opacity-60" />
        <div className="pointer-events-none absolute right-[-12rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full bg-blue-600/[0.07] blur-3xl" />

        <div className="relative mx-auto grid max-w-[1280px] gap-14 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.045] px-3 py-1.5 font-mono text-[9px] tracking-[0.18em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 pulse" />
              STELLAR MAINNET / PROTOCOL
            </div>

            <Label>01 / THE PROTOCOL</Label>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-[78px] lg:leading-[0.93]">
              Infrastructure
              <span className="block text-blue-400">you can verify.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              XRP262 combines a native Stellar asset, its Stellar Asset Contract,
              and the LEXORA controller into a clearly separated protocol stack.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              This page answers the questions that matter before trust: what exists,
              where it lives, how the pieces connect, and what mainnet state can be checked independently.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/verify"
                className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(37,99,235,.18)] transition hover:bg-blue-500"
              >
                Verify on mainnet
              </a>
              <a
                href="#architecture"
                className="rounded-md border border-slate-700 bg-slate-950/50 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white"
              >
                Explore architecture
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-800 pt-6 font-mono text-[9px] tracking-[0.13em] text-slate-600">
              <span><b className="text-blue-400">PUBLIC</b> IDENTIFIERS</span>
              <span><b className="text-blue-400">ON-CHAIN</b> STATE</span>
              <span><b className="text-blue-400">900B</b> MAX SUPPLY</span>
            </div>
          </div>

          <div className="relative">
            <div className="card blue-line rounded-2xl p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">PROTOCOL MAP</div>
                  <div className="mt-2 text-sm font-medium text-slate-200">One asset. Three explicit layers.</div>
                </div>
                <span className="font-mono text-[9px] text-blue-400">LIVE / PUBLIC</span>
              </div>

              <div className="mt-6 space-y-2">
                {architecture.map(([n, name, type, body, address], index) => (
                  <div key={name}>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/65 p-4 transition hover:border-blue-500/35">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] text-blue-400">{n}</span>
                          <span className="text-sm font-medium text-slate-100">{name}</span>
                        </div>
                        <span className="font-mono text-[8px] tracking-[0.12em] text-slate-700">{type}</span>
                      </div>
                      <p className="mt-3 text-xs leading-5 text-slate-500">{body}</p>
                      <div className="mt-3 truncate font-mono text-[9px] text-slate-600">{address}</div>
                    </div>
                    {index < 2 && <div className="mx-auto h-5 w-px bg-blue-500/35" />}
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-800 pt-5">
                {[
                  ["NETWORK", "PUBLIC"],
                  ["REGISTRY", "ACTIVE"],
                  ["PROOF", "LEDGER"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="font-mono text-[8px] tracking-widest text-slate-700">{k}</div>
                    <div className="mt-1 font-mono text-[10px] text-blue-300">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto grid max-w-[1280px] gap-px overflow-hidden border-x border-slate-800 bg-slate-800 sm:grid-cols-3">
          {[
            ["CLARITY", "Separate the asset, its Soroban interface, and its controller."],
            ["EVIDENCE", "Use public identifiers, transactions, and state—not screenshots."],
            ["CONTROL", "Expose the policy surface so important state is inspectable."],
          ].map(([title, body]) => (
            <div key={title} className="bg-[#0b101b] p-6">
              <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400">{title}</div>
              <p className="mt-2 text-xs leading-6 text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="architecture" className="mx-auto max-w-[1280px] scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <Label>02 / ARCHITECTURE</Label>
        <div className="mt-5 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Simple enough to understand.
              <span className="block text-slate-500">Specific enough to inspect.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-500">
            XRP262 is intentionally not presented as one opaque contract. Each layer has
            a distinct role and public identifier. That separation reduces ambiguity for users,
            integrators, and anyone reviewing the protocol.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {architecture.map(([n, type, title, body, address]) => (
            <article key={n} className="card group rounded-xl p-7 transition hover:-translate-y-0.5 hover:border-blue-500/35">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-blue-400">{n}</span>
                <span className="font-mono text-[8px] tracking-[0.16em] text-slate-700">{type}</span>
              </div>
              <h3 className="mt-10 text-xl font-medium text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">{body}</p>
              <div className="mt-8 border-t border-slate-800 pt-4">
                <CopyAddress value={address} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["ASSET", "Defines XRP262 on Stellar."],
            ["SAC", "Makes that asset available to Soroban."],
            ["LEXORA", "Records controller policy and supply state."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl border border-slate-800 bg-slate-950/35 p-5">
              <div className="font-mono text-[9px] tracking-widest text-slate-600">{title}</div>
              <p className="mt-2 text-xs leading-6 text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Label>03 / VERIFIED STATE</Label>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                The numbers have a reason to be here.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                This is the completed genesis snapshot: issuance, burn accounting,
                and the resulting circulating supply reconcile to one explicit invariant.
              </p>
            </div>
            <a href="/supply" className="font-mono text-[10px] tracking-widest text-blue-400 transition hover:text-blue-300">
              OPEN SUPPLY ARCHITECTURE →
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["MAX SUPPLY", "900,000,000,000", "XRP262"],
              ["GENESIS MINTED", "900,000,000,000", "XRP262"],
              ["BURNED", "426,026,808", "XRP262"],
              ["CIRCULATING", "899,573,973,192", "XRP262"],
            ].map(([label, value, unit], i) => (
              <div key={label} className={`card rounded-xl p-6 ${i === 3 ? "border-blue-500/30 bg-blue-500/[0.035]" : ""}`}>
                <div className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</div>
                <div className="mt-5 font-mono text-xl tracking-tight text-white">{value}</div>
                <div className="mt-1 text-[10px] text-slate-600">{unit}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/[0.035] p-6">
            <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400">SUPPLY INVARIANT</div>
            <div className="mt-3 overflow-x-auto font-mono text-sm text-slate-200">
              900,000,000,000 − 426,026,808 = 899,573,973,192 XRP262
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-600">
              Genesis mint minus recorded burn equals the stated circulating supply.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <Label>04 / LEXORA CONTROL PLANE</Label>
        <div className="mt-5 grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Policy that is visible,
              <span className="block text-slate-500">not implied.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              LEXORA is the controller layer behind XRP262. Its public state makes
              important protocol conditions easier to understand and independently check.
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
              <Label>05 / GENESIS TRAIL</Label>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Follow the state change.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                Four completed mainnet transactions explain the genesis path from
                initial issuance to the final reconciled supply state.
              </p>
              <a href="/verify" className="mt-7 inline-flex font-mono text-[10px] tracking-widest text-blue-400 transition hover:text-blue-300">
                VIEW VERIFICATION SURFACE →
              </a>
            </div>

            <div className="space-y-3">
              {transactions.map(([n, label, result, hash]) => (
                <div key={hash} className="card rounded-xl p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="font-mono text-[10px] text-blue-400">{n}</span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</span>
                          <span className="rounded-full border border-slate-800 px-2 py-0.5 font-mono text-[8px] text-slate-600">{result}</span>
                        </div>
                        <div className="mt-2 truncate font-mono text-[9px] text-slate-500">{hash}</div>
                      </div>
                    </div>
                    <TxLink hash={hash} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <Label>06 / PUBLIC IDENTIFIERS</Label>
        <div className="mt-5 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Nothing important should depend on a shortened address.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            The canonical identifiers are displayed here so you can copy them directly,
            compare them elsewhere, or inspect them through Stellar infrastructure.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-slate-800">
          {addresses.map(([label, type, address, kind]) => (
            <div key={label} className="grid gap-4 border-b border-slate-800 bg-[#0b101b] p-5 last:border-b-0 md:grid-cols-[230px_1fr_auto] md:items-center">
              <div>
                <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
                <div className="mt-1 font-mono text-[8px] tracking-widest text-slate-700">{type}</div>
              </div>
              <CopyAddress value={address} />
              <a
                href={`https://stellar.expert/explorer/public/${kind}/${address}`}
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
                <Label>07 / VERIFICATION FIRST</Label>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  The website is the map. The ledger is the evidence.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Use this page to understand the system, the formal protocol PDF for the
                  dossier, and the verification surface to check the public mainnet state yourself.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="/verify" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500">
                  Verify XRP262
                </a>
                <a href="/protocol.pdf" target="_blank" rel="noreferrer" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">
                  Protocol PDF
                </a>
                <a href="/docs.pdf" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="XRP262 logo" className="h-11 w-11 object-contain" />
            <div>
              <div className="font-mono text-xs tracking-[0.16em]">XRP262</div>
              <div className="mt-2 text-xs text-slate-600">Stellar-native asset infrastructure.</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 font-mono text-[10px] text-slate-600">
            <a href="/" className="transition hover:text-blue-300">Overview</a>
            <a href="/protocol" className="transition hover:text-blue-300">Protocol</a>
            <a href="/docs.pdf" className="transition hover:text-blue-300">Docs</a>
            <a href="/supply" className="transition hover:text-blue-300">Supply</a>
            <a href="/lexora" className="transition hover:text-blue-300">LEXORA</a>
            <a href="/verify" className="transition hover:text-blue-300">Verify</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
