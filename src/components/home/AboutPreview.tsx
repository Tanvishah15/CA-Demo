import { motion } from 'framer-motion';
import Button from '../shared/Button';
import { FOUNDER, MISSION, VISION, CORE_VALUES } from '../../data/site';

export default function AboutPreview() {
  return (
    <section className="py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">About The Firm</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mt-3 mb-6">
              Your Long-Term Business Advisor
            </h2>
            <p className="text-charcoal leading-relaxed mb-6">{FOUNDER.bio}</p>

            <div className="bg-surface rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-gold font-display font-bold text-2xl">
                  RS
                </div>
                <div>
                  <div className="font-display font-bold text-navy text-lg">{FOUNDER.name}</div>
                  <div className="text-sm text-charcoal">{FOUNDER.title}</div>
                  <div className="flex gap-2 mt-1">
                    {FOUNDER.qualifications.map((q) => (
                      <span key={q} className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded-full font-medium">{q}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Button to="/about">Learn More About Us</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-navy rounded-2xl p-6 text-white">
              <h3 className="font-display font-bold text-gold mb-2">Our Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{MISSION}</p>
            </div>
            <div className="bg-surface rounded-2xl p-6">
              <h3 className="font-display font-bold text-navy mb-2">Our Vision</h3>
              <p className="text-charcoal text-sm leading-relaxed">{VISION}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {CORE_VALUES.map((val) => (
                <div key={val.title} className="bg-white border border-gray-100 rounded-xl p-4">
                  <h4 className="font-semibold text-navy text-sm mb-1">{val.title}</h4>
                  <p className="text-xs text-charcoal">{val.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
