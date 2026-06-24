import SEO from '../components/shared/SEO';
import ResourceCenter from '../components/home/ResourceCenter';
import CTA from '../components/shared/CTA';

export default function Resources() {
  return (
    <>
      <SEO
        title="Resources | Shah & Associates"
        description="Free tax calculators, compliance checklists, business formation guides, and startup legal toolkits from Shah & Associates."
      />

      <section className="hero-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Resource Center</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Free tools, guides, and checklists for informed business decisions.
          </p>
        </div>
      </section>

      <ResourceCenter />
      <CTA />
    </>
  );
}
