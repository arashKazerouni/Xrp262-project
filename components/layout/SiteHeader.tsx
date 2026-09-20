"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const items = [
  ["/protocol", "PROTOCOL"],
  ["/supply", "SUPPLY"],
  ["/lexora", "LEXORA"],
  ["/verify", "VERIFY"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [ledger, setLedger] = useState<number | null>(null);
  const [live, setLive] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let mounted = true;
    const read = async () => {
      try {
        const res = await fetch("/api/network", { cache: "no-store" });
        const data = await res.json();
        if (!mounted) return;
        setLive(Boolean(data.ok));
        setLedger(data.ok ? data.ledger : null);
      } catch {
        if (mounted) setLive(false);
      }
    };
    read();
    const id = window.setInterval(read, 15000);
    return () => { mounted = false; window.clearInterval(id); };
  }, []);

  return (
    <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="XRP262 home">
          <img src="/logo.png" alt="XRP262" className="h-9 w-9 object-contain" />
          <span className="text-sm font-semibold tracking-[0.14em]">XRP262</span>
        </a>

        <nav className="hidden items-center gap-7 font-mono text-[10px] tracking-[0.12em] text-slate-500 md:flex">
          {items.map(([href, label]) => (
            <a key={href} href={href} className={pathname === href ? "text-blue-300" : "transition hover:text-white"}>
              {label}
            </a>
          ))}
          <a href="/docs.pdf" className="transition hover:text-white">DOCS</a>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden rounded-full border border-blue-500/20 bg-blue-500/[0.05] px-3 py-1.5 font-mono text-[9px] tracking-[0.14em] text-blue-300 sm:flex sm:items-center sm:gap-2">
            <span className={`h-1.5 w-1.5 rounded-full bg-blue-400 ${live ? "pulse" : "opacity-40"}`} />
            MAINNET {live ? "LIVE" : "SYNCING"}{ledger ? ` · LEDGER ${ledger.toLocaleString()}` : ""}
          </div>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
            className="rounded-md border border-slate-700 px-3 py-2 font-mono text-[10px] text-slate-400 md:hidden"
          >
            {menu ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>
      {menu && (
        <div className="border-t border-slate-800 bg-[#080b12]/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1">
            {items.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenu(false)} className={`rounded-md px-3 py-3 font-mono text-[10px] tracking-widest ${pathname === href ? "bg-blue-500/[0.08] text-blue-300" : "text-slate-400"}`}>
                {label}
              </a>
            ))}
            <a href="/docs.pdf" onClick={() => setMenu(false)} className="rounded-md px-3 py-3 font-mono text-[10px] tracking-widest text-slate-400">DOCS</a>
            <div className="mt-2 border-t border-slate-800 px-3 pt-4 font-mono text-[9px] tracking-widest text-blue-300">
              MAINNET {live ? "LIVE" : "SYNCING"}{ledger ? ` · LEDGER ${ledger.toLocaleString()}` : ""}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
