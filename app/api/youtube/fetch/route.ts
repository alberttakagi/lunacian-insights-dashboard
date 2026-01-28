import { NextResponse } from "next/server";
import { fetchYouTubeVideos } from "@/lib/youtube";
import { saveYouTubeVideos } from "@/lib/storage";

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing YOUTUBE_API_KEY environment variable." },
      { status: 500 }
    );
  }

  try {
    const videos = await fetchYouTubeVideos(apiKey);
    await saveYouTubeVideos(videos);
    return NextResponse.json({ success: true, count: videos.length });
  } catch (_err) {
    return NextResponse.json({ error: "Failed to fetch YouTube data." }, { status: 500 });
  }
}