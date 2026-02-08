import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useSEO } from '../hooks/useSEO';
import type { BlogPost } from '../types';

export default function ThankYouPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useSEO({
    title: 'Thank You',
    description: 'Your health expert match is underway.',
    noindex: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })
      .limit(3)
      .then(({ data }) => {
        if (data) setPosts(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container-narrow section-padding !pt-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="w-20 h-20 bg-mint/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-dark-teal" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-dark-teal mb-4">
            Thank You -- Your Expert Match is Underway!
          </h1>

          <div className="bg-white rounded-xl p-8 border border-subtle-grey/20 shadow-sm text-left mt-8">
            <h2 className="font-heading font-bold text-dark-teal text-lg mb-5">
              What happens next:
            </h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0 text-sm font-bold text-dark-teal">
                  1
                </span>
                <p className="text-text-grey pt-1">
                  We review your details and match with 2-3 experts within 24 hours.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0 text-sm font-bold text-dark-teal">
                  2
                </span>
                <p className="text-text-grey pt-1">
                  You will receive personalized introductions via email or phone.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-sky-blue/10 flex items-center justify-center flex-shrink-0 text-sm font-bold text-dark-teal">
                  3
                </span>
                <p className="text-text-grey pt-1">
                  If urgent, connect now via WhatsApp for immediate assistance.
                </p>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://wa.me/?text=Hi%2C%20I%20submitted%20a%20health%20lead%20on%20Calvia%20Health"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </a>
            <Link to="/" className="btn-secondary w-full sm:w-auto text-center">
              Back to Home
            </Link>
          </div>
        </div>

        {posts.length > 0 && (
          <div>
            <h2 className="text-2xl font-heading font-bold text-dark-teal text-center mb-8">
              Explore Our Blog While You Wait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.id}
                  className="group bg-white rounded-xl overflow-hidden border border-subtle-grey/20 hover:shadow-lg transition-all"
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
                    <h3 className="font-heading font-bold text-dark-teal mb-2 group-hover:text-dark-teal-light transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-text-grey">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.read_time_minutes} min
                      </span>
                      <span className="text-dark-teal font-medium inline-flex items-center gap-1">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
