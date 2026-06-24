import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/shared/SEO';
import CTA from '../components/shared/CTA';
import Button from '../components/shared/Button';
import { INDUSTRIES } from '../data/industries';

export default function IndustriesPage() {
  const [active, setActive] = useState(INDUSTRIES[0]);

  return (
    <>
      <SEO
        title="Industries We Serve | Shah & Associates"
        description="Specialized tax, compliance, and advisory solutions for technology, e-commerce, manufacturing, healthcare, and more."
      />

      <section className="hero-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Industries We Serve
          </motion.h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Deep sector expertise delivering tailored compliance and advisory solutions across 20+ industries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActive(ind)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  active.id === ind.id ? 'bg-navy text-white shadow-lg' : 'bg-surface text-charcoal hover:bg-gray-200'
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12"
          >
            <h2 className="font-display text-3xl font-bold text-navy mb-8">{active.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Industry Challenges', items: active.challenges },
                { title: 'Compliance Requirements', items: active.compliance },
                { title: 'Our Specialized Solutions', items: active.solutions },
              ].map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-navy mb-4 pb-2 border-b border-gold/30">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Button to="/contact">Get Industry-Specific Advisory</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
