import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '../../data/faqs';

interface FAQProps {
  faqs: FAQ[];
  categories?: string[];
  showCategories?: boolean;
}

export default function FAQSection({ faqs, categories, showCategories = true }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState(categories?.[0] || 'All');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const allCategories = categories ? ['All', ...categories] : [];

  return (
    <div>
      {showCategories && categories && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-navy text-white'
                  : 'bg-surface-alt text-charcoal hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3 max-w-4xl mx-auto">
        {filtered.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-surface/50 transition-colors cursor-pointer"
            >
              <span className="font-semibold text-navy pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gold shrink-0 transition-transform ${
                  openId === faq.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-5 text-charcoal leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
