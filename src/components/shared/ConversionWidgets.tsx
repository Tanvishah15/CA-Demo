import { MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE } from '../../data/site';
import { getWhatsAppUrl } from '../../utils';

export default function ConversionWidgets() {
  return (
    <>
      <Link
        to="/contact"
        className="fixed bottom-24 right-6 z-50 bg-gold text-navy px-5 py-3 rounded-full shadow-lg shadow-gold/30 font-semibold text-sm hover:bg-gold-light transition-all hover:scale-105 hidden md:flex items-center gap-2"
      >
        <Phone className="w-4 h-4" />
        Book Consultation
      </Link>

      <a
        href={getWhatsAppUrl('Hi, I would like to schedule a consultation with Shah & Associates.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <a
        href={`tel:${SITE.phone.replace(/\s/g, '')}`}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-navy text-white rounded-full shadow-lg flex items-center justify-center hover:bg-navy-light transition-all hover:scale-110 md:hidden"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}
