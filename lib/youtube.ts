export async function fetchYouTubeVideos() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const QUERY = "Axie Infinity";
  
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${QUERY}&type=video&key=${API_KEY}&maxResults=10`
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("YouTube fetch error:", error);
    return [];
  }
}
