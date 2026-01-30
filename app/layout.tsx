import "./main.css";

export const metadata = {
  title: "Lunacian Insights Dashboard",
  description: "YouTube analytics for the Axie ecosystem.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">{children}</body>
    </html>
  );
}
