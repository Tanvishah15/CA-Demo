import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '../../data/blogs';
import { formatDate } from '../../utils';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="h-48 bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 right-4 w-32 h-32 border border-gold/30 rounded-full" />
          <div className="absolute bottom-4 left-4 w-20 h-20 border border-gold/20 rounded-full" />
        </div>
        <span className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-navy group-hover:text-gold-dark transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-charcoal text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs text-charcoal">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
