// IMPORTS NEEDED:
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CurrentBillCard from '@/components/dashboard/CurrentBillCard';
import NewBillCard from '@/components/dashboard/NewBillCard';
import RecommendedSolution from '@/components/dashboard/RecommendedSolution';
import AlternativesTable from '@/components/dashboard/AlternativeTable';
import FAQ from '@/components/dashboard/FAQ';
import EmailSubscription from '@/components/dashboard/EmailSubscription';
import { Download } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Recommended solution for ABC Industries</h1>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4" />
            Download as PDF
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CurrentBillCard />
          <NewBillCard />
        </div>

        <div>
          <RecommendedSolution />
          <AlternativesTable />
          <FAQ />
          <EmailSubscription />
        </div>
      </main>

  <Footer />
      </div>
);
}