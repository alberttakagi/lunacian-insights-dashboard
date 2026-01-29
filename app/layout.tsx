import "./globals.css";

export const metadata = {
  title: "Lunacian Insights Dashboard",
  description: "Axie Infinity social media analytics for Lunacians.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
