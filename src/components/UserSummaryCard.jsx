export default function UserSummaryCard({ data }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-3">
      <div>
        <h2 className="text-sm text-gray-500">Name</h2>
        <p className="font-semibold text-lg">{data.name}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Info label="PAN" value={data.pan} />
        <Info label="Risk Profile" value={data.riskProfile} />
        <Info
          label="Portfolio Value"
          value={`₹ ${data.portfolioValue.toLocaleString()}`}
        />
        <Info
          label="Invested"
          value={`₹ ${data.totalInvested.toLocaleString()}`}
        />
        <Info
          label="Return"
          value={`₹ ${data.overallReturn.toLocaleString()} (${
            data.returnPercent
          }%)`}
        />
        <Info label="XIRR" value={`${data.xirr}%`} />
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  );
}
