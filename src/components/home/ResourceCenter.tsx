import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { RESOURCES } from '../../data/resources';

export default function ResourceCenter() {
  const [email, setEmail] = useState('');
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const handleDownload = (id: string) => {
    setSelectedResource(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedResource(null);
    setEmail('');
    alert('Download link sent to your email!');
  };

  return (
    <section className="py-20" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Resource Center"
          title="Knowledge Hub"
          subtitle="Free tools, guides, and checklists to help you stay compliant and make informed decisions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((resource, i) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                <resource.icon className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
              </div>
              <span className="text-[10px] font-semibold text-gold uppercase tracking-wide">{resource.type}</span>
              <h3 className="font-display text-lg font-semibold text-navy mt-1 mb-2">{resource.title}</h3>
              <p className="text-sm text-charcoal mb-4">{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-charcoal">{resource.downloads} downloads</span>
                <button
                  onClick={() => handleDownload(resource.id)}
                  className="flex items-center gap-1 text-sm font-medium text-gold hover:text-gold-dark transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelectedResource(null)}>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
            >
              <h3 className="font-display text-xl font-bold text-navy mb-2">Download Resource</h3>
              <p className="text-sm text-charcoal mb-4">Enter your email to receive the download link.</p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-gold outline-none"
                  />
                </div>
                <button type="submit" className="w-full bg-gold text-navy font-semibold py-3 rounded-lg hover:bg-gold-light transition-colors cursor-pointer">
                  Get Download Link
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
