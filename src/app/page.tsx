// IMPORTS
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EnergyBanner from '@/components/dashboard/EnergyBanner'
import CurrentBillCard from '@/components/dashboard/CurrentBillCard'
import NewBillCard from '@/components/dashboard/NewBillCard'
import RecommendedSolution from '@/components/dashboard/RecommendedSolution'
import Assumptions from '@/components/dashboard/Assumptions'
import AlternativesTable from '@/components/dashboard/AlternativeTable'
import FAQ from '@/components/dashboard/FAQ'
import EmailSubscription from '@/components/dashboard/EmailSubscription'
import { Download } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <EnergyBanner />

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-[20px] font-semibold text-gray-900">
            Recommended solution for ABC Industries
          </h1>

          <button className="flex items-center gap-2 rounded-[6px] bg-[#0B5ED7] px-[12px] py-[6px] text-[12px] text-white">
            <Download className="h-4 w-4" />
            Download as PDF
          </button>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <CurrentBillCard />
          <NewBillCard />
        </div>

        <RecommendedSolution />
        <Assumptions />

        <div className="overflow-x-auto">
          <AlternativesTable />
        </div>

        <FAQ />
        <EmailSubscription />
      </main>

      <Footer />
    </div>
  )
}
