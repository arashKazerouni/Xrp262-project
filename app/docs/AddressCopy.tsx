"use client";

import { useState } from "react";

export default function AddressCopy({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <button
      type="button"
      title="Copy address"
      onClick={copy}
      className="break-all text-left font-mono text-[11px] leading-6 text-slate-400 transition hover:text-blue-300"
    >
      {copied ? "COPIED — " : ""}{value}
    </button>
  );
}
