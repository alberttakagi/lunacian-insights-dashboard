export default function SlackCopyBox() {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h2 className="text-xl font-semibold mb-4 text-emerald-400">Slack Report</h2>
      <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition">
        Copy to Slack
      </button>
    </div>
  );
}
