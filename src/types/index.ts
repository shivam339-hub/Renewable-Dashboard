// NO IMPORTS NEEDED - This file only exports types

export interface Alternative {
  id: string;
  procurementMode: string;
  technology: string;
  costPerUnit: string;
  annualSavings: string;
  upfrontInvestment: string;
  notes: string;
  column1: string;
  column2: string;
  column3: string;
}

export type SortConfig = {
  key: keyof Alternative | null;
  direction: 'asc' | 'desc';
};