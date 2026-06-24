import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, Mail, Calendar } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { SITE, NAV_LINKS, UTILITY_ITEMS } from '../../data/site';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import Button from '../shared/Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="bg-navy-dark text-gray-300 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {UTILITY_ITEMS.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-gold rounded-full" />
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="w-3 h-3" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail className="w-3 h-3" /> {SITE.email}
            </a>
            <Link to="/contact" className="flex items-center gap-1.5 text-gold hover:text-gold-light transition-colors font-medium">
              <Calendar className="w-3 h-3" /> Schedule Consultation
            </Link>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors">
                <span className="text-gold group-hover:text-navy font-display font-bold text-xl transition-colors">S</span>
              </div>
              <div>
                <div className="font-display font-bold text-navy text-lg leading-tight">Shah & Associates</div>
                <div className="text-[10px] text-charcoal tracking-widest uppercase hidden sm:block">Chartered Accountants</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium text-charcoal hover:text-navy hover:bg-surface rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button to="/contact" size="sm" className="hidden sm:inline-flex">
                Book Free Consultation
              </Button>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-navy hover:bg-surface rounded-lg cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
