import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import BlogCard from '../shared/BlogCard';
import { BLOG_POSTS } from '../../data/blogs';

export default function BlogPreview() {
  const featured = BLOG_POSTS.filter((p) => p.featured);

  return (
    <section className="py-20 bg-surface" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Insights & Updates"
          title="Blog & Knowledge Center"
          subtitle="Expert insights on taxation, compliance, startup law, and business strategy."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featured.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-dark transition-colors">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
