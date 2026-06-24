import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Industries from '../pages/Industries';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Contact from '../pages/Contact';
import Careers from '../pages/Careers';
import Resources from '../pages/Resources';
import SEOLandingPage from '../pages/SEOLandingPage';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import { SEO_PAGES } from '../data/seoPages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      {SEO_PAGES.map((page) => (
        <Route key={page.slug} path={`/${page.slug}`} element={<SEOLandingPage />} />
      ))}
    </Routes>
  );
}
