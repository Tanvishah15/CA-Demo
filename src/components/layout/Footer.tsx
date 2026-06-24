import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Share2 } from 'lucide-react';
import { SITE, NAV_LINKS } from '../../data/site';
import { SERVICES } from '../../data/services';
import { INDUSTRIES } from '../../data/industries';
import { BLOG_POSTS } from '../../data/blogs';

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy font-display font-bold text-xl">S</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">Shah & Associates</div>
                <div className="text-[10px] tracking-widest uppercase text-gray-400">Chartered Accountants</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">{SITE.tagline}</p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold" /> {SITE.email}
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {SITE.address}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-gold transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              {INDUSTRIES.slice(0, 6).map((ind) => (
                <li key={ind.id}>
                  <Link to="/industries" className="hover:text-gold transition-colors">{ind.name}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display font-semibold text-white mb-4 mt-6">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources" className="hover:text-gold transition-colors">Tax Calculators</Link></li>
              <li><Link to="/resources" className="hover:text-gold transition-colors">Compliance Checklists</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog & Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.filter((l) => ['About', 'Careers', 'Contact'].includes(l.label)).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-gold transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-display font-semibold text-white mb-4 mt-6">Latest Insights</h4>
            <ul className="space-y-2 text-sm">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.slug}`} className="hover:text-gold transition-colors line-clamp-1">{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {['LinkedIn', 'X', 'Facebook', 'Instagram'].map((label) => (
              <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center hover:bg-gold hover:text-navy transition-all text-xs font-bold">
                {label === 'LinkedIn' ? <Share2 className="w-4 h-4" /> : label[0]}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Shah & Associates. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>

        <p className="text-[10px] text-gray-600 text-center mt-6 max-w-4xl mx-auto leading-relaxed">
          Disclaimer: Shah & Associates is an ICAI registered firm providing tax, compliance, and legal advisory services.
          Information on this website is for general guidance only and does not constitute professional advice.
          Please consult our experts for advice specific to your situation.
        </p>
      </div>
    </footer>
  );
}
