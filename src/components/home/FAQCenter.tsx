import SectionHeading from '../shared/SectionHeading';
import FAQSection from '../shared/FAQ';
import { FAQS, FAQ_CATEGORIES } from '../../data/faqs';

export default function FAQCenter() {
  return (
    <section className="py-20" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services, compliance requirements, and processes."
        />
        <FAQSection faqs={FAQS} categories={FAQ_CATEGORIES} />
      </div>
    </section>
  );
}
