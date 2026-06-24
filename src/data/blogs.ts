export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

export const BLOG_CATEGORIES = [
  'GST', 'Income Tax', 'Startup Law', 'Compliance', 'Business Strategy', 'Funding',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Latest GST Updates: What Businesses Need to Know in 2026',
    excerpt: 'Comprehensive overview of recent GST amendments, e-invoicing mandates, and compliance deadlines affecting Indian businesses.',
    category: 'GST',
    date: '2026-06-15',
    readTime: '8 min',
    slug: 'latest-gst-updates-2026',
    featured: true,
  },
  {
    id: '2',
    title: 'Tax Saving Strategies For SMEs: A Practical Guide',
    excerpt: 'Actionable tax planning strategies that SMEs can implement to reduce liability while staying fully compliant.',
    category: 'Income Tax',
    date: '2026-06-10',
    readTime: '10 min',
    slug: 'tax-saving-strategies-smes',
    featured: true,
  },
  {
    id: '3',
    title: 'Startup Registration Checklist: From Idea to Incorporated',
    excerpt: 'Step-by-step checklist for founders registering their startup in India — covering legal, tax, and compliance requirements.',
    category: 'Startup Law',
    date: '2026-06-05',
    readTime: '12 min',
    slug: 'startup-registration-checklist',
    featured: true,
  },
  {
    id: '4',
    title: 'How To Avoid ROC Penalties: Common Mistakes & Solutions',
    excerpt: 'ROC non-compliance can cost lakhs in penalties. Learn the most common filing mistakes and how to prevent them.',
    category: 'Compliance',
    date: '2026-05-28',
    readTime: '7 min',
    slug: 'avoid-roc-penalties',
    featured: true,
  },
  {
    id: '5',
    title: 'Business Structuring For Founders: Tax-Efficient Entity Design',
    excerpt: 'Choosing the right business structure can save crores in taxes. A founder\'s guide to entity selection and holding companies.',
    category: 'Business Strategy',
    date: '2026-05-20',
    readTime: '15 min',
    slug: 'business-structuring-founders',
    featured: true,
  },
  {
    id: '6',
    title: 'ESOP Implementation Guide for Indian Startups',
    excerpt: 'Everything founders need to know about ESOP pools, vesting schedules, and tax implications for employees.',
    category: 'Funding',
    date: '2026-05-12',
    readTime: '11 min',
    slug: 'esop-implementation-guide',
  },
  {
    id: '7',
    title: 'GST Notice Response: A Step-by-Step Playbook',
    excerpt: 'Received a GST notice? Here\'s how to respond effectively and protect your business interests.',
    category: 'GST',
    date: '2026-05-05',
    readTime: '9 min',
    slug: 'gst-notice-response-playbook',
  },
  {
    id: '8',
    title: 'Section 80IAC Tax Holiday: Startup India Benefits Explained',
    excerpt: 'Detailed guide to claiming the 3-year tax holiday under Section 80IAC for eligible startups.',
    category: 'Income Tax',
    date: '2026-04-28',
    readTime: '8 min',
    slug: 'section-80iac-tax-holiday',
  },
];
