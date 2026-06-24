import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { INDUSTRIES } from '../../data/industries';

export default function Industries() {
  const [active, setActive] = useState(INDUSTRIES[0]);

  return (
    <section className="py-20 bg-surface" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Industries We Serve"
          title="Specialized Solutions For Every Sector"
          subtitle="Deep industry expertise delivering tailored compliance and advisory solutions."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-2">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActive(ind)}
                className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                  active.id === ind.id
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-white text-charcoal hover:bg-gray-50 border border-gray-100'
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
              >
                <h3 className="font-display text-2xl font-bold text-navy mb-6">{active.name}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: 'Industry Challenges', items: active.challenges },
                    { title: 'Compliance Requirements', items: active.compliance },
                    { title: 'Our Solutions', items: active.solutions },
                  ].map((section) => (
                    <div key={section.title}>
                      <h4 className="font-semibold text-navy mb-3 text-sm uppercase tracking-wide">{section.title}</h4>
                      <ul className="space-y-2">
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
