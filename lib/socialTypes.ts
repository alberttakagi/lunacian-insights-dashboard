export interface BaseSocialVideo {
  id: string;
  title: string;
  url: string;
  creatorName: string;
  publishedAt: string;
  viewCount: number;
}

export interface PlatformStats {
  totalVideos: number;
  totalViews: number;
  uniqueCreators: number;
}

export type SocialPlatform = "youtube" | "x" | "facebook" | "tiktok" | "instagram" | "twitch";