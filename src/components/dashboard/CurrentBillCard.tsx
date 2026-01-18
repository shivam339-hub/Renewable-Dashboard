// IMPORTS NEEDED:
// NO IMPORTS - Uses only HTML and Tailwind

export default function CurrentBillCard() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-4">Current bill</h3>
      <div className="space-y-4">
        <div>
          <div className="text-sm text-gray-600">Total consumption</div>
          <div className="text-2xl font-bold">30,00,000 units</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Monthly bill</div>
          <div className="text-2xl font-bold">₹24,54,33,222</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Per unit rate</div>
          <div className="text-2xl font-bold">₹2.30</div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="text-sm text-gray-600">Non-renewable:</div>
          <div className="text-sm font-semibold">100%</div>
        </div>
        <button className="text-blue-600 text-sm hover:underline">edit inputs</button>
      </div>
    </div>
  );
}