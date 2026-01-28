import { BaseSocialVideo } from "./socialTypes";

export interface YouTubeVideo extends BaseSocialVideo {
  platform: "youtube";
}

const KEYWORDS = [
  "Axie Infinity",
  "Axie",
  "AXS",
  "$AXS",
  "SLP",
  "$SLP",
  "Atia",
  "Atia's Legacy",
  "Axie Classic",
  "Axie Origins",
  "Axie Homeland",
  "bAXS",
  "$bAXS",
  "#Axie",
  "#AxieInfinity"
];

const YT_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const YT_VIDEOS_URL = "https://www.googleapis.com/youtube/v3/videos";

export async function fetchYouTubeVideos(<span class="hljs-attr">apiKey: string</span>): Promise<YouTubeVideo[]> {
  const now = new Date();
  const publishedAfter = new Date(now);
  publishedAfter.setDate(now.getDate() - 30); // last 30 days

  const allResults: YouTubeVideo[] = [];

  for (const keyword of KEYWORDS) {
    const params = new URLSearchParams({
      key: apiKey,
      part: "snippet",
      q: keyword,
      type: "video",
      maxResults: "25",
      publishedAfter: publishedAfter.toISOString()
    });

    const res = await fetch(`<span class="hljs-subst">${YT_SEARCH_URL}?${params.toString()}`</span>);
    if (!res.ok) continue;
    const data = await res.json();

    const videoIds: string[] = (data.items || [])
      .map((<span class="hljs-params"><span class="hljs-attr">item: any</span>) =></span> item.id?.videoId)
      .filter(Boolean);

    if (!videoIds.length) continue;

    const videoParams = new URLSearchParams({
      key: apiKey,
      part: "snippet,statistics",
      id: videoIds.join(",")
    });

    const videosRes = await fetch(`<span class="hljs-subst">${YT_VIDEOS_URL}?${videoParams.toString()}`</span>);
    if (!videosRes.ok) continue;

    const videosData = await videosRes.json();

    for (const item of videosData.items || []) {
      const videoId = item.id;
      const snippet = item.snippet;
      const stats = item.statistics;

      if (!videoId || !snippet) continue;

      const viewCount = Number(stats?.viewCount ?? 0);

      const video: YouTubeVideo = {
        platform: "youtube",
        id: videoId,
        title: snippet.title,
        url: `https://www.youtube.com/watch?v=<span class="hljs-subst">${videoId}`</span>,
        creatorName: snippet.channelTitle,
        publishedAt: snippet.publishedAt,
        viewCount
      };

      allResults.push(video);
    }
  }

  const uniqueMap = new Map<string, YouTubeVideo>();
  for (const v of allResults) {
    if (!uniqueMap.has(v.id)) {
      uniqueMap.set(v.id, v);
    }
  }
  return Array.from(uniqueMap.values());
}