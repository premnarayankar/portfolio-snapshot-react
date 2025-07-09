import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserSummaryCard from "./components/UserSummaryCard";
import HoldingsTable from "./components/HoldingsTable";
import InsightsSection from "./components/InsightsSection";
import AssetAllocationChart from "./components/AssetAllocationChart";
import { allocation, holdings, summary } from "./data/portfolio";

export default function App() {
  return (
    <div className="min-h-screen max-w-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <UserSummaryCard data={summary} />
        <AssetAllocationChart data={allocation} />
        <HoldingsTable data={holdings} />
        <InsightsSection holdings={holdings} />
      </main>
      <Footer />
    </div>
  );
}
