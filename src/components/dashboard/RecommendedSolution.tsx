import Image from 'next/image';

export default function RecommendedSolution() {
  return (
    <div className="bg-white rounded-[12px] p-[24px] mt-[32px]">
      
      {/* Recommended badge */}
      <span className="inline-block bg-[#E7F1FF] text-[#0B5ED7] text-[12px] px-[8px] py-[4px] rounded-full mb-[12px]">
        RECOMMENDED
      </span>

      {/* Title */}
      <h2 className="text-[18px] font-semibold mb-[16px]">
        Opex Onsite – Net metering
      </h2>

      {/* Main layout */}
      <div className="grid md:grid-cols-[240px_1fr] gap-[24px]">
        
        {/* Image */}
        <div className="rounded-[8px] overflow-hidden">
          <Image
            src="/images/solar.png"
            alt="Solar panel"
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="space-y-[16px]">
          
          {/* Description */}
          <p className="text-[13px] text-gray-600">
            The power generated off-site is used for the consumer’s consumption.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
            {[
              ['Upfront investment', '₹5,00,000'],
              ['Project size', '1.1MW'],
              ['Units procured', '9,00,000'],
              ['Payback period', '5 years'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-[11px] text-gray-500">
                  {label}
                </div>
                <div className="text-[14px] font-semibold">
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Highlight card */}
          <div className="bg-[#F4F8FF] rounded-[8px] p-[16px]">
            <div className="flex items-center gap-[8px] mb-[4px]">
              <div className="text-[20px] font-bold text-[#0B5ED7]">
                ₹0.78
              </div>
              <span className="bg-green-100 text-green-700 text-[10px] px-[6px] py-[2px] rounded">
                50%
              </span>
            </div>

            <div className="text-[12px] text-gray-600">
              Rate per unit of renewable energy
            </div>

            <p className="text-[11px] text-gray-500 mt-[6px]">
              This is the per unit cost that the customer bears for every unit procured through renewables.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
