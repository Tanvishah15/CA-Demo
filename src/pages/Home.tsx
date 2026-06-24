import SEO from '../components/shared/SEO';
import Hero from '../components/home/Hero';
import TrustSection from '../components/home/TrustSection';
import Services from '../components/home/Services';
import Industries from '../components/home/Industries';
import CaseStudies from '../components/home/CaseStudies';
import Testimonials from '../components/home/Testimonials';
import HowWeWork from '../components/home/HowWeWork';
import AboutPreview from '../components/home/AboutPreview';
import Team from '../components/home/Team';
import ResourceCenter from '../components/home/ResourceCenter';
import BlogPreview from '../components/home/BlogPreview';
import FAQCenter from '../components/home/FAQCenter';
import Credentials from '../components/home/Credentials';
import ConsultationSection from '../components/home/ConsultationSection';
import CTA from '../components/shared/CTA';

export default function Home() {
  return (
    <>
      <SEO
        title="Shah & Associates | Chartered Accountants & Tax Advisory"
        description="Expert tax, compliance & legal solutions for startups, SMEs, and enterprises. ICAI registered firm with 15+ years experience."
        keywords={['chartered accountant', 'tax advisory', 'GST consultant', 'startup compliance', 'company registration']}
      />
      <Hero />
      <TrustSection />
      <Services />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <HowWeWork />
      <AboutPreview />
      <Team />
      <ResourceCenter />
      <BlogPreview />
      <FAQCenter />
      <Credentials />
      <ConsultationSection />
      <CTA />
    </>
  );
}
