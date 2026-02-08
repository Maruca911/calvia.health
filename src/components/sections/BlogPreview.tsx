import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Sparkles, Salad, Hotel, ShieldCheck } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const BLOG_CATEGORIES = [
  {
    id: 'medical',
    label: 'Medical',
    description: 'Dentists, eye care, snoring, pediatrics',
    icon: Stethoscope,
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-dark-teal/80 to-dark-teal',
  },
  {
    id: 'wellness',
    label: 'Wellness',
    description: 'Massage, fitness, personal training, retreats',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-sky-blue/80 to-sky-blue-dark',
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    description: 'Healthy dining, nutrition, natural products',
    icon: Salad,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-mint-dark/80 to-mint-dark',
  },
  {
    id: 'spa-hotels',
    label: 'Spas & Hotels',
    description: 'Luxury spas, boutique stays, thalassotherapy',
    icon: Hotel,
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-amber-700/80 to-amber-800',
  },
  {
    id: 'insurance',
    label: 'Insurance',
    description: 'Private, public, expat coverage guides',
    icon: ShieldCheck,
    image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-dark-teal-light/80 to-dark-teal',
  },
];

export default function BlogPreview() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const { ref, isVisible } = useIntersectionObserver(0.05);

  useEffect(() => {
    supabase
      .from('blog_posts')
      .select('category')
      .eq('published', true)
      .then(({ data }) => {
        if (!data) return;
        const grouped: Record<string, number> = {};
        (data as { category: string }[]).forEach((row) => {
          grouped[row.category] = (grouped[row.category] || 0) + 1;
        });
        setCounts(grouped);
      });
  }, []);

  return (
    <section id="blog" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-narrow">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-dark-teal/60 uppercase tracking-wider mb-3">Expert Guides</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-dark-teal mb-4">
            Health Insights from Calvia
          </h2>
          <p className="text-text-grey max-w-2xl mx-auto">
            In-depth articles to help you navigate health services, insurance, and wellness in Mallorca.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {BLOG_CATEGORIES.map((cat, i) => {
            const articleCount = counts[cat.id] || 0;
            return (
              <Link
                to={`/blog?cat=${cat.id}`}
                key={cat.id}
                className={`group relative rounded-2xl overflow-hidden h-64 sm:h-72 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${150 + i * 100}ms` : '0ms' }}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-80`} />
                <div className="relative h-full flex flex-col justify-end p-5">
                  <cat.icon className="w-7 h-7 text-white/80 mb-2" />
                  <h3 className="font-heading font-bold text-white text-lg mb-1">{cat.label}</h3>
                  <p className="text-white/70 text-xs leading-relaxed mb-2">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-xs font-medium">
                      {articleCount} {articleCount === 1 ? 'article' : 'articles'}
                    </span>
                    <span className="text-white text-xs font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/blog" className="btn-secondary inline-block">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
