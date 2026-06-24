import { motion } from 'framer-motion';
import { Shield, Award } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { CREDENTIALS } from '../../data/services';

export default function Credentials() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Trust & Credentials"
          title="Recognized & Certified"
          subtitle="Our credentials and memberships reflect our commitment to the highest professional standards."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CREDENTIALS.map((cred, i) => (
            <motion.div
              key={cred}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 p-5 hover:border-gold/30 transition-colors"
            >
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                {i % 2 === 0 ? <Shield className="w-5 h-5 text-gold" /> : <Award className="w-5 h-5 text-gold" />}
              </div>
              <span className="font-medium text-navy text-sm">{cred}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
