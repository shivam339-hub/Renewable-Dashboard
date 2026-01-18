// IMPORTS NEEDED:
// NO IMPORTS - Uses only HTML and Tailwind

export default function EmailSubscription() {
  return (
    <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-2">Share the recommended solution</h2>
      <p className="text-gray-600 mb-4">The Neufin team will be in touch with you.</p>
      <div className="flex gap-2 max-w-md">
        <input
          type="email"
          placeholder="Enter email ID"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  );
}