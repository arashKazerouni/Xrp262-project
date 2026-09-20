import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XRP262 Supply | Transparent On-Chain Accounting",
  description:
    "Explore XRP262 genesis issuance, burn accounting, circulating supply, and the public mainnet transaction trail.",
  alternates: { canonical: "/supply" },
};

const LEXORA = "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const DISTRIBUTION = "GBCPYP3TS6OAV37SXGKKY3YBY3QXMNWN2WZSDJ3RG2KZQAN5JWZDCY6Q";
const ISSUER = "GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP";
const ASSET_URL =
  "https://stellar.expert/explorer/public/asset/XRP262-GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP-2";

const TRANSACTIONS = [
  ["01", "GENESIS MINT", "900,000,000,000 XRP262", "900B issued to distribution.", "7afe1d6f7be92cb0b7859b71c71e3eae4ad68fa523362c915217a425782be67f"],
  ["02", "REGISTRY ENABLE", "ACTIVE", "XRP262 became allowed in the LEXORA registry.", "c26e354ac5fe32565aeacd42cfe0dfcdad5e40bbb8f58c47a67ef08520859a90"],
  ["03", "LEXORA TRANSFER", "426,026,808 XRP262", "The genesis allocation moved to the controller.", "2f89fbfd0ced1d7392950a1a6bcbfb2f22ea61b0c9d77898447598b3e511cbc5"],
  ["04", "BURN", "426,026,808 XRP262", "The transferred amount was burned.", "4ed32c2fe4b14466c8ce92db3f94e695071e26db4ef49f7f8979b043cd65f434"],
];

const stats = [
  ["MAX SUPPLY", "900,000,000,000", "XRP262", "The configured protocol ceiling."],
  ["GENESIS MINTED", "900,000,000,000", "XRP262", "The completed initial issuance."],
  ["TOTAL BURNED", "426,026,808", "XRP262", "Recorded reduction after genesis."],
  ["CIRCULATING", "899,573,973,192", "XRP262", "Minted minus burned."],
];

function Label({ children }: { children: React.ReactNode }) {
  return <div className="font-mono text-[10px] font-semibold tracking-[0.2em] text-blue-400">{children}</div>;
}

function TxLink({ hash }: { hash: string }) {
  return (
    <a
      href={`https://stellar.expert/explorer/public/tx/${hash}`}
      target="_blank"
      rel="noreferrer"
      className="font-mono text-[9px] tracking-widest text-blue-400 transition hover:text-blue-300"
    >
      INSPECT ↗
    </a>
  );
}

