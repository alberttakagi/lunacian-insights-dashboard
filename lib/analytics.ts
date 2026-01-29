export function calculateSentiment(videos: any[]) {
  // Simple mock logic for now to get you live
  return {
    positive: videos.length > 5 ? 75 : 50,
    totalVideos: videos.length
  };
}
