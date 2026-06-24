export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'ca' | 'cs' | 'tax' | 'legal';
  qualifications: string[];
  experience: string;
  specialization: string;
  initials: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'CA Rahul Shah',
    role: 'Founder & Managing Partner',
    category: 'ca',
    qualifications: ['FCA', 'DISA', 'GST Practitioner'],
    experience: '15+ years',
    specialization: 'Taxation & Startup Advisory',
    initials: 'RS',
  },
  {
    id: '2',
    name: 'CA Priya Nair',
    role: 'Senior Partner',
    category: 'ca',
    qualifications: ['FCA', 'LLB'],
    experience: '12+ years',
    specialization: 'Corporate Tax & Structuring',
    initials: 'PN',
  },
  {
    id: '3',
    name: 'CS Meera Joshi',
    role: 'Company Secretary',
    category: 'cs',
    qualifications: ['ACS', 'LLB'],
    experience: '10+ years',
    specialization: 'ROC Compliance & Secretarial',
    initials: 'MJ',
  },
  {
    id: '4',
    name: 'Adv. Karan Malhotra',
    role: 'Legal Advisor',
    category: 'legal',
    qualifications: ['LLB', 'LLM Corporate Law'],
    experience: '11+ years',
    specialization: 'Startup Law & IP',
    initials: 'KM',
  },
  {
    id: '5',
    name: 'CA Deepak Verma',
    role: 'Tax Consultant',
    category: 'tax',
    qualifications: ['ACA', 'GST Practitioner'],
    experience: '8+ years',
    specialization: 'GST & Indirect Tax',
    initials: 'DV',
  },
  {
    id: '6',
    name: 'CA Anjali Rao',
    role: 'Tax Consultant',
    category: 'tax',
    qualifications: ['ACA', 'DISA'],
    experience: '7+ years',
    specialization: 'Income Tax & Audits',
    initials: 'AR',
  },
  {
    id: '7',
    name: 'CS Ravi Shankar',
    role: 'Company Secretary',
    category: 'cs',
    qualifications: ['ACS'],
    experience: '9+ years',
    specialization: 'Board Governance & Filings',
    initials: 'RS',
  },
  {
    id: '8',
    name: 'Adv. Neha Kapoor',
    role: 'Legal Advisor',
    category: 'legal',
    qualifications: ['LLB', 'Trademark Attorney'],
    experience: '8+ years',
    specialization: 'Trademark & Contracts',
    initials: 'NK',
  },
];

export const TEAM_CATEGORIES = [
  { key: 'ca', label: 'Chartered Accountants' },
  { key: 'cs', label: 'Company Secretaries' },
  { key: 'tax', label: 'Tax Consultants' },
  { key: 'legal', label: 'Legal Advisors' },
];