export default function SupplyPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      

      <section className="relative border-b border-slate-900">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[760px] opacity-60" />
        <div className="pointer-events-none absolute left-[-15rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.06] blur-3xl" />
        <div className="relative mx-auto grid max-w-[1280px] gap-12 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.045] px-3 py-1.5 font-mono text-[9px] tracking-[0.18em] text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 pulse" />
              STELLAR MAINNET / SUPPLY
            </div>
            <div className="mt-7"><Label>01 / SUPPLY ARCHITECTURE</Label></div>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-[72px] lg:leading-[0.95]">
              Know exactly
              <span className="block text-blue-400">where the supply went.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              XRP262’s supply story is deliberately simple: a defined ceiling,
              a completed genesis issuance, one recorded burn, and a resulting circulating balance.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              No percentage charts are needed to understand the core invariant. The important numbers reconcile directly.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#proof" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(37,99,235,.18)] transition hover:bg-blue-500">
                See the proof
              </a>
              <a href={ASSET_URL} target="_blank" rel="noreferrer" className="rounded-md border border-slate-700 bg-slate-950/50 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">
                Inspect asset ↗
              </a>
            </div>
          </div>

          <div className="card blue-line rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-5">
              <div>
                <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">CURRENT SUPPLY</div>
                <div className="mt-2 text-sm text-slate-400">Derived from verified genesis state</div>
              </div>
              <span className="font-mono text-[9px] text-blue-400">MAINNET</span>
            </div>
            <div className="mt-8 font-mono text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
              899,573,973,192
            </div>
            <div className="mt-2 font-mono text-[10px] tracking-widest text-slate-600">XRP262 CIRCULATING</div>
            <div className="mt-8 space-y-3 border-t border-slate-800 pt-6 font-mono text-[10px]">
              <div className="flex justify-between gap-4"><span className="text-slate-600">GENESIS</span><span className="text-slate-300">900,000,000,000</span></div>
              <div className="flex justify-between gap-4"><span className="text-slate-600">BURNED</span><span className="text-slate-300">−426,026,808</span></div>
              <div className="flex justify-between gap-4 border-t border-slate-800 pt-3"><span className="text-blue-400">RESULT</span><span className="text-blue-300">899,573,973,192</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <Label>02 / STATE AT A GLANCE</Label>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([label, value, unit, note], index) => (
              <div key={label} className={`card rounded-xl p-6 ${index === 3 ? "border-blue-500/30 bg-blue-500/[0.035]" : ""}`}>
                <div className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</div>
                <div className="mt-5 break-words font-mono text-2xl tracking-tight text-white">{value}</div>
                <div className="mt-1 font-mono text-[9px] text-slate-600">{unit}</div>
                <p className="mt-5 border-t border-slate-800 pt-4 text-xs leading-5 text-slate-600">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-[1280px] scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <Label>03 / THE INVARIANT</Label>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              One equation.
              <span className="block text-slate-500">No ambiguity.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              The circulating figure is not a marketing estimate. It is the arithmetic result of the completed genesis mint and recorded burn.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.035] p-7 sm:p-10">
            <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400">SUPPLY INVARIANT</div>
            <div className="mt-7 overflow-x-auto font-mono text-xl leading-9 tracking-tight text-white sm:text-2xl">
              900,000,000,000
              <span className="px-3 text-slate-600">−</span>
              426,026,808
              <span className="px-3 text-slate-600">=</span>
              <span className="text-blue-300">899,573,973,192</span>
            </div>
            <div className="mt-2 font-mono text-[10px] tracking-widest text-slate-600">XRP262</div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["MINTED", "900B"],
                ["BURNED", "426.026808M"],
                ["RESULT", "899.573973192B"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-slate-800 bg-slate-950/45 p-4">
                  <div className="font-mono text-[8px] tracking-widest text-slate-700">{label}</div>
                  <div className="mt-2 font-mono text-sm text-slate-300">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <Label>04 / GENESIS TRAIL</Label>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Follow every material step.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Four completed mainnet transactions document the genesis path. Each hash is public and inspectable.
              </p>
              <div className="mt-7 rounded-xl border border-slate-800 bg-slate-950/40 p-5">
                <div className="font-mono text-[8px] tracking-[0.16em] text-slate-700">ACCOUNTING MODEL</div>
                <div className="mt-3 font-mono text-xs leading-6 text-slate-400">
                  issuance → activation → transfer → burn
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {TRANSACTIONS.map(([step, label, amount, description, hash]) => (
                <div key={hash} className="card rounded-xl p-5 transition hover:border-blue-500/30">
                  <div className="grid gap-4 md:grid-cols-[44px_190px_1fr_auto] md:items-start">
                    <span className="font-mono text-[10px] text-blue-400">{step}</span>
                    <div>
                      <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
                      <div className="mt-2 text-xs font-medium text-slate-200">{amount}</div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs leading-6 text-slate-500">{description}</p>
                      <div className="mt-3 truncate font-mono text-[9px] text-slate-700">{hash}</div>
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
        <Label>05 / CONTROLLED FLOW</Label>
        <div className="mt-5 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            The supply story has an observable path.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            The dedicated distribution account and LEXORA controller are public identifiers. They make the genesis flow easier to trace without exposing any private operational data.
          </p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {[
            ["01", "DISTRIBUTION", "900B XRP262", "Initial genesis destination."],
            ["02", "LEXORA", "426,026,808 XRP262", "Genesis allocation transferred to the controller."],
            ["03", "BURN", "426,026,808 XRP262", "The transferred amount was burned."],
          ].map(([step, title, value, body]) => (
            <div key={step} className="card rounded-xl p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-blue-400">{step}</span>
                <span className="h-px w-16 bg-blue-500/30" />
              </div>
              <div className="mt-8 font-mono text-[9px] tracking-[0.18em] text-slate-600">{title}</div>
              <div className="mt-4 font-mono text-xl text-white">{value}</div>
              <p className="mt-3 text-xs leading-6 text-slate-500">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Label>06 / PUBLIC IDENTIFIERS</Label>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Follow the accounts yourself.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                These are public mainnet identifiers used by the verified genesis flow.
              </p>
            </div>
            <div className="space-y-3">
              {[
                ["ISSUER", ISSUER],
                ["LEXORA CONTROLLER", LEXORA],
                ["DISTRIBUTION", DISTRIBUTION],
              ].map(([label, address]) => (
                <div key={label} className="rounded-xl border border-slate-800 bg-[#0b101b] p-5">
                  <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
                  <div className="mt-3 break-all font-mono text-[10px] leading-6 text-slate-500">{address}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <div className="card blue-line rounded-2xl p-7 sm:p-10">
            <Label>07 / VERIFY, THEN DECIDE</Label>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  The interface explains. The ledger confirms.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Inspect the XRP262 asset, review the transaction trail, or move to the full verification surface before relying on any protocol statement.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={ASSET_URL} target="_blank" rel="noreferrer" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500">
                  Inspect asset ↗
                </a>
                <a href="/verify" className="rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white">
                  Verify state
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="XRP262" className="h-9 w-9 object-contain" />
            <div>
              <div className="font-mono text-xs tracking-[0.14em]">XRP262</div>
              <div className="mt-1 text-[10px] text-slate-600">Transparent supply architecture.</div>
            </div>
          </a>
          <div className="flex flex-wrap gap-5 font-mono text-[10px] text-slate-600">
            <a href="/protocol" className="transition hover:text-blue-300">Protocol</a>
            <a href="/supply" className="text-blue-300">Supply</a>
            <a href="/lexora" className="transition hover:text-blue-300">LEXORA</a>
            <a href="/verify" className="transition hover:text-blue-300">Verify</a>
            <a href="/docs.pdf" className="transition hover:text-blue-300">Docs</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
