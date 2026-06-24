import {
  FileText, Building2, Scale, Shield, Landmark,
  Lightbulb, Layers, Receipt,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  deliverables: string[];
  startingPrice: string;
  slug: string;
}

export const SERVICES: Service[] = [
  {
    id: 'gst',
    title: 'GST Registration & Filing',
    icon: Receipt,
    description: 'End-to-end GST compliance for businesses of all sizes — from registration to audit representation.',
    deliverables: ['GST registration', 'Monthly filing', 'GST notices', 'GST audits', 'GST advisory'],
    startingPrice: '₹2,999/month',
    slug: 'gst-registration-filing',
  },
  {
    id: 'income-tax',
    title: 'Income Tax Services',
    icon: FileText,
    description: 'Strategic tax planning and compliance for individuals, corporates, and high-net-worth clients.',
    deliverables: ['Individual taxation', 'Corporate taxation', 'Tax planning', 'Tax audits', 'Representation'],
    startingPrice: '₹4,999/year',
    slug: 'income-tax-services',
  },
  {
    id: 'incorporation',
    title: 'Company Incorporation',
    icon: Building2,
    description: 'Investor-ready company structures with complete documentation and compliance setup.',
    deliverables: ['Private Limited', 'LLP', 'OPC', 'Partnership', 'Foreign subsidiaries'],
    startingPrice: '₹14,999',
    slug: 'company-incorporation',
  },
  {
    id: 'roc',
    title: 'ROC Compliance',
    icon: Landmark,
    description: 'Seamless annual filings, director compliance, and secretarial services to avoid penalties.',
    deliverables: ['Annual filings', 'Director compliance', 'Board resolutions', 'Secretarial services'],
    startingPrice: '₹9,999/year',
    slug: 'roc-compliance',
  },
  {
    id: 'trademark',
    title: 'Trademark & IP Protection',
    icon: Shield,
    description: 'Protect your brand identity with comprehensive trademark and intellectual property services.',
    deliverables: ['Trademark registration', 'Copyright filing', 'Brand protection'],
    startingPrice: '₹6,999',
    slug: 'trademark-ip',
  },
  {
    id: 'legal-docs',
    title: 'Legal Documentation',
    icon: Scale,
    description: 'Founder agreements, employment contracts, and investment documentation crafted for growth.',
    deliverables: ['Founder agreements', 'Employment contracts', 'Vendor agreements', 'Investment documentation'],
    startingPrice: '₹7,999',
    slug: 'legal-documentation',
  },
  {
    id: 'startup',
    title: 'Startup Advisory',
    icon: Lightbulb,
    description: 'From fundraising readiness to ESOP implementation — advisory built for scaling startups.',
    deliverables: ['Fundraising readiness', 'Investor documentation', 'Cap table structuring', 'ESOP implementation'],
    startingPrice: '₹24,999',
    slug: 'startup-advisory',
  },
  {
    id: 'structuring',
    title: 'Business Structuring',
    icon: Layers,
    description: 'Tax-efficient structures for holding companies, family offices, and succession planning.',
    deliverables: ['Tax-efficient structures', 'Holding companies', 'Family offices', 'Succession planning'],
    startingPrice: '₹49,999',
    slug: 'business-structuring',
  },
];

export const WORKFLOW_STEPS = [
  { step: 1, title: 'Discovery Consultation', description: 'Understanding your business goals, challenges, and compliance landscape.' },
  { step: 2, title: 'Business Assessment', description: 'Comprehensive audit of current structure, filings, and risk areas.' },
  { step: 3, title: 'Strategy Development', description: 'Custom advisory roadmap aligned with your growth objectives.' },
  { step: 4, title: 'Documentation', description: 'Preparation of all legal, tax, and compliance documentation.' },
  { step: 5, title: 'Execution', description: 'Filing, registration, and implementation with full transparency.' },
  { step: 6, title: 'Ongoing Compliance', description: 'Continuous monitoring, reminders, and proactive advisory.' },
];

export const CREDENTIALS = [
  'ICAI Membership',
  'GST Practitioner Registration',
  'MSME Advisory Partner',
  'Startup India Recognition',
  'Professional Certifications',
  'Industry Memberships',
];
