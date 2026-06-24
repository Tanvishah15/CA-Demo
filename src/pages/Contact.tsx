import { Phone, Mail, MapPin, Clock, Car, AlertCircle } from 'lucide-react';
import SEO from '../components/shared/SEO';
import ConsultationForm from '../components/shared/ConsultationForm';
import { SITE } from '../data/site';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Shah & Associates"
        description="Get in touch with Shah & Associates. Schedule a free consultation, visit our Mumbai office, or call our compliance helpline."
      />

      <section className="hero-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to discuss your business needs? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-surface rounded-2xl p-6">
                <h3 className="font-display font-bold text-navy text-lg mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-charcoal hover:text-gold transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                    <div>
                      <div className="text-sm font-medium text-navy">Phone</div>
                      {SITE.phone}
                    </div>
                  </a>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-charcoal hover:text-gold transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                    <div>
                      <div className="text-sm font-medium text-navy">Email</div>
                      {SITE.email}
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-charcoal">
                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy">Office Address</div>
                      {SITE.address}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal">
                    <Clock className="w-5 h-5 text-gold" />
                    <div>
                      <div className="text-sm font-medium text-navy">Business Hours</div>
                      {SITE.hours}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal">
                    <Car className="w-5 h-5 text-gold" />
                    <div>
                      <div className="text-sm font-medium text-navy">Parking</div>
                      {SITE.parking}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <h4 className="font-semibold text-red-800">Emergency Compliance Helpline</h4>
                </div>
                <p className="text-sm text-red-700 mb-2">Urgent GST notice or compliance deadline?</p>
                <a href={`tel:${SITE.helpline.replace(/\s/g, '')}`} className="text-red-800 font-bold hover:underline">
                  {SITE.helpline}
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-200 h-64">
                <iframe
                  title="Office Location"
                  src="https://maps.google.com/maps?q=Bandra+Kurla+Complex+Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
