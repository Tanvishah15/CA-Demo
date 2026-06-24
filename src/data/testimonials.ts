export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  rating: number;
  review: string;
  type: 'founder' | 'sme' | 'corporate';
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Mehta',
    role: 'Co-Founder & CEO',
    company: 'TechVenture AI',
    industry: 'SaaS / Technology',
    rating: 5,
    review: 'Shah & Associates transformed our compliance from a headache into a competitive advantage. Their startup advisory helped us close our seed round with complete investor confidence.',
    type: 'founder',
    initials: 'PM',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'Managing Director',
    company: 'BuildRight Manufacturing',
    industry: 'Manufacturing',
    rating: 5,
    review: 'The tax restructuring strategy saved us over ₹2 Crore annually. Their team operates with the professionalism of a Big 4 firm but with the personal attention we needed.',
    type: 'corporate',
    initials: 'RK',
  },
  {
    id: '3',
    name: 'Ananya Sharma',
    role: 'Founder',
    company: 'StyleCraft D2C',
    industry: 'E-commerce',
    rating: 5,
    review: 'From incorporation to trademark protection, they handled everything seamlessly. I could focus on building my brand while they managed all compliance.',
    type: 'founder',
    initials: 'AS',
  },
  {
    id: '4',
    name: 'Vikram Patel',
    role: 'Director',
    company: 'ExportHub Global',
    industry: 'Export / Trade',
    rating: 5,
    review: 'Navigating export GST and FEMA compliance was overwhelming until we partnered with Shah & Associates. Their expertise in international trade is unmatched.',
    type: 'sme',
    initials: 'VP',
  },
  {
    id: '5',
    name: 'Dr. Sneha Reddy',
    role: 'Founder',
    company: 'MedCore Health',
    industry: 'Healthcare',
    rating: 5,
    review: 'Healthcare compliance is complex, but their team made it manageable. Proactive reminders and strategic advice have been invaluable for our growth.',
    type: 'sme',
    initials: 'SR',
  },
  {
    id: '6',
    name: 'Arjun Desai',
    role: 'CFO',
    company: 'NovaPay Fintech',
    industry: 'Fintech',
    rating: 5,
    review: 'We needed a firm that understands both regulatory compliance and startup velocity. Shah & Associates delivered on both fronts with exceptional quality.',
    type: 'corporate',
    initials: 'AD',
  },
];

export const TESTIMONIAL_STATS = [
  { value: '98%', label: 'Client Retention' },
  { value: '500+', label: 'Businesses Served' },
  { value: '1,000+', label: 'Compliance Projects' },
];
