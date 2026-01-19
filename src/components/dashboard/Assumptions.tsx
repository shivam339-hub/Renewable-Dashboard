import { Calendar, Zap, Sun } from "lucide-react";

export default function Assumptions() {
  return (
    <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-sm font-semibold mb-4 text-gray-900">
        Assumptions
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-3 bg-[#F6F7F9] p-4 rounded-lg">
          <Calendar size={18} className="text-blue-600" />
          <span>
            Rate of renewable energy is as per 25 year PPA tenure
          </span>
        </div>

        <div className="flex items-center gap-3 bg-[#F6F7F9] p-4 rounded-lg">
          <Zap size={18} className="text-blue-600" />
          <span>
            No open access power is being sourced already
          </span>
        </div>

        <div className="flex items-center gap-3 bg-[#F6F7F9] p-4 rounded-lg">
          <Sun size={18} className="text-blue-600" />
          <span>
            No pre-existing roof top solar is installed
          </span>
        </div>
      </div>
    </div>
  );
}
