import { useState } from 'react';
import { Mail } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import ConsultationForm from '../shared/ConsultationForm';

export default function ConsultationSection() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  return (
    <section className="py-20" id="consultation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <SectionHeading
              label="Get Started"
              title="Book Your Free Consultation"
              subtitle="Take the first step towards compliant, strategic growth. Our experts are ready to help."
              centered={false}
            />

            <div className="space-y-6 mt-8">
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h4 className="font-semibold mb-2">What to Expect</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 30-minute discovery call with a senior advisor</li>
                  <li>• Personalized compliance assessment</li>
                  <li>• Custom advisory roadmap</li>
                  <li>• No obligation — completely free</li>
                </ul>
              </div>

              <div className="bg-surface rounded-2xl p-6">
                <h4 className="font-semibold text-navy mb-3">Stay Updated</h4>
                <p className="text-sm text-charcoal mb-3">Subscribe to our newsletter and tax calendar reminders.</p>
                <form onSubmit={(e) => { e.preventDefault(); setNewsletterEmail(''); alert('Subscribed!'); }} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-gold outline-none"
                    />
                  </div>
                  <button type="submit" className="bg-gold text-navy font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-gold-light transition-colors cursor-pointer">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
