// IMPORTS NEEDED:
// NO IMPORTS - Uses only HTML and Tailwind

export default function NewBillCard() {
  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-4">Bill with renewable energy</h3>
      <div className="space-y-4">
        <div>
          <div className="text-sm text-gray-600">Total consumption</div>
          <div className="text-2xl font-bold">30,00,000 units</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">New monthly bill</div>
          <div className="text-xl font-bold">₹1.2cr/year</div>
          <div className="text-2xl font-bold">₹22,34,33,334</div>
          <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-1">
            9.5%
          </span>
        </div>
        <div>
          <div className="text-sm text-gray-600">New per unit rate</div>
          <div className="text-2xl font-bold">₹1.86</div>
          <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-1">
            10.6% Potential savings
          </span>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Renewable: 30%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded"></div>
              <span>Non-renewable: 70%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}