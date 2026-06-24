import { useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import SEO from '../components/shared/SEO';
import CTA from '../components/shared/CTA';
import Button from '../components/shared/Button';
import { SEO_PAGES } from '../data/seoPages';

export default function SEOLandingPage() {
  const { slug } = useParams();
  const page = SEO_PAGES.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-display font-bold text-navy">Page Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <SEO title={page.title} description={page.metaDescription} keywords={page.keywords} />

      <section className="hero-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{page.headline}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">{page.subheadline}</p>
          <Button to="/contact" size="lg">Book Free Consultation</Button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy mb-8 text-center">Why Choose Shah & Associates</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {page.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 bg-surface rounded-xl p-4">
                <Check className="w-5 h-5 text-gold shrink-0" />
                <span className="text-navy font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-charcoal mb-6">
              With 15+ years of experience and 500+ businesses served, Shah & Associates delivers
              enterprise-grade advisory with the personal attention your business deserves.
            </p>
            <Button to="/contact">Schedule a Free Consultation</Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
