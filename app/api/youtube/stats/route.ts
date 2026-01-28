import { NextResponse } from "next/server";
import { getYouTubeVideos } from "@/lib/storage";
import { computeAnalytics } from "@/lib/analytics";

export async function GET() {
  const videos = await getYouTubeVideos();
  const analytics = computeAnalytics(videos);
  return NextResponse.json({
    videos,
    analytics
  });
}