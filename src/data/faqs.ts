export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQ_CATEGORIES = [
  'GST', 'Income Tax', 'Company Registration', 'ROC Compliance',
  'Trademark', 'Startup Advisory', 'Legal Documentation', 'Funding',
];

export const FAQS: FAQ[] = [
  {
    id: 'gst-1',
    category: 'GST',
    question: 'Who is required to register for GST in India?',
    answer: 'Businesses with an annual turnover exceeding ₹40 lakhs (₹20 lakhs for special category states) for goods, or ₹20 lakhs (₹10 lakhs for special states) for services, must register for GST. E-commerce sellers and businesses making inter-state supplies must register regardless of turnover.',
  },
  {
    id: 'gst-2',
    category: 'GST',
    question: 'What are the penalties for late GST filing?',
    answer: 'Late filing of GSTR-3B attracts a penalty of ₹50 per day (₹20 for nil returns), capped at ₹5,000. Additionally, interest at 18% per annum is charged on outstanding tax liability. Repeated delays can lead to cancellation of registration.',
  },
  {
    id: 'gst-3',
    category: 'GST',
    question: 'Can I claim Input Tax Credit (ITC) on all business purchases?',
    answer: 'ITC can be claimed on goods and services used for business purposes, subject to specific restrictions. Blocked credits include motor vehicles (with exceptions), food, outdoor catering, and personal consumption items. Proper documentation and matching in GSTR-2B is essential.',
  },
  {
    id: 'it-1',
    category: 'Income Tax',
    question: 'What is the difference between old and new tax regimes?',
    answer: 'The new tax regime offers lower slab rates but eliminates most deductions and exemptions. The old regime retains higher rates but allows deductions under Sections 80C, 80D, HRA, and others. The optimal choice depends on your income level and eligible deductions.',
  },
  {
    id: 'it-2',
    category: 'Income Tax',
    question: 'When is a tax audit mandatory for businesses?',
    answer: 'A tax audit under Section 44AB is mandatory if business turnover exceeds ₹1 crore (₹10 crore if cash transactions are less than 5%), or professional receipts exceed ₹50 lakhs. Non-compliance attracts penalties of ₹1.5 lakhs or 0.5% of turnover.',
  },
  {
    id: 'it-3',
    category: 'Income Tax',
    question: 'How can startups save on income tax?',
    answer: 'Startups recognized under Startup India can claim a 3-year tax holiday under Section 80IAC. Additional benefits include exemption from angel tax under Section 56(2)(viib), carry-forward of losses despite shareholding changes, and accelerated depreciation.',
  },
  {
    id: 'cr-1',
    category: 'Company Registration',
    question: 'What is the best entity type for a startup in India?',
    answer: 'Private Limited Company is the most popular choice for startups seeking funding, offering limited liability, easy equity transfer, and investor credibility. LLP suits professional services, while OPC works for solo founders. The choice depends on funding plans, liability concerns, and tax optimization.',
  },
  {
    id: 'cr-2',
    category: 'Company Registration',
    question: 'How long does company incorporation take?',
    answer: 'With SPICe+ form, incorporation typically takes 7-15 working days, including name approval, DIN allotment, and certificate of incorporation. Timelines depend on document readiness and MCA processing speed.',
  },
  {
    id: 'cr-3',
    category: 'Company Registration',
    question: 'What documents are needed for Pvt Ltd incorporation?',
    answer: 'Required documents include PAN and Aadhaar of directors, address proof, passport-size photographs, registered office proof (rent agreement + NOC), and MOA/AOA. Foreign directors need apostilled passport and address proof.',
  },
  {
    id: 'roc-1',
    category: 'ROC Compliance',
    question: 'What are the annual ROC filing requirements?',
    answer: 'Companies must file AOC-4 (financial statements) within 30 days of AGM, MGT-7/7A (annual return) within 60 days of AGM, and DIR-3 KYC for all directors annually. LLPs file Form 8 and Form 11.',
  },
  {
    id: 'roc-2',
    category: 'ROC Compliance',
    question: 'What happens if ROC filings are delayed?',
    answer: 'Late filing attracts additional fees based on company capital — ranging from ₹100 to ₹600 per day per form. Continued non-compliance can lead to company strike-off, director disqualification, and personal liability for officers in default.',
  },
  {
    id: 'roc-3',
    category: 'ROC Compliance',
    question: 'Do dormant companies need to file ROC returns?',
    answer: 'Yes, even dormant companies must file annual returns and financial statements (or simplified forms). Failure to file for two consecutive years can result in the company being marked as "Active Non-Compliant" and eventual strike-off.',
  },
  {
    id: 'tm-1',
    category: 'Trademark',
    question: 'How long does trademark registration take in India?',
    answer: 'Trademark registration typically takes 12-18 months, including examination, publication, and opposition period. The ™ symbol can be used immediately upon filing, while ® requires registration completion.',
  },
  {
    id: 'tm-2',
    category: 'Trademark',
    question: 'What trademark classes should I register in?',
    answer: 'Register in classes relevant to your products/services. Most brands register in Class 35 (advertising/business) plus product-specific classes. A comprehensive search before filing prevents conflicts and objections.',
  },
  {
    id: 'tm-3',
    category: 'Trademark',
    question: 'Can I trademark a logo and brand name together?',
    answer: 'Logo and word marks should be filed as separate applications for stronger protection. A combined mark protects only the specific combination, while separate filings allow independent enforcement of each element.',
  },
  {
    id: 'sa-1',
    category: 'Startup Advisory',
    question: 'What is a cap table and why does it matter?',
    answer: 'A cap table (capitalization table) tracks equity ownership, including founders, investors, and ESOP pools. A clean cap table is essential for fundraising — investors scrutinize dilution history, vesting schedules, and reserved option pools.',
  },
  {
    id: 'sa-2',
    category: 'Startup Advisory',
    question: 'How should ESOP pools be structured?',
    answer: 'A typical ESOP pool reserves 10-15% of equity for employees, created before funding rounds to avoid founder dilution. Vesting schedules of 4 years with a 1-year cliff are standard. Tax implications under perquisite rules must be planned.',
  },
  {
    id: 'sa-3',
    category: 'Startup Advisory',
    question: 'What compliance is needed before raising funding?',
    answer: 'Pre-funding compliance includes clean cap table, updated SHA, board resolutions, audited financials, GST/income tax compliance, IP assignments, and proper employment documentation. Due diligence readiness accelerates closing.',
  },
  {
    id: 'ld-1',
    category: 'Legal Documentation',
    question: 'Why do founders need a Founder Agreement?',
    answer: 'A Founder Agreement defines roles, equity split, vesting, IP assignment, non-compete, and exit terms. Without it, disputes over equity and responsibilities are the leading cause of startup failure — often more damaging than market challenges.',
  },
  {
    id: 'ld-2',
    category: 'Legal Documentation',
    question: 'What should an employment contract include?',
    answer: 'Employment contracts should cover designation, compensation, probation, confidentiality, IP assignment, non-solicitation, termination clauses, and compliance with labour laws including PF, ESI, and gratuity applicability.',
  },
  {
    id: 'ld-3',
    category: 'Legal Documentation',
    question: 'What is a SHA and when is it needed?',
    answer: 'A Shareholders Agreement (SHA) governs rights and obligations of shareholders beyond the MOA/AOA. It covers board composition, reserved matters, drag/tag rights, anti-dilution, and exit mechanisms. Essential before any equity investment.',
  },
  {
    id: 'fd-1',
    category: 'Funding',
    question: 'What tax implications arise from raising venture capital?',
    answer: 'Equity investments are generally not taxable for the company. However, valuations must withstand scrutiny under Section 56(2)(viib) (angel tax). Convertible instruments have specific accounting and tax treatment. Proper documentation prevents disputes.',
  },
  {
    id: 'fd-2',
    category: 'Funding',
    question: 'How does a term sheet affect company compliance?',
    answer: 'Term sheets trigger compliance obligations including board approvals, shareholder resolutions, cap table updates, and regulatory filings. Conditions precedent often require clean legal, tax, and IP status verified through due diligence.',
  },
];
