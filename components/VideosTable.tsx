"use client";

import { YouTubeVideo } from "@/lib/youtube";

interface Props {
  videos: YouTubeVideo[];
}

export default function VideosTable({ videos }: <span class="hljs-title class_">Props</span>) {
  return (
    <span class="hljs-tag"><<span class="hljs-name">div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/70"></span>
      <<span class="hljs-name">div className="px-4 py-3 text-sm font-semibold text-slate-200"></span>
        Recent Axie-Focused Videos
      </<span class="hljs-name">div></span>
      <<span class="hljs-name">div className="overflow-x-auto"></span>
        <<span class="hljs-name">table className="min-w-full text-sm text-left"></span>
          <<span class="hljs-name">thead className="bg-slate-900/90 text-slate-400 border-t border-slate-800"></span>
            <<span class="hljs-name">tr></span>
              <<span class="hljs-name">th className="px-4 py-2"></span>Account</<span class="hljs-name">th></span>
              <<span class="hljs-name">th className="px-4 py-2"></span>Video</<span class="hljs-name">th></span>
              <<span class="hljs-name">th className="px-4 py-2 text-right"></span>Views</<span class="hljs-name">th></span>
            </<span class="hljs-name">tr></span>
          </<span class="hljs-name">thead></span>
          <<span class="hljs-name">tbody></span>
            {videos.length === 0 ? (
              <<span class="hljs-name">tr></span>
                <<span class="hljs-name">td
                  colSpan={3}
                  className="px-4 py-4 text-center text-slate-500 border-t border-slate-800"
                ></span>
                  No videos yet. Run a YouTube scan to populate the dashboard.
                </<span class="hljs-name">td></span>
              </<span class="hljs-name">tr></span>
            ) : (
              videos.map((v) => (
                <<span class="hljs-name">tr key={v.id} className="border-t border-slate-800 hover:bg-slate-800/60"></span>
                  <<span class="hljs-name">td className="px-4 py-2 text-slate-200"></span>{v.creatorName}</<span class="hljs-name">td></span>
                  <<span class="hljs-name">td className="px-4 py-2"></span>
                    <<span class="hljs-name">a
                      href={v.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-300 hover:text-emerald-200 underline decoration-emerald-500/60"
                    ></span>
                      {v.title}
                    </<span class="hljs-name">a></span>
                  </<span class="hljs-name">td></span>
                  <<span class="hljs-name">td className="px-4 py-2 text-right text-slate-100"></span>
                    {v.viewCount.toLocaleString()}
                  </<span class="hljs-name">td></span>
                </<span class="hljs-name">tr></span>
              ))
            )}
          </<span class="hljs-name">tbody></span>
        </<span class="hljs-name">table></span>
      </<span class="hljs-name">div></span>
    </<span class="hljs-name">div></span></span>
  );
}