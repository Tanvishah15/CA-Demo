import { useParams, Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
import CTA from '../components/shared/CTA';
import { BLOG_POSTS } from '../data/blogs';
import { formatDate } from '../utils';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-display font-bold text-navy mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-gold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <SEO title={`${post.title} | Shah & Associates`} description={post.excerpt} />

      <section className="hero-pattern py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-wide">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mt-3 mb-4">{post.title}</h1>
          <p className="text-gray-400 text-sm">{formatDate(post.date)} · {post.readTime} read</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-lg text-charcoal leading-relaxed mb-6">{post.excerpt}</p>
        <div className="prose text-charcoal leading-relaxed space-y-4">
          <p>
            At Shah & Associates, we regularly advise clients on matters related to {post.category.toLowerCase()}.
            This article provides a comprehensive overview of the key considerations, recent regulatory changes,
            and practical steps businesses should take to stay compliant and optimize their outcomes.
          </p>
          <p>
            Whether you're a startup founder navigating compliance for the first time or an established business
            looking to optimize your tax position, understanding these principles is essential for sustainable growth.
            Our team of chartered accountants and legal advisors is available for personalized consultation on any
            of the topics discussed here.
          </p>
          <p>
            For specific advice tailored to your business situation, we recommend scheduling a consultation with
            our experts. Every business is unique, and the strategies that work for one may not be optimal for another.
          </p>
        </div>
        <div className="mt-8 pt-6 border-t">
          <Link to="/blog" className="text-gold font-medium hover:underline">← Back to all articles</Link>
        </div>
      </article>

      <CTA />
    </>
  );
}
