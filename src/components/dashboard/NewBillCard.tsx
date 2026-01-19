export default function NewBillCard() {
  return (
    <div className="bg-white rounded-[12px] p-[20px]">
      {/* Title */}
      <h3 className="text-[14px] font-medium text-gray-700 mb-[12px]">
        Bill with renewable energy
      </h3>

      {/* Content */}
      <div className="space-y-[12px]">
        {/* Per unit rate */}
        <div className="flex justify-between">
          <span className="text-[12px] text-gray-500">
            Per unit rate
          </span>
          <span className="text-[14px] font-semibold">
            ₹1.86
          </span>
        </div>

        {/* Monthly bill with savings badge */}
        <div className="flex justify-between items-center">
          <span className="text-[12px] text-gray-500">
            Monthly bill
          </span>
          <div className="flex items-center gap-[6px]">
            <span className="text-[14px] font-semibold">
              ₹22,34,33,334
            </span>
            <span className="bg-green-100 text-green-700 text-[10px] px-[6px] py-[2px] rounded">
              9.5%
            </span>
          </div>
        </div>

        {/* Total consumption */}
        <div className="flex justify-between">
          <span className="text-[12px] text-gray-500">
            Total consumption
          </span>
          <span className="text-[14px] font-semibold">
            30,00,000 units
          </span>
        </div>

        {/* Renewable vs Non-renewable */}
        <div className="text-[12px] text-gray-500">
          Renewable:{' '}
          <span className="font-medium text-gray-700">
            30%
          </span>
          {' '}•{' '}
          Non-renewable:{' '}
          <span className="font-medium text-gray-700">
            70%
          </span>
        </div>
      </div>
    </div>
  );
}
