"use client";

import { AnalyticsResult } from "@/lib/analytics";

interface Props {
  analytics: AnalyticsResult | null;
}

export default function WeeklyPulse({ analytics }: <span class="hljs-title class_">Props</span>) {
  if (!analytics) {
    return (
      <span class="hljs-tag"><<span class="hljs-name">div className="rounded-lg border border-slate-800 bg-slate-900 p-4 text-sm text-slate-300"></span>
        Lunacians, our sensors are calibrating. Trigger a YouTube scan to awaken the Weekly Pulse.
      </<span class="hljs-name">div></span></span>
    );
  }

  const w = analytics.weeklyStats;
  const viewsChange =
    w.viewChangePercent === null
      ? "no previous era to compare yet"
      : `<span class="hljs-subst">${w.viewChangePercent >= <span class="hljs-number">0 ? "rising" : "cooling"}</span> by ${<span class="hljs-built_in">Math.abs(
          w.viewChangePercent
        ).toFixed(1)}</span>% vs last week`</span>;
  const videosChange =
    w.videoChangePercent === null
      ? "no prior signal recorded"
      : `<span class="hljs-subst">${w.videoChangePercent >= <span class="hljs-number">0 ? "expanding" : "contracting"}</span> by ${<span class="hljs-built_in">Math.abs(
          w.videoChangePercent
        ).toFixed(1)}</span>% vs last week`</span>;

  return (
    <span class="hljs-tag"><<span class="hljs-name">div className="rounded-xl border border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-900/30 p-5 shadow-lg shadow-emerald-500/20"></span>
      <<span class="hljs-name">h2 className="text-lg font-semibold text-emerald-300 mb-2"></span>Weekly Pulse</<span class="hljs-name">h2></span>
      <<span class="hljs-name">p className="text-sm text-slate-200 leading-relaxed"></span>
        <<span class="hljs-name">strong></span>Lunacians</<span class="hljs-name">strong></span>, the Axie broadcast field this week carries{" "}
        <<span class="hljs-name">strong></span>{w.totalVideosThisWeek}</<span class="hljs-name">strong></span> fresh signals from{" "}
        <<span class="hljs-name">strong></span>{w.uniqueCreatorsThisWeek}</<span class="hljs-name">strong></span> creators, pulsing through{" "}
        <<span class="hljs-name">strong></span>{w.totalViewsThisWeek.toLocaleString()}</<span class="hljs-name">strong></span> total views. The content stream is{" "}
        <<span class="hljs-name">strong></span>{viewsChange}</<span class="hljs-name">strong></span>, while creator output is <<span class="hljs-name">strong></span>{videosChange}</<span class="hljs-name">strong></span>,
        marking how the ecosystem is evolving across YouTube&apos;s lunar grid.
      </<span class="hljs-name">p></span>
    </<span class="hljs-name">div></span></span>
  );
}