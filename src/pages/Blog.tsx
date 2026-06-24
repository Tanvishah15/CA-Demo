import { useState } from 'react';
import SEO from '../components/shared/SEO';
import BlogCard from '../components/shared/BlogCard';
import CTA from '../components/shared/CTA';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogs';

export default function Blog() {
  const [category, setCategory] = useState('All');
  const filtered = category === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === category);

  return (
    <>
      <SEO
        title="Blog & Insights | Shah & Associates"
        description="Expert insights on GST, income tax, startup law, compliance, and business strategy from Shah & Associates."
      />

      <section className="hero-pattern py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Blog & Insights</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Expert knowledge on taxation, compliance, and business strategy.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {['All', ...BLOG_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  category === cat ? 'bg-navy text-white' : 'bg-surface text-charcoal hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
