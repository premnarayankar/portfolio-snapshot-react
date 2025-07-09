import React from "react";
import Header from "./components/Header";
import UserSummaryCard from "./components/UserSummaryCard";
import HoldingsTable from "./components/HoldingsTable";
import InsightsSection from "./components/InsightsSection";
import AssetPieChart from "./components/AssetPieChart";

// 💾 Dummy Portfolio Data
const userSummary = {
  name: "Rohan Sharma",
  pan: "ABCDE1234F",
  riskProfile: "Moderate",
  portfolioValue: 1265000,
  totalInvested: 1040000,
  overallReturn: 225000,
  returnPercent: 21.6,
  xirr: 12.2,
};

const assetAllocation = [
  { name: "Equity", value: 759000 },
  { name: "Debt", value: 379500 },
  { name: "Gold", value: 126500 },
];

const holdings = [
  {
    scheme: "Axis Bluechip Fund",
    type: "Equity",
    invested: 120000,
    current: 148500,
    returnPercent: 23.75,
    sip: true,
  },
  {
    scheme: "SBI Gold Fund",
    type: "Gold",
    invested: 50000,
    current: 57200,
    returnPercent: 14.4,
    sip: false,
  },
  {
    scheme: "HDFC Short Term Debt",
    type: "Debt",
    invested: 200000,
    current: 212000,
    returnPercent: 6.0,
    sip: true,
  },
  {
    scheme: "ICICI Flexi Cap",
    type: "Equity",
    invested: 100000,
    current: 137500,
    returnPercent: 37.5,
    sip: true,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <UserSummaryCard data={userSummary} />
        <AssetPieChart data={assetAllocation} />
        <HoldingsTable data={holdings} />
        <InsightsSection holdings={holdings} />
      </main>
    </div>
  );
}
