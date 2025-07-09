export default function Header({ onDownload }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b shadow-sm sticky top-0 z-10">
      <h1 className="text-xl font-bold text-gray-800">📊 My Portfolio</h1>
      <button
        onClick={onDownload}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded"
      >
        Download PDF
      </button>
    </header>
  );
}
