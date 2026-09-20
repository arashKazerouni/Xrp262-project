import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supply Architecture",
  description:
    "XRP262 genesis issuance, verified burn event, circulating supply, supply policy, and on-chain transaction record.",
  alternates: { canonical: "/supply" },
};

const TRANSACTIONS = [
  {
    step: "01",
    label: "GENESIS MINT",
    amount: "900,000,000,000 XRP262",
    hash: "7afe1d6f7be92cb0b7859b71c71e3eae4ad68fa523362c915217a425782be67f",
    description: "900B XRP262 were minted to the dedicated distribution account.",
  },
  {
    step: "02",
    label: "REGISTRY ENABLE",
    amount: "ACTIVE",
    hash: "c26e354ac5fe32565aeacd42cfe0dfcdad5e40bbb8f58c47a67ef08520859a90",
    description: "The XRP262 registry entry was enabled and the token became allowed.",
  },
  {
    step: "03",
    label: "LEXORA TRANSFER",
    amount: "426,026,808 XRP262",
    hash: "2f89fbfd0ced1d7392950a1a6bcbfb2f22ea61b0c9d77898447598b3e511cbc5",
    description: "426,026,808 XRP262 were transferred from distribution to LEXORA.",
  },
  {
    step: "04",
    label: "BURN",
    amount: "426,026,808 XRP262",
    hash: "4ed32c2fe4b14466c8ce92db3f94e695071e26db4ef49f7f8979b043cd65f434",
    description: "The transferred XRP262 were burned through the LEXORA-controlled flow.",
  },
];

const LEXORA =
  "CAJL2JO6EILWBTHDRMIQVJA6MTZIUWHOD6WNVJDN7FWTYD6H3NFXH542";
const DISTRIBUTION =
  "GBCPYP3TS6OAV37SXGKKY3YBY3QXMNWN2WZSDJ3RG2KZQAN5JWZDCY6Q";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] font-semibold tracking-[0.2em] text-blue-400">
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
      className="font-mono text-[10px] text-blue-400 transition hover:text-blue-300"
    >
      VIEW TRANSACTION ↗
    </a>
  );
}

export default function SupplyPage() {
  return (
    <main className="min-h-screen">
      <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="XRP262 home">
            <img src="/logo.png" alt="XRP262" className="h-9 w-9 object-contain" />
            <span className="text-sm font-semibold tracking-[0.14em]">XRP262</span>
          </a>
          <nav className="hidden items-center gap-7 text-xs text-slate-400 md:flex">
            <a href="/protocol" className="transition hover:text-white">Protocol</a>
            <a href="/supply" className="text-blue-300">Supply</a>
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
        <SectionLabel>01 / SUPPLY ARCHITECTURE</SectionLabel>
        <div className="mt-5 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
              A supply model you can verify.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
              XRP262 records its maximum supply, minted supply, burned supply,
              and resulting circulating supply through explicit protocol state.
            </p>
          </div>
          <div className="card rounded-xl p-6">
            <div className="font-mono text-[9px] tracking-[0.18em] text-slate-600">SUPPLY INVARIANT</div>
            <div className="mt-4 font-mono text-lg text-white">
              899,573,973,192
            </div>
            <div className="mt-2 text-xs text-slate-600">
              900,000,000,000 − 426,026,808 XRP262
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <SectionLabel>02 / CURRENT SUPPLY STATE</SectionLabel>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["MAX SUPPLY", "900,000,000,000", "XRP262"],
              ["MINTED", "900,000,000,000", "XRP262"],
              ["BURNED", "426,026,808", "XRP262"],
              ["CIRCULATING", "899,573,973,192", "XRP262"],
            ].map(([label, value, unit]) => (
              <div key={label} className="card rounded-xl p-6">
                <div className="font-mono text-[9px] tracking-[0.16em] text-slate-600">{label}</div>
                <div className="mt-5 font-mono text-2xl tracking-tight text-white">{value}</div>
                <div className="mt-2 text-[10px] text-slate-600">{unit}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-blue-500/20 bg-blue-500/[0.035] p-5 font-mono text-xs leading-7 text-slate-400">
            <span className="text-blue-400">INVARIANT</span>
            <br />
            Circulating Supply = Minted Supply − Burned Supply
            <br />
            899,573,973,192 = 900,000,000,000 − 426,026,808
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
        <SectionLabel>03 / GENESIS SEQUENCE</SectionLabel>
        <div className="mt-8 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The supply history is explicit.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            The genesis sequence can be followed through public Stellar transactions.
            Each event below is tied to a transaction hash.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {TRANSACTIONS.map((tx) => (
            <div key={tx.hash} className="card rounded-xl p-6">
              <div className="grid gap-5 lg:grid-cols-[56px_220px_1fr_auto] lg:items-start">
                <div className="font-mono text-sm text-blue-400">{tx.step}</div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{tx.label}</div>
                  <div className="mt-2 text-sm text-slate-200">{tx.amount}</div>
                </div>
                <div>
                  <p className="text-sm leading-6 text-slate-500">{tx.description}</p>
                  <div className="mt-3 break-all font-mono text-[10px] leading-5 text-slate-700">{tx.hash}</div>
                </div>
                <ExplorerLink hash={tx.hash} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
          <SectionLabel>04 / CONTROLLED FLOW</SectionLabel>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              ["GENESIS", "900B", "Minted to the dedicated distribution account."],
              ["LEXORA", "426,026,808", "Transferred to the protocol controller."],
              ["BURN", "426,026,808", "Removed through the LEXORA-controlled burn flow."],
            ].map(([title, value, description]) => (
              <div key={title} className="card rounded-xl p-7">
                <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400">{title}</div>
                <div className="mt-5 font-mono text-2xl text-white">{value}</div>
                <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-24 sm:px-6 lg:px-8">
        <SectionLabel>05 / PUBLIC ACCOUNTS</SectionLabel>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {[
            ["LEXORA CONTROLLER", LEXORA],
            ["DISTRIBUTION ACCOUNT", DISTRIBUTION],
          ].map(([label, address]) => (
            <div key={label} className="card rounded-xl p-6">
              <div className="font-mono text-[9px] tracking-[0.16em] text-blue-400">{label}</div>
              <div className="mt-4 break-all font-mono text-[11px] leading-6 text-slate-500">{address}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-900 bg-[#0a0e17]/55">
        <div className="mx-auto max-w-[1280px] px-4 py-20 text-center sm:px-6 lg:px-8">
          <SectionLabel>06 / INDEPENDENT VERIFICATION</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Verify the transactions, not the presentation.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            The protocol records above are public mainnet state. Use the transaction
            links and asset record to independently inspect the ledger.
          </p>
          <a
            href="https://stellar.expert/explorer/public/asset/XRP262-GCGVZEE7RD2BFF2EIQUT37DYJUR7WDCQ2KWA5LUWYATRFLKEYHMJ3XRP-2"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            View XRP262 on StellarExpert ↗
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-900">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="XRP262" className="h-8 w-8 object-contain" />
            <span className="font-mono text-xs tracking-[0.14em]">XRP262</span>
          </a>
          <div className="flex gap-5 font-mono text-[10px] text-slate-600">
            <a href="/protocol" className="transition hover:text-blue-300">Protocol</a>
            <a href="/lexora" className="transition hover:text-blue-300">LEXORA</a>
            <a href="/verify" className="transition hover:text-blue-300">Verify</a>
            <a href="/protocol.pdf" target="_blank" rel="noreferrer" className="transition hover:text-blue-300">PDF</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
