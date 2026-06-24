import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import Stats from '../shared/Stats';
import { TESTIMONIALS, TESTIMONIAL_STATS } from '../../data/testimonials';

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 navy-gradient" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Client Success Stories"
          title="What Our Clients Say"
          subtitle="Trusted by founders, SMEs, and corporate leaders across India."
          light
        />

        <div className="relative mb-16">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 h-full">
                    <Quote className="w-8 h-8 text-gold/40 mb-4" />
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.review}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{t.name}</div>
                        <div className="text-gray-400 text-xs">{t.role}, {t.company}</div>
                        <div className="flex items-center gap-0.5 mt-1">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="inline-block mt-3 text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {t.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all cursor-pointer hidden md:flex">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-navy transition-all cursor-pointer hidden md:flex">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <Stats stats={TESTIMONIAL_STATS} dark />
        </motion.div>
      </div>
    </section>
  );
}
