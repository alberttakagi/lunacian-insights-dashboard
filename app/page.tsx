import WeeklyPulse from '@/components/WeeklyPulse';
import VideoChart from '@/components/ViewsChart';   // FIXED: Added 's' to match your file
import VideoTable from '@/components/VideosTable'; // FIXED: Added 's' to match your file
import SlackCopyBox from '@/components/SlackCopyBox';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-slate-950">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-emerald-400">Lunacian Insights</h1>
        <WeeklyPulse />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ViewsChart />
          <SlackCopyBox />
        </div>
        <VideosTable />
      </div>
    </main>
  );
}
