export interface Industry {
  id: string;
  name: string;
  challenges: string[];
  compliance: string[];
  solutions: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'tech',
    name: 'Technology Startups',
    challenges: ['Complex cap table management', 'Cross-border taxation', 'ESOP compliance'],
    compliance: ['GST on SaaS', 'TDS on foreign payments', 'Startup India benefits'],
    solutions: ['Investor-ready structures', 'R&D tax incentives', 'Fundraising documentation'],
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    challenges: ['Multi-state GST', 'Marketplace TCS', 'Return reconciliation'],
    compliance: ['GSTR-1/3B filing', 'E-way bills', 'TCS compliance'],
    solutions: ['Automated GST workflows', 'Inventory tax planning', 'Marketplace advisory'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    challenges: ['Input tax credit optimization', 'Transfer pricing', 'Export incentives'],
    compliance: ['GST on goods', 'Customs documentation', 'Factory compliance'],
    solutions: ['Tax restructuring', 'Export benefit claims', 'Supply chain optimization'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    challenges: ['Service tax classification', 'Medical equipment GST', 'Professional licensing'],
    compliance: ['GST on healthcare services', 'Clinical establishment acts', 'Drug license compliance'],
    solutions: ['Entity structuring', 'Compliance automation', 'Regulatory advisory'],
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    challenges: ['RERA compliance', 'GST on construction', 'Joint development agreements'],
    compliance: ['RERA registration', 'TDS on property', 'Stamp duty planning'],
    solutions: ['Project structuring', 'Investor documentation', 'Tax-efficient SPVs'],
  },
  {
    id: 'export',
    name: 'Export Businesses',
    challenges: ['LUT management', 'Foreign exchange compliance', 'Export incentives'],
    compliance: ['IGST refunds', 'Shipping bill reconciliation', 'FEMA compliance'],
    solutions: ['Export documentation', 'Duty drawback claims', 'International structuring'],
  },
  {
    id: 'textile',
    name: 'Textile Industry',
    challenges: ['Job work GST', 'Inverted duty structure', 'State-specific incentives'],
    compliance: ['GST on textiles', 'Labour law compliance', 'Factory licensing'],
    solutions: ['Credit optimization', 'Incentive advisory', 'Supply chain structuring'],
  },
  {
    id: 'professional',
    name: 'Professional Services',
    challenges: ['Service classification', 'TDS compliance', 'Cross-border clients'],
    compliance: ['GST on services', 'Professional tax', 'Income tax provisions'],
    solutions: ['Entity optimization', 'Retainer structuring', 'International advisory'],
  },
  {
    id: 'retail',
    name: 'Retail',
    challenges: ['Multi-location GST', 'Inventory valuation', 'Franchise compliance'],
    compliance: ['GST registration per state', 'POS reconciliation', 'Franchise agreements'],
    solutions: ['Centralized compliance', 'Franchise structuring', 'Tax planning'],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    challenges: ['E-way bill compliance', 'Fleet GST', 'Inter-state operations'],
    compliance: ['GST on transport', 'TDS on freight', 'Permit documentation'],
    solutions: ['Route optimization advisory', 'Fleet structuring', 'Compliance automation'],
  },
];
