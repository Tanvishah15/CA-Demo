import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import { WORKFLOW_STEPS } from '../../data/services';

export default function HowWeWork() {
  return (
    <section className="py-20 bg-surface" id="how-we-work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="How We Work"
          subtitle="A proven consulting methodology that delivers results at every stage of your business journey."
        />

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 timeline-line -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`lg:flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`bg-white rounded-2xl border border-gray-100 p-6 shadow-sm inline-block max-w-md ${
                    i % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                  }`}>
                    <span className="text-gold font-bold text-sm">Step {step.step}</span>
                    <h3 className="font-display text-xl font-bold text-navy mt-1 mb-2">{step.title}</h3>
                    <p className="text-charcoal text-sm">{step.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex w-12 h-12 bg-gold rounded-full items-center justify-center text-navy font-bold text-lg shrink-0 relative z-10 shadow-lg shadow-gold/30">
                  {step.step}
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
