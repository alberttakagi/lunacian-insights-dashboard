import { YouTubeVideo } from "./youtube";

export interface TimeBucket {
  date: string;
  totalViews: number;
}

export interface WeeklyStats {
  totalVideosThisWeek: number;
  totalViewsThisWeek: number;
  uniqueCreatorsThisWeek: number;
  videoChangePercent: number | null;
  viewChangePercent: number | null;
}

export interface AnalyticsResult {
  daily: TimeBucket[];
  weekly: TimeBucket[];
  monthly: TimeBucket[];
  weeklyStats: WeeklyStats;
}

function startOfWeek(<span class="hljs-attr">date: Date</span>): Date {
  const d = new Date(date);
  const day = d.getUTCDay();
  const diff = d.getUTCDate() - day + (day === 0 ? -6 : 1);
  d.setUTCDate(diff);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

function startOfMonth(<span class="hljs-attr">date: Date</span>): Date {
  const d = new Date(date);
  d.setUTCDate(1);
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

export function computeAnalytics(<span class="hljs-attr">videos: YouTubeVideo[]</span>): AnalyticsResult {
  const now = new Date();
  const thisWeekStart = startOfWeek(now);
  const lastWeekStart = new Date(thisWeekStart);
  lastWeekStart.setUTCDate(thisWeekStart.getUTCDate() - 7);
  const lastWeekEnd = new Date(thisWeekStart);
  lastWeekEnd.setUTCDate(thisWeekStart.getUTCDate() - 1);

  const dailyMap = new Map<string, number>();
  const weeklyMap = new Map<string, number>();
  const monthlyMap = new Map<string, number>();

  let videosThisWeek = 0;
  let videosLastWeek = 0;
  let viewsThisWeek = 0;
  let viewsLastWeek = 0;
  const creatorsThisWeek = new Set<string>();

  for (const v of videos) {
    const published = new Date(v.publishedAt);
    const dateKey = published.toISOString().slice(0, 10);
    const weekKey = startOfWeek(published).toISOString().slice(0, 10);
    const monthKey = startOfMonth(published).toISOString().slice(0, 7);

    dailyMap.set(dateKey, (dailyMap.get(dateKey) ?? 0) + v.viewCount);
    weeklyMap.set(weekKey, (weeklyMap.get(weekKey) ?? 0) + v.viewCount);
    monthlyMap.set(monthKey, (monthlyMap.get(monthKey) ?? 0) + v.viewCount);

    if (published >= thisWeekStart && published <= now) {
      videosThisWeek += 1;
      viewsThisWeek += v.viewCount;
      creatorsThisWeek.add(v.creatorName);
    } else if (published >= lastWeekStart && published <= lastWeekEnd) {
      videosLastWeek += 1;
      viewsLastWeek += v.viewCount;
    }
  }

  const daily: TimeBucket[] = Array.from(dailyMap.entries())
    .sort((<span class="hljs-params">a, b) =></span> (a[0] < b[0] ? -1 : 1))
    .map((<span class="hljs-params">[date, totalViews]) =></span> ({ date, totalViews }));

  const weekly: TimeBucket[] = Array.from(weeklyMap.entries())
    .sort((<span class="hljs-params">a, b) =></span> (a[0] < b[0] ? -1 : 1))
    .map((<span class="hljs-params">[date, totalViews]) =></span> ({ date, totalViews }));

  const monthly: TimeBucket[] = Array.from(monthlyMap.entries())
    .sort((<span class="hljs-params">a, b) =></span> (a[0] < b[0] ? -1 : 1))
    .map((<span class="hljs-params">[date, totalViews]) =></span> ({ date, totalViews }));

  const videoChangePercent =
    videosLastWeek === 0 ? null : ((videosThisWeek - videosLastWeek) / videosLastWeek) * 100;
  const viewChangePercent =
    viewsLastWeek === 0 ? null : ((viewsThisWeek - viewsLastWeek) / viewsLastWeek) * 100;

  return {
    daily,
    weekly,
    monthly,
    weeklyStats: {
      totalVideosThisWeek: videosThisWeek,
      totalViewsThisWeek: viewsThisWeek,
      uniqueCreatorsThisWeek: creatorsThisWeek.size,
      videoChangePercent,
      viewChangePercent
    }
  };
}