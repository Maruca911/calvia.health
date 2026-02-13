import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Clock, ArrowRight, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useSEO } from '../hooks/useSEO';
import type { BlogPost } from '../types';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'medical', label: 'Medical' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'insurance', label: 'Insurance' },
  { id: 'spa-hotels', label: 'Spas & Hotels' },
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('cat') || 'all';

  useSEO({
    title: 'Blog - Expert Health Guides for Mallorca',
    description: 'Read expert guides on health services in Calvia and Mallorca. Dentists, spas, wellness retreats, insurance, and more.',
    canonical: 'https://www.calvia.health/blog',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (activeCategory !== 'all') {
      query = query.eq('category', activeCategory);
    }

    query.then(({ data, error: queryError }) => {
      if (queryError) {
        setError('Unable to load articles. Please try again later.');
        console.error('Blog query error:', queryError.message);
      } else {
        setError(null);
      }
      setPosts(data || []);
      setLoading(false);
    });
  }, [activeCategory]);

  const setCategory = (cat: string) => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ cat });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container-narrow section-padding !pt-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-dark-teal mb-4">
            Calvia Health Blog
          </h1>
          <p className="text-text-grey max-w-2xl mx-auto text-lg">
            Expert guides, tips, and insights for navigating health services in Mallorca.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-dark-teal text-white shadow-md'
                  : 'bg-white text-text-grey hover:text-dark-teal hover:bg-sky-blue/10 border border-subtle-grey/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-2 border-sky-blue border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">{error}</p>
            <button onClick={() => window.location.reload()} className="btn-secondary text-sm">
              Try Again
            </button>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-subtle-grey mx-auto mb-4" />
            <p className="text-text-grey">No articles found in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.id}
                className="group bg-white rounded-xl overflow-hidden border border-subtle-grey/20 hover:shadow-lg hover:shadow-sky-blue/10 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-sky-blue/20 to-mint/20">
                  <img
                    src={post.featured_image_url || 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600'}
                    alt={post.featured_image_alt || post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-sky-blue-dark uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h2 className="font-heading font-bold text-dark-teal text-lg mt-1 mb-2 group-hover:text-dark-teal-light transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-grey line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-grey">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.read_time_minutes} min read
                    </span>
                    <span className="text-dark-teal font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
