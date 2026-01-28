import { YouTubeVideo } from "./youtube";

let memoryVideos: YouTubeVideo[] = [];

export async function saveYouTubeVideos(<span class="hljs-attr">videos: YouTubeVideo[]</span>): Promise<void> {
  memoryVideos = videos;
}

export async function getYouTubeVideos(): Promise<YouTubeVideo[]> {
  return memoryVideos;
}