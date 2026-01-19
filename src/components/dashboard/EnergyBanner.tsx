import Image from "next/image";

export default function EnergyBanner() {
  return (
    <div className="bg-[#FFEAB6] rounded-xl px-6 py-4 flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Image
          src="/images/energy-icon.png"
          alt="Neufin Energy"
          width={32}
          height={32}
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">
            Neufin Energy
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-700">
        Simplifying renewable energy procurement
      </p>
    </div>
  );
}

