import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SEO from '../components/shared/SEO';
import CTA from '../components/shared/CTA';
import Button from '../components/shared/Button';
import { SERVICES } from '../data/services';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services | Shah & Associates"
        description="Comprehensive tax, compliance, legal, and startup advisory services. GST, income tax, incorporation, ROC, trademark, and more."
      />

      <section className="hero-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Our Services
          </motion.h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            End-to-end advisory ecosystem for tax, compliance, legal, and strategic business growth.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <h2 className="font-display text-3xl font-bold text-navy mb-3">{service.title}</h2>
                <p className="text-charcoal leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-lg font-bold text-gold">Starting {service.startingPrice}</span>
                </div>
                <Button to="/contact">Get Started</Button>
              </div>
              <div className={`bg-surface rounded-2xl p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-semibold text-navy mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-charcoal">
                      <Check className="w-5 h-5 text-gold shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
