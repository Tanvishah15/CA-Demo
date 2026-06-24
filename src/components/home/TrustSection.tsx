import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import { CLIENT_LOGOS } from '../../data/site';

export default function TrustSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Trusted By Industry Leaders"
          title="Trusted Advisors To India's Fastest Growing Businesses"
          subtitle="Serving clients across 20+ industries with enterprise-grade advisory and compliance solutions."
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {CLIENT_LOGOS.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center h-20 bg-white rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all"
            >
              <span className="font-display font-semibold text-navy/60 text-sm">{name}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'ICAI Registered', desc: 'Member Firm' },
            { label: 'Startup India', desc: 'Recognized Partner' },
            { label: 'ISO 9001', desc: 'Quality Certified' },
            { label: 'MSME Advisory', desc: 'Government Partner' },
          ].map((cert, i) => (
            <motion.div
              key={cert.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-white rounded-xl border border-gray-100"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-gold font-bold text-lg">✓</span>
              </div>
              <div className="font-semibold text-navy">{cert.label}</div>
              <div className="text-sm text-charcoal">{cert.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
