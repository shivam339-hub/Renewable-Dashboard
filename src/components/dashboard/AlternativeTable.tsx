// IMPORTS NEEDED:
'use client'; // Required for useState, useMemo

import { useState, useMemo } from 'react';
import { Search, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import { Alternative, SortConfig } from '@/types';
import { mockAlternatives } from '@/data/mockData';
import { filterData, sortData } from '@/lib/tableUtils';

export default function AlternativesTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'asc' });

  const handleSort = (key: keyof Alternative) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const filteredData = useMemo(() => {
    return filterData(mockAlternatives, searchTerm);
  }, [searchTerm]);

  const sortedData = useMemo(() => {
    return sortData(filteredData, sortConfig);
  }, [filteredData, sortConfig]);

  const SortIcon = ({ columnKey }: { columnKey: keyof Alternative }) => {
    if (sortConfig.key !== columnKey) {
      return <ChevronsUpDown className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' ? (
      <ChevronUp className="w-4 h-4 text-blue-600" />
    ) : (
      <ChevronDown className="w-4 h-4 text-blue-600" />
    );
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Other alternatives</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search alternatives..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full bg-white">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="sticky left-0 bg-gray-50 z-20 px-4 py-3 text-left">
                <button
                  onClick={() => handleSort('procurementMode')}
                  className="flex items-center gap-2 font-semibold text-sm"
                >
                  Procurement mode
                  <SortIcon columnKey="procurementMode" />
                </button>
              </th>
              <th className="px-4 py-3 text-left min-w-[120px]">
                <button
                  onClick={() => handleSort('technology')}
                  className="flex items-center gap-2 font-semibold text-sm"
                >
                  Technology
                  <SortIcon columnKey="technology" />
                </button>
              </th>
              <th className="px-4 py-3 text-left min-w-[140px]">
                <button
                  onClick={() => handleSort('costPerUnit')}
                  className="flex items-center gap-2 font-semibold text-sm"
                >
                  Cost per unit
                  <SortIcon columnKey="costPerUnit" />
                </button>
              </th>
              <th className="px-4 py-3 text-left min-w-[140px]">
                <button
                  onClick={() => handleSort('annualSavings')}
                  className="flex items-center gap-2 font-semibold text-sm"
                >
                  Annual savings
                  <SortIcon columnKey="annualSavings" />
                </button>
              </th>
              <th className="px-4 py-3 text-left min-w-[180px]">
                <button
                  onClick={() => handleSort('upfrontInvestment')}
                  className="flex items-center gap-2 font-semibold text-sm"
                >
                  Upfront investment
                  <SortIcon columnKey="upfrontInvestment" />
                </button>
              </th>
              <th className="px-4 py-3 text-left min-w-[300px]">
                <button
                  onClick={() => handleSort('notes')}
                  className="flex items-center gap-2 font-semibold text-sm"
                >
                  Notes
                  <SortIcon columnKey="notes" />
                </button>
              </th>
              <th className="px-4 py-3 text-left min-w-[120px]">
                <button
                  onClick={() => handleSort('column1')}
                  className="flex items-center gap-2 font-semibold text-sm"
                >
                  Column A
                  <SortIcon columnKey="column1" />
                </button>
              </th>
              <th className="px-4 py-3 text-left min-w-[120px]">
                <button
                  onClick={() => handleSort('column2')}
                  className="flex items-center gap-2 font-semibold text-sm"
                >
                  Column B
                  <SortIcon columnKey="column2" />
                </button>
              </th>
              <th className="px-4 py-3 text-left min-w-[120px]">
                <button
                  onClick={() => handleSort('column3')}
                  className="flex items-center gap-2 font-semibold text-sm"
                >
                  Column C
                  <SortIcon columnKey="column3" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {sortedData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="sticky left-0 bg-white z-10 px-4 py-3 font-medium">
                  {row.procurementMode}
                </td>
                <td className="px-4 py-3">{row.technology}</td>
                <td className="px-4 py-3">{row.costPerUnit}</td>
                <td className="px-4 py-3">{row.annualSavings}</td>
                <td className="px-4 py-3">{row.upfrontInvestment}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{row.notes}</td>
                <td className="px-4 py-3">{row.column1}</td>
                <td className="px-4 py-3">{row.column2}</td>
                <td className="px-4 py-3">{row.column3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}