// IMPORTS NEEDED:
// NO IMPORTS - Uses only HTML and Tailwind
import Image from 'next/image';

export default function RecommendedSolution() {
  return (
    <div className="bg-white rounded-lg border p-6 mt-8">
      <div className="mb-4">
        <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          RECOMMENDED
        </span>
      </div>
      
      
      <div className="flex">
        <div>
        <Image src="/images/solar.png" alt="Solar panel" 
            width={300}
            height={100} 
            
        />
      </div>
      
      <div className='ml-5'>
            <h2 className="text-2xl font-bold mb-2">Opex Onsite - Net metering</h2>
            <div className="mb-4">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded">
            Solar
            </span>
            </div>
        
            <div className="flex items-center justify-between my-6 py-4 border-y">
            <div className="text-center flex-1">
            <div className="font-semibold">Power producer IPP</div>
            <div className="text-sm text-gray-600">generates electricity</div>
            </div>
            <div className="text-gray-400">→</div>
            <div className="text-center flex-1">
            <div className="font-semibold">Electricity goes</div>
            <div className="text-sm text-gray-600">through the grid</div>
            </div>
            <div className="text-gray-400">→</div>
            <div className="text-center flex-1">
            <div className="font-semibold">Consumer uses</div>
            <div className="text-sm text-gray-600">the electricity</div>
            </div>
            </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div>
            <div className="text-sm text-gray-600">Upfront investment</div>
            <div className="text-xl font-bold">₹5,00,000</div>
            </div>
            <div>
            <div className="text-sm text-gray-600">Project size</div>
            <div className="text-xl font-bold">1.1MW</div>
            </div>
            <div>
            <div className="text-sm text-gray-600">Units procured</div>
            <div className="text-xl font-bold">9,00,000</div>
            </div>
            <div>
            <div className="text-sm text-gray-600">Payback period</div>
            <div className="text-xl font-bold">5 years</div>
            </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
            <div className="flex items-baseline gap-2 mb-2">
            <div className="text-3xl font-bold text-blue-600">₹0.78</div>
            <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">50%</span>
            </div>
            <div className="text-sm text-gray-700">Rate per unit of renewable energy</div>
            <p className="text-xs text-gray-600 mt-2">
            This is the per unit cost that the customer bears for every unit procured through renewables. 
            The price has been arrived at through calculations, including PPA tariff, transmission charges & losses, 
            wheeling charges & losses and banking charges.
            </p>
        </div>
      </div>
      </div>
    </div>
  );
}