import { useState } from "react";

export default function Header() {
  const [selectedDate, setSelectedDate] = useState("2025-07-09");

  const handleDownload = () => {
    alert("Download PDF clicked (non-functional)");
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const dates = ["2025-07-09", "2025-07-08", "2025-07-07", "2025-07-06"];

  return (
    <header className="flex flex-wrap justify-between items-center gap-3 p-4 bg-white border-b shadow-sm sticky top-0 z-10">
      <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>

      <div className="flex items-center gap-3">
        <select
          value={selectedDate}
          onChange={handleDateChange}
          className="border rounded px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {dates.map((date) => (
            <option key={date} value={date}>
              As on {new Date(date).toLocaleDateString("en-IN")}
            </option>
          ))}
        </select>

        <button
          onClick={handleDownload}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded"
        >
          Download PDF
        </button>
      </div>
    </header>
  );
}
