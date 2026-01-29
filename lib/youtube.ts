export async function fetchYouTubeVideos() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  try {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=Axie+Infinity&type=video&key=${API_KEY}&maxResults=5`);
    const data = await res.json();
    return data.items || [];
  } catch (e) {
    return [];
  }
}
