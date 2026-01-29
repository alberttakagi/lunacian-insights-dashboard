export default function VideosTable() {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mt-8">
      <h2 className="text-xl font-semibold mb-4 text-emerald-400">Latest Axie Videos</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-500 border-b border-slate-800">
              <th className="pb-3">Video Title</th>
              <th className="pb-3 text-right">Channel</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr>
              <td className="py-3">Searching for latest Lunacian content...</td>
              <td className="py-3 text-right">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
