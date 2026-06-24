import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Button from '../shared/Button';
import Stats from '../shared/Stats';
import { TRUST_METRICS, TRUST_LOGOS } from '../../data/site';

export default function Hero() {
  return (
    <section className="relative hero-pattern overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 border border-gold/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">ICAI Registered Firm Since 2010</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Expert Tax, Compliance &{' '}
              <span className="text-gold">Legal Solutions</span>{' '}
              For Growing Businesses
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Helping startups, SMEs, and enterprises navigate taxation, compliance, legal complexities, and strategic business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button to="/contact" size="lg">Book Free Consultation</Button>
              <Button to="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-navy">
                <Play className="w-4 h-4" /> Talk To An Expert
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {TRUST_LOGOS.map((logo) => (
                <div key={logo.name} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                  <div className="w-8 h-8 bg-gold/20 rounded flex items-center justify-center text-gold text-xs font-bold">
                    {logo.abbr}
                  </div>
                  <span className="text-white text-sm font-medium">{logo.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-light to-navy relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                      <span className="text-4xl font-display font-bold text-gold">S</span>
                    </div>
                    <p className="text-white font-display text-2xl font-semibold mb-2">Strategic Advisory</p>
                    <p className="text-gray-400">Boardroom-level expertise for your business</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy to-transparent" />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-navy">₹5 Cr Seed Round</div>
                <div className="text-xs text-charcoal">Raised for SaaS Client</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <Stats stats={TRUST_METRICS} dark />
        </div>
      </div>
    </section>
  );
}
