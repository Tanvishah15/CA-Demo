import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';
import { SERVICES } from '../../data/services';

export default function Services() {
  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Advisory Ecosystem"
          subtitle="End-to-end tax, compliance, legal, and strategic advisory services designed for growing businesses."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group card-shine bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <service.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
              </div>

              <h3 className="font-display text-xl font-semibold text-navy mb-2">{service.title}</h3>
              <p className="text-charcoal text-sm leading-relaxed mb-4 flex-1">{service.description}</p>

              <ul className="space-y-1.5 mb-4">
                {service.deliverables.slice(0, 3).map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-charcoal">
                    <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                    {d}
                  </li>
                ))}
                {service.deliverables.length > 3 && (
                  <li className="text-xs text-gold font-medium">+{service.deliverables.length - 3} more</li>
                )}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-semibold text-navy">From {service.startingPrice}</span>
                <Link to="/services" className="flex items-center gap-1 text-sm font-medium text-gold hover:text-gold-dark transition-colors">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
