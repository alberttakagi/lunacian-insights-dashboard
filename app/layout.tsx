import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Lunacian Insights Dashboard",
  description: "Axie Infinity social media analytics for Lunacians."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <span class="hljs-tag"><<span class="hljs-name">html lang="en"></span>
      <<span class="hljs-name">body className="min-h-screen bg-slate-950 text-slate-50"></span>
        <<span class="hljs-name">div className="max-w-6xl mx-auto px-4 py-8"></span>{children}</<span class="hljs-name">div></span>
      </<span class="hljs-name">body></span>
    </<span class="hljs-name">html></span></span>
  );
}
