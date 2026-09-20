"use client";

import { useState } from "react";

export default function VerifyCopy({ value, href }: { value: string; href: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <div className="flex min-w-0 items-center gap-3">
      <a href={href} target="_blank" rel="noreferrer" title={value} className="min-w-0 flex-1 truncate font-mono text-[10px] text-slate-400 transition hover:text-blue-300">
        {value}
      </a>
      <button type="button" onClick={copy} className="shrink-0 font-mono text-[9px] tracking-widest text-slate-600 transition hover:text-blue-400">
        {copied ? "COPIED" : "COPY"}
      </button>
    </div>
  );
}
