export default function HoldingsTable({ data }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow overflow-x-auto">
      <h2 className="text-md font-semibold mb-3">Holdings</h2>
      <table className="w-full min-w-[700px] text-sm">
        <thead className="text-left text-gray-600 bg-gray-100">
          <tr>
            <th className="p-2">Scheme</th>
            <th className="p-2">Type</th>
            <th className="p-2 text-right">Invested</th>
            <th className="p-2 text-right">Current</th>
            <th className="p-2 text-right">Return %</th>
            <th className="p-2 text-center">SIP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((h, i) => (
            <tr
              key={i}
              className="border-b odd:bg-white even:bg-gray-50 hover:bg-yellow-50 transition-colors duration-200"
            >
              <td className="p-2">{h.scheme}</td>
              <td className="p-2">{h.type}</td>
              <td className="p-2 text-right">
                ₹ {h.invested.toLocaleString()}
              </td>
              <td className="p-2 text-right">₹ {h.current.toLocaleString()}</td>
              <td className="p-2 text-right">{h.returnPercent}%</td>
              <td className="p-2 text-center">{h.sip ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
