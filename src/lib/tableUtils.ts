// IMPORTS NEEDED:
import { Alternative, SortConfig } from '@/types';

export function filterData(data: Alternative[], searchTerm: string): Alternative[] {
  if (!searchTerm) return data;
  
  return data.filter((item) =>
    Object.values(item).some((val) =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
}

export function sortData(
  data: Alternative[],
  sortConfig: SortConfig
): Alternative[] {
  if (!sortConfig.key) return data;

  return [...data].sort((a, b) => {
    const aVal = a[sortConfig.key!];
    const bVal = b[sortConfig.key!];

    if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });
}