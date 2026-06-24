import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import SectionHeading from '../components/shared/SectionHeading';
import CTA from '../components/shared/CTA';
import Team from '../components/home/Team';
import Credentials from '../components/home/Credentials';
import { FOUNDER, MISSION, VISION, CORE_VALUES } from '../data/site';
import { WORKFLOW_STEPS } from '../data/services';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Shah & Associates"
        description="Learn about Shah & Associates — ICAI registered chartered accountants with 15+ years of experience serving 500+ businesses across India."
      />

      <section className="hero-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            About Shah & Associates
          </motion.h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We help businesses grow safely, legally, and profitably.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                label="Our Story"
                title="A Firm Built on Trust & Excellence"
                subtitle="Founded in 2010, Shah & Associates has grown from a boutique CA practice to a full-service advisory firm trusted by 500+ businesses."
                centered={false}
              />
              <p className="text-charcoal leading-relaxed mb-4">
                We believe every business deserves access to enterprise-grade advisory — not just large corporations.
                Our team combines Big 4 consulting methodology with the personal attention that growing businesses need.
              </p>
              <p className="text-charcoal leading-relaxed">
                From first-time founders incorporating their startup to established enterprises optimizing tax structures,
                we serve as long-term partners in our clients' growth journeys.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center text-gold font-display font-bold text-3xl">
                  RS
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy">{FOUNDER.name}</h3>
                  <p className="text-gold font-medium">{FOUNDER.title}</p>
                  <p className="text-sm text-charcoal mt-1">{FOUNDER.experience} Experience</p>
                </div>
              </div>
              <p className="text-charcoal text-sm leading-relaxed mb-4">{FOUNDER.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {FOUNDER.qualifications.map((q) => (
                  <span key={q} className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">{q}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {FOUNDER.specializations.map((s) => (
                  <span key={s} className="text-xs bg-navy/5 text-navy px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-display text-xl font-bold text-gold mb-3">Mission</h3>
              <p className="text-charcoal text-sm leading-relaxed">{MISSION}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-display text-xl font-bold text-gold mb-3">Vision</h3>
              <p className="text-charcoal text-sm leading-relaxed">{VISION}</p>
            </div>
            <div className="bg-navy rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-gold mb-3">Core Values</h3>
              <ul className="space-y-3">
                {CORE_VALUES.map((v) => (
                  <li key={v.title}>
                    <span className="text-white font-semibold text-sm">{v.title}</span>
                    <p className="text-gray-400 text-xs">{v.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Approach" title="How We Deliver Excellence" />
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.step} className="text-center p-4">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-navy font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <h4 className="font-semibold text-navy text-sm mb-1">{step.title}</h4>
                <p className="text-xs text-charcoal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />
      <Credentials />
      <CTA />
    </>
  );
}
