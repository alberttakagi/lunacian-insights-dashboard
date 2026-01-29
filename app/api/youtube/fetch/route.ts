import { NextResponse } from 'next/server';
import { fetchYouTubeVideos } from '@/lib/youtube';

export async function GET() {
  try {
    const videos = await fetchYouTubeVideos();
    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}
