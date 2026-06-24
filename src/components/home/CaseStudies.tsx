import { motion } from 'framer-motion';
import { ArrowRight, Clock, Target } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { CASE_STUDIES } from '../../data/caseStudies';

export default function CaseStudies() {
  return (
    <section className="py-20" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Proven Results"
          title="Case Studies"
          subtitle="Real outcomes for real businesses — see how we've helped clients achieve their goals."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all group"
            >
              <div className="h-2 bg-gradient-to-r from-gold to-gold-dark" />
              <div className="p-6">
                <span className="text-xs font-semibold text-gold uppercase tracking-wide">{study.industry}</span>
                <h3 className="font-display text-xl font-bold text-navy mt-2 mb-4">{study.title}</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-navy uppercase">Challenge</span>
                    <p className="text-sm text-charcoal mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-navy uppercase">Solution</span>
                    <p className="text-sm text-charcoal mt-1">{study.solution}</p>
                  </div>
                  <div className="bg-gold/5 border border-gold/20 rounded-lg p-3">
                    <span className="text-xs font-bold text-gold uppercase">Outcome</span>
                    <p className="text-sm text-navy font-semibold mt-1">{study.outcome}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-charcoal mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {study.timeline}</span>
                  <span className="flex items-center gap-1"><Target className="w-3.5 h-3.5" /> {study.impact}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {study.services.map((s) => (
                    <span key={s} className="text-[10px] bg-surface px-2 py-1 rounded-full text-charcoal">{s}</span>
                  ))}
                </div>

                <button className="flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all cursor-pointer">
                  Read Full Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
