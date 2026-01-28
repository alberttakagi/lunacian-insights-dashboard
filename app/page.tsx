"use client";

import { useEffect, useState } from "react";
import WeeklyPulse from "@/components/WeeklyPulse";
import VideosTable from "@/components/VideosTable";
import ViewsChart from "@/components/ViewsChart";
import SlackCopyBox from "@/components/SlackCopyBox";
import { YouTubeVideo } from "@/lib/youtube";
import { AnalyticsResult } from "@/lib/analytics";

interface StatsResponse {
  videos: YouTubeVideo[];
  analytics: AnalyticsResult;
}

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [statsLoading, setStatsLoading] = useState(false);
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadStats = async () => {
    setStatsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/youtube/stats");
      if (!res.ok) {
        throw new Error("Failed to load stats");
      }
      const data: StatsResponse = await res.json();
      setVideos(data.videos);
      setAnalytics(data.analytics);
    } catch (err: any) {
      setError(err.message || "Failed to load stats");
    } finally {
      setStatsLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/youtube/fetch");
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch YouTube data");
      }
      await loadStats();
    } catch (err: any) {
      setError(err.message || "Failed to fetch YouTube data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <span class="hljs-tag"><<span class="hljs-name">main></span>
      <<span class="hljs-name">header className="mb-6"></span>
        <<span class="hljs-name">h1 className="text-2xl font-bold text-emerald-300"></span>Lunacian Insights Dashboard</<span class="hljs-name">h1></span>
        <<span class="hljs-name">p className="mt-1 text-sm text-slate-400 max-w-2xl"></span>
          Track how Axie stories ripple across YouTube. Scan for fresh content, watch view trends,
          and share weekly pulses with your team in Slack.
        </<span class="hljs-name">p></span>
      </<span class="hljs-name">header></span>

      <<span class="hljs-name">div className="flex flex-wrap items-center gap-3 mb-4"></span>
        <<span class="hljs-name">button
          onClick={handleFetch}
          disabled={loading}
          className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-400 disabled:opacity-60"
        ></span>
          {loading ? "Scanning YouTube..." : "Run YouTube Scan"}
        </<span class="hljs-name">button></span>
        <<span class="hljs-name">button
          onClick={loadStats}
          disabled={statsLoading}
          className="rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800 disabled:opacity-60"
        ></span>
          {statsLoading ? "Refreshing..." : "Refresh Data"}
        </<span class="hljs-name">button></span>
        {error && <<span class="hljs-name">span className="text-xs text-red-400"></span>{error}</<span class="hljs-name">span></span>}
      </<span class="hljs-name">div></span>

      <<span class="hljs-name">WeeklyPulse analytics={analytics} /></span>
      <<span class="hljs-name">ViewsChart data={analytics?.daily ?? []} /></span>
      <<span class="hljs-name">VideosTable videos={videos} /></span>
      <<span class="hljs-name">SlackCopyBox analytics={analytics} /></span>
    </<span class="hljs-name">main></span></span>
  );
}