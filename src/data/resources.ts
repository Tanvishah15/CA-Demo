import { Calculator, CheckSquare, BookOpen, Briefcase, Receipt, FileDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Resource {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  type: string;
  downloads: string;
}

export const RESOURCES: Resource[] = [
  {
    id: 'tax-calc',
    title: 'Tax Calculators',
    description: 'Income tax, GST, and TDS calculators for quick estimates and planning.',
    icon: Calculator,
    type: 'Interactive Tool',
    downloads: '12,000+',
  },
  {
    id: 'compliance-checklist',
    title: 'Compliance Checklists',
    description: 'Monthly, quarterly, and annual compliance checklists for all business types.',
    icon: CheckSquare,
    type: 'PDF Download',
    downloads: '8,500+',
  },
  {
    id: 'formation-guides',
    title: 'Business Formation Guides',
    description: 'Step-by-step guides for Pvt Ltd, LLP, OPC, and partnership registration.',
    icon: BookOpen,
    type: 'PDF Download',
    downloads: '15,000+',
  },
  {
    id: 'startup-toolkit',
    title: 'Startup Legal Toolkit',
    description: 'Founder agreements, SHA templates, and ESOP documentation toolkit.',
    icon: Briefcase,
    type: 'PDF Download',
    downloads: '6,200+',
  },
  {
    id: 'gst-guides',
    title: 'GST Guides',
    description: 'Comprehensive GST registration, filing, and notice response guides.',
    icon: Receipt,
    type: 'PDF Download',
    downloads: '10,000+',
  },
  {
    id: 'tax-calendar',
    title: 'Tax Calendar 2026',
    description: 'Complete tax and compliance deadline calendar with reminder setup.',
    icon: FileDown,
    type: 'PDF Download',
    downloads: '20,000+',
  },
];
