"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import { TimeBucket } from "@/lib/analytics";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

interface Props {
  data: TimeBucket[];
  title?: string;
}

export default function ViewsChart({ data, title = <span class="hljs-string">"Total Views Over Time" }: Props</span>) {
  const labels = data.map((<span class="hljs-params">d) =></span> d.date);
  const values = data.map((<span class="hljs-params">d) =></span> d.totalViews);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Views",
        data: values,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        tension: 0.35,
        fill: true,
        pointRadius: 2
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (<span class="hljs-params"><span class="hljs-attr">ctx: any</span>) =></span> `<span class="hljs-subst">${ctx.parsed.y.toLocaleString()} views`</span>
        }
      }
    },
    scales: {
      x: {
        ticks: { color: "#94a3b8" },
        grid: { color: "rgba(148, 163, 184, 0.15)" }
      },
      y: {
        ticks: { color: "#94a3b8" },
        grid: { color: "rgba(148, 163, 184, 0.15)" }
      }
    }
  } as const;

  return (
    <span class="hljs-tag"><<span class="hljs-name">div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/70 p-4"></span>
      <<span class="hljs-name">div className="mb-3 text-sm font-semibold text-slate-200"></span>{title}</<span class="hljs-name">div></span>
      {data.length === 0 ? (
        <<span class="hljs-name">div className="text-sm text-slate-500"></span>
          No view data yet. Once YouTube data is fetched, you&apos;ll see the trend line here.
        </<span class="hljs-name">div></span>
      ) : (
        <<span class="hljs-name">Line data={chartData} options={options} /></span>
      )}
    </<span class="hljs-name">div></span></span>
  );
}