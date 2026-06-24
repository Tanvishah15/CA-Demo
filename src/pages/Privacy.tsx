import SEO from '../components/shared/SEO';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy | Shah & Associates" description="Privacy policy for Shah & Associates website and services." />
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-display font-bold text-navy mb-6">Privacy Policy</h1>
        <div className="prose text-charcoal space-y-4 text-sm leading-relaxed">
          <p>Shah & Associates ("we", "our", "us") is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
          <h2 className="text-lg font-semibold text-navy">Information We Collect</h2>
          <p>We collect information you provide through contact forms, consultation bookings, newsletter subscriptions, and resource downloads, including name, email, phone number, and business details.</p>
          <h2 className="text-lg font-semibold text-navy">How We Use Your Information</h2>
          <p>Your information is used to provide advisory services, respond to inquiries, send relevant updates, and improve our services. We do not sell your personal data to third parties.</p>
          <h2 className="text-lg font-semibold text-navy">Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>
          <h2 className="text-lg font-semibold text-navy">Contact</h2>
          <p>For privacy-related inquiries, contact us at contact@shahassociates.in.</p>
        </div>
      </div>
    </>
  );
}
