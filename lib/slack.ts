import { AnalyticsResult } from "./analytics";

export function buildSlackSummary(<span class="hljs-attr">analytics: AnalyticsResult</span>): string {
  const w = analytics.weeklyStats;
  const viewsChange =
    w.viewChangePercent === null
      ? "No prior week to compare."
      : `<span class="hljs-subst">${w.viewChangePercent >= <span class="hljs-number">0 ? "up" : "down"}</span> ${<span class="hljs-built_in">Math.abs(w.viewChangePercent).toFixed(
          1
        )}</span>% vs last week`</span>;
  const videosChange =
    w.videoChangePercent === null
      ? "No prior week to compare."
      : `<span class="hljs-subst">${w.videoChangePercent >= <span class="hljs-number">0 ? "up" : "down"}</span> ${<span class="hljs-built_in">Math.abs(w.videoChangePercent).toFixed(
          1
        )}</span>% vs last week`</span>;

  return [
    `*Lunacian Weekly Pulse – YouTube*`,
    `Total videos: *<span class="hljs-subst">${w.totalVideosThisWeek}* (${videosChange})`</span>,
    `Total views: *<span class="hljs-subst">${w.totalViewsThisWeek.toLocaleString()}* (${viewsChange})`</span>,
    `Unique creators: *<span class="hljs-subst">${w.uniqueCreatorsThisWeek}*`</span>,
    "",
    `#Axie #AxieInfinity`
  ].join("\n");
}