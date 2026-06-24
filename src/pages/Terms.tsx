import SEO from '../components/shared/SEO';

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service | Shah & Associates" description="Terms of service for Shah & Associates website and services." />
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-display font-bold text-navy mb-6">Terms of Service</h1>
        <div className="prose text-charcoal space-y-4 text-sm leading-relaxed">
          <p>By accessing and using the Shah & Associates website, you agree to these terms of service.</p>
          <h2 className="text-lg font-semibold text-navy">Professional Services</h2>
          <p>Information on this website is for general guidance only and does not constitute professional tax, legal, or financial advice. Engage our services through formal engagement letters for specific advisory.</p>
          <h2 className="text-lg font-semibold text-navy">Intellectual Property</h2>
          <p>All content, branding, and materials on this website are the property of Shah & Associates and may not be reproduced without written permission.</p>
          <h2 className="text-lg font-semibold text-navy">Limitation of Liability</h2>
          <p>Shah & Associates shall not be liable for any damages arising from the use of information on this website. Professional liability is governed by engagement terms.</p>
          <h2 className="text-lg font-semibold text-navy">Governing Law</h2>
          <p>These terms are governed by the laws of India. Disputes shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.</p>
        </div>
      </div>
    </>
  );
}
