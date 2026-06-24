import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAV_LINKS, SITE } from '../../data/site';
import Button from '../shared/Button';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] lg:hidden"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-display font-bold text-navy">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-surface rounded-lg cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className="block px-4 py-3 text-navy font-medium hover:bg-surface rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t mt-4 space-y-3">
          <Button to="/contact" className="w-full" onClick={onClose}>
            Book Free Consultation
          </Button>
          <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="block text-center text-sm text-charcoal">
            {SITE.phone}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
