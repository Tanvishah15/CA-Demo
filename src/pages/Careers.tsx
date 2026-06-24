import { Briefcase, MapPin, Clock } from 'lucide-react';
import SEO from '../components/shared/SEO';
import CTA from '../components/shared/CTA';
import Button from '../components/shared/Button';

const OPENINGS = [
  {
    title: 'Senior Chartered Accountant',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Lead client engagements in taxation and corporate compliance. FCA with 8+ years experience required.',
  },
  {
    title: 'GST Consultant',
    location: 'Mumbai / Remote',
    type: 'Full-time',
    description: 'Manage GST registrations, filings, and advisory for diverse client portfolio. GST Practitioner certification required.',
  },
  {
    title: 'Legal Associate',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Draft and review founder agreements, SHAs, employment contracts, and investment documentation.',
  },
  {
    title: 'Business Development Executive',
    location: 'Mumbai',
    type: 'Full-time',
    description: 'Drive client acquisition and partnerships. Experience in professional services or fintech preferred.',
  },
];

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers | Shah & Associates"
        description="Join Shah & Associates — build your career with a leading CA, tax advisory, and legal consultancy firm in Mumbai."
      />

      <section className="hero-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Build Your Career With Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join a team of exceptional professionals shaping the future of business advisory in India.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {OPENINGS.map((job) => (
              <div key={job.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy">{job.title}</h3>
                    <p className="text-charcoal text-sm mt-2">{job.description}</p>
                    <div className="flex gap-4 mt-3 text-xs text-charcoal">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> Professional Services</span>
                    </div>
                  </div>
                  <Button to="/contact" size="sm">Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Don't See Your Role?" subtitle="We're always looking for exceptional talent. Send your resume to careers@shahassociates.in" />
    </>
  );
}
