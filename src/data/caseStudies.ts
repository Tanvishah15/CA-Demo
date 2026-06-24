export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  services: string[];
  timeline: string;
  impact: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'saas-incorporation',
    title: 'SaaS Startup Incorporation',
    industry: 'Technology',
    challenge: 'Founders needed an investor-ready legal and compliance structure before their seed round.',
    solution: 'Created Pvt Ltd structure with ESOP pool, SHA, and comprehensive compliance roadmap aligned with investor requirements.',
    outcome: 'Successfully raised ₹5 Crore Seed Round within 4 months of incorporation.',
    services: ['Company Incorporation', 'Startup Advisory', 'Legal Documentation'],
    timeline: '6 weeks',
    impact: '100% investor compliance score',
  },
  {
    id: 'manufacturing-tax',
    title: 'Manufacturing Company Tax Optimization',
    industry: 'Manufacturing',
    challenge: 'High effective tax burden due to inefficient corporate structure and missed deductions.',
    solution: 'Implemented holding company restructuring with optimized transfer pricing and R&D credit claims.',
    outcome: '18% reduction in annual tax liability — saving ₹2.4 Crore annually.',
    services: ['Business Structuring', 'Income Tax Services', 'GST Advisory'],
    timeline: '3 months',
    impact: '₹2.4 Cr annual savings',
  },
  {
    id: 'd2c-trademark',
    title: 'Trademark Protection For D2C Brand',
    industry: 'E-commerce',
    challenge: 'Fast-growing D2C brand faced counterfeit threats and needed comprehensive IP protection.',
    solution: 'Filed trademark in 5 classes, implemented brand monitoring, and drafted enforcement strategy.',
    outcome: 'Successfully secured intellectual property rights across all product categories.',
    services: ['Trademark & IP', 'Legal Documentation'],
    timeline: '8 months',
    impact: '5 trademark classes secured',
  },
];
