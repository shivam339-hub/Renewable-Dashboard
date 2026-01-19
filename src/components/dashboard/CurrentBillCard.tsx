export default function CurrentBillCard() {
  return (
    <div className="bg-white rounded-[12px] p-[20px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[12px]">
        <h3 className="text-[14px] font-medium text-gray-700">
          Current bill
        </h3>
        <button className="text-[12px] text-[#0B5ED7]">
          edit inputs
        </button>
      </div>

      {/* Content */}
      <div className="space-y-[12px]">
        <div className="flex justify-between">
          <span className="text-[12px] text-gray-500">
            Per unit rate
          </span>
          <span className="text-[14px] font-semibold">
            ₹2.30
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-[12px] text-gray-500">
            Monthly bill
          </span>
          <span className="text-[14px] font-semibold">
            ₹24,54,33,222
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-[12px] text-gray-500">
            Total consumption
          </span>
          <span className="text-[14px] font-semibold">
            30,00,000 units
          </span>
        </div>

        <div className="text-[12px] text-gray-500">
          Non-renewable:{' '}
          <span className="font-medium text-gray-700">
            100%
          </span>
        </div>
      </div>
    </div>
  );
}
