"use client";

import { AnalyticsResult } from "@/lib/analytics";
import { buildSlackSummary } from "@/lib/slack";
import { useState } from "react";

interface Props {
  analytics: AnalyticsResult | null;
}

export default function SlackCopyBox({ analytics }: <span class="hljs-title class_">Props</span>) {
  const [copied, setCopied] = useState(false);

  const text = analytics ? buildSlackSummary(analytics) : "";

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <span class="hljs-tag"><<span class="hljs-name">div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/70 p-4"></span>
      <<span class="hljs-name">div className="flex items-center justify-between mb-2"></span>
        <<span class="hljs-name">div className="text-sm font-semibold text-slate-200"></span>Copy for Slack</<span class="hljs-name">div></span>
        <<span class="hljs-name">button
          onClick={handleCopy}
          className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-slate-900 hover:bg-emerald-400 disabled:opacity-50"
          disabled={!text}
        ></span>
          {copied ? "Copied!" : "Copy"}
        </<span class="hljs-name">button></span>
      </<span class="hljs-name">div></span>
      {analytics ? (
        <<span class="hljs-name">pre className="whitespace-pre-wrap text-xs text-slate-200 bg-slate-950/70 rounded-md p-3 border border-slate-800 overflow-x-auto"></span>
          {text}
        </<span class="hljs-name">pre></span>
      ) : (
        <<span class="hljs-name">p className="text-xs text-slate-500"></span>
          Once the dashboard has at least one week of data, a ready-to-paste Slack summary appears
          here.
        </<span class="hljs-name">p></span>
      )}
    </<span class="hljs-name">div></span></span>
  );
}