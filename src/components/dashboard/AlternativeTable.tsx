'use client'

import { useState, useMemo } from 'react'
import {
  Search,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
} from 'lucide-react'

import { Alternative, SortConfig } from '@/types'
import { mockAlternatives } from '@/data/mockData'
import { filterData, sortData } from '@/lib/tableUtils'

export default function AlternativesTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: 'asc',
  })

  const handleSort = (key: keyof Alternative) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === 'asc'
          ? 'desc'
          : 'asc',
    }))
  }

  const filteredData = useMemo(
    () => filterData(mockAlternatives, searchTerm),
    [searchTerm]
  )

  const sortedData = useMemo(
    () => sortData(filteredData, sortConfig),
    [filteredData, sortConfig]
  )

  const SortIcon = ({ columnKey }: { columnKey: keyof Alternative }) => {
    if (sortConfig.key !== columnKey) {
      return (
        <ChevronsUpDown className="h-4 w-4 text-gray-400" />
      )
    }

    return sortConfig.direction === 'asc' ? (
      <ChevronUp className="h-4 w-4 text-blue-600" />
    ) : (
      <ChevronDown className="h-4 w-4 text-blue-600" />
    )
  }

  return (
    <section className="mt-10 rounded-xl border border-gray-200 bg-white">
      
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-sm font-semibold text-gray-900">
          Other alternatives
        </h2>

        {/* Search */}
        <div className="relative w-full sm:w-[260px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search alternatives"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-gray-200 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          
          {/* Table Head */}
          <thead className="bg-gray-50 text-xs font-medium text-gray-500">
            <tr>
              {[
                { key: 'procurementMode', label: 'Procurement mode', sticky: true },
                { key: 'technology', label: 'Technology' },
                { key: 'costPerUnit', label: 'Cost / unit' },
                { key: 'annualSavings', label: 'Annual savings' },
                { key: 'upfrontInvestment', label: 'Upfront investment' },
                { key: 'notes', label: 'Notes', wide: true },
                { key: 'column1', label: 'Column A' },
                { key: 'column2', label: 'Column B' },
                { key: 'column3', label: 'Column C' },
              ].map((col) => (
                <th
                  key={col.key}
                  className={`whitespace-nowrap px-5 py-3 text-left ${
                    col.sticky
                      ? 'sticky left-0 z-20 bg-gray-50'
                      : ''
                  } ${col.wide ? 'min-w-[280px]' : 'min-w-[140px]'}`}
                >
                  <button
                    onClick={() =>
                      handleSort(col.key as keyof Alternative)
                    }
                    className="flex items-center gap-2"
                  >
                    {col.label}
                    <SortIcon
                      columnKey={col.key as keyof Alternative}
                    />
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {sortedData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50"
              >
                <td className="sticky left-0 z-10 bg-white px-5 py-4 font-medium text-gray-900">
                  {row.procurementMode}
                </td>

                <td className="px-5 py-4 text-gray-700">
                  {row.technology}
                </td>

                <td className="px-5 py-4 text-gray-700">
                  {row.costPerUnit}
                </td>

                <td className="px-5 py-4 text-gray-700">
                  {row.annualSavings}
                </td>

                <td className="px-5 py-4 text-gray-700">
                  {row.upfrontInvestment}
                </td>

                <td className="px-5 py-4 text-xs leading-relaxed text-gray-500">
                  {row.notes}
                </td>

                <td className="px-5 py-4 text-gray-700">
                  {row.column1}
                </td>

                <td className="px-5 py-4 text-gray-700">
                  {row.column2}
                </td>

                <td className="px-5 py-4 text-gray-700">
                  {row.column3}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
