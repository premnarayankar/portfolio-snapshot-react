export default function InsightsSection({ holdings }) {
  const top = holdings.reduce((a, b) =>
    a.returnPercent > b.returnPercent ? a : b
  );
  const poor = holdings.reduce((a, b) =>
    a.returnPercent < b.returnPercent ? a : b
  );

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card
        title="Top Fund"
        subtitle={top.scheme}
        value={`${top.returnPercent}%`}
        color="green"
      />
      <Card
        title="Poor Fund"
        subtitle={poor.scheme}
        value={`${poor.returnPercent}%`}
        color="red"
      />
      <Card
        title="Rebalancing"
        subtitle="Equity high"
        value="60%"
        color="yellow"
      />
    </div>
  );
}

function Card({ title, subtitle, value, color }) {
  const colorMap = {
    green: "text-green-600",
    red: "text-red-600",
    yellow: "text-yellow-600",
  };
  return (
    <div
      className="bg-white rounded-xl p-4 shadow border-l-4"
      style={{ borderColor: colorMap[color] }}
    >
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-medium">{subtitle}</p>
      <p className={`font-semibold ${colorMap[color]}`}>{value}</p>
    </div>
  );
}
