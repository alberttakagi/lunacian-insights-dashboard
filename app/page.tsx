import WeeklyPulse from '@/components/WeeklyPulse';
import VideoChart from '@/components/VideoChart';
import VideoTable from '@/components/VideoTable';
import SlackCopyBox from '@/components/SlackCopyBox';

export default function Home() {
  return (
    <main>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-emerald-400">Lunacian Insights Dashboard</h1>
        <p className="text-slate-400">Axie Infinity Activity on YouTube</p>
      </header>
      
      <div className="space-y-8">
        <WeeklyPulse />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VideoChart />
          <SlackCopyBox />
        </div>
        <VideoTable />
      </div>
    </main>
  );
}
