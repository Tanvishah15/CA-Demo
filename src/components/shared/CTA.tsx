import { motion } from 'framer-motion';
import Button from './Button';

interface CTAProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CTA({
  title = 'Ready to Grow Your Business Safely?',
  subtitle = 'Book a free consultation with our expert advisors and discover how we can help you navigate tax, compliance, and legal complexities.',
  dark = true,
}: CTAProps) {
  return (
    <section className={dark ? 'navy-gradient' : 'bg-surface'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${dark ? 'text-white' : 'text-navy'}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${dark ? 'text-gray-300' : 'text-charcoal'}`}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg">Book Free Consultation</Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className={dark ? 'border-white text-white hover:bg-white hover:text-navy' : ''}
            >
              Talk To An Expert
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
