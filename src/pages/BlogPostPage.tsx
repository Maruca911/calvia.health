import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import { FALLBACK_BLOG_POSTS } from '../data/fallbackBlogPosts';
import { useSEO } from '../hooks/useSEO';
import type { BlogPost } from '../types';

type BlogPostDetails = Pick<
  BlogPost,
  | 'id'
  | 'slug'
  | 'title'
  | 'meta_description'
  | 'focus_keyword'
  | 'content'
  | 'featured_image_url'
  | 'featured_image_alt'
  | 'category'
  | 'read_time_minutes'
  | 'published_at'
>;

type RelatedPost = Pick<BlogPost, 'id' | 'slug' | 'title'>;

const FALLBACK_NOTICE =
  'Live article data is temporarily unavailable. Showing indexed fallback content.';

const toBlogPostDetails = (post: BlogPost): BlogPostDetails => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  meta_description: post.meta_description,
  focus_keyword: post.focus_keyword,
  content: post.content,
  featured_image_url: post.featured_image_url,
  featured_image_alt: post.featured_image_alt,
  category: post.category,
  read_time_minutes: post.read_time_minutes,
  published_at: post.published_at,
});

const getFallbackPost = (slug: string) => FALLBACK_BLOG_POSTS.find((post) => post.slug === slug) || null;

const getFallbackRelated = (post: BlogPostDetails): RelatedPost[] =>
  FALLBACK_BLOG_POSTS.filter((item) => item.category === post.category && item.slug !== post.slug)
    .slice(0, 3)
    .map((item) => ({ id: item.id, slug: item.slug, title: item.title }));

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostDetails | null>(null);
  const [related, setRelated] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState<string | null>(null);

  const blogPostingSchema = useMemo(
    () =>
      post
        ? {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.meta_description,
            image: post.featured_image_url || undefined,
            articleSection: post.category,
            datePublished: post.published_at,
            dateModified: post.published_at,
            mainEntityOfPage: `https://www.calvia.health/blog/${post.slug}`,
            publisher: {
              '@type': 'Organization',
              name: 'Calvia Health',
              url: 'https://www.calvia.health',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.calvia.health/favicon.svg',
              },
            },
          }
        : undefined,
    [post]
  );

  useSEO({
    title: post?.title || 'Loading...',
    description: post?.meta_description || '',
    canonical: post ? `https://www.calvia.health/blog/${post.slug}` : undefined,
    jsonLd: blogPostingSchema,
    image: post?.featured_image_url || undefined,
    ogType: 'article',
  });

  useEffect(() => {
    let ignore = false;

    window.scrollTo(0, 0);
    setLoading(true);
    setRelated([]);
    setNotice(null);

    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }

    if (!isSupabaseConfigured) {
      const fallbackPost = getFallbackPost(slug);
      const fallbackDetails = fallbackPost ? toBlogPostDetails(fallbackPost) : null;
      setPost(fallbackDetails);
      setRelated(fallbackDetails ? getFallbackRelated(fallbackDetails) : []);
      setNotice(fallbackDetails ? FALLBACK_NOTICE : null);
      setLoading(false);
      return;
    }

    supabase
      .from('blog_posts')
      .select('id,slug,title,meta_description,focus_keyword,content,featured_image_url,featured_image_alt,category,read_time_minutes,published_at')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle()
      .then(({ data, error: queryError }) => {
        if (ignore) return;

        if (queryError || !data) {
          if (queryError) {
            console.error('Blog post query error:', queryError.message);
          }
          const fallbackPost = getFallbackPost(slug);
          const fallbackDetails = fallbackPost ? toBlogPostDetails(fallbackPost) : null;
          setPost(fallbackDetails);
          setRelated(fallbackDetails ? getFallbackRelated(fallbackDetails) : []);
          setNotice(fallbackDetails ? FALLBACK_NOTICE : null);
          setLoading(false);
          return;
        }

        const postDetails = data as BlogPostDetails;
        setPost(postDetails);
        setLoading(false);

        supabase
          .from('blog_posts')
          .select('id,slug,title')
          .eq('published', true)
          .eq('category', data.category)
          .neq('slug', data.slug)
          .limit(3)
          .then(({ data: relatedData, error: relatedError }) => {
            if (ignore) return;
            if (relatedError) {
              console.error('Related post query error:', relatedError.message);
              setRelated(getFallbackRelated(postDetails));
              return;
            }
            setRelated((relatedData as RelatedPost[]) || []);
          });
      })
      .catch((queryError) => {
        if (ignore) return;
        if (queryError instanceof Error) {
          console.error('Blog post query error:', queryError.message);
        }
        const fallbackPost = getFallbackPost(slug);
        const fallbackDetails = fallbackPost ? toBlogPostDetails(fallbackPost) : null;
        setPost(fallbackDetails);
        setRelated(fallbackDetails ? getFallbackRelated(fallbackDetails) : []);
        setNotice(fallbackDetails ? FALLBACK_NOTICE : null);
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="w-8 h-8 border-2 border-sky-blue border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-dark-teal mb-4">Article Not Found</h1>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const shareUrl = `https://www.calvia.health/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-white pt-24">
      <article className="container-narrow section-padding !pt-4">
        {notice && (
          <div className="max-w-3xl mx-auto mb-8 bg-amber-50 border border-amber-200 text-amber-900 text-sm rounded-lg px-4 py-3">
            {notice}
          </div>
        )}

        <nav className="flex items-center gap-2 text-sm text-text-grey mb-8">
          <Link to="/" className="hover:text-dark-teal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-dark-teal transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-dark-teal truncate max-w-[200px]">{post.title}</span>
        </nav>

        <header className="max-w-3xl mx-auto mb-10">
          <span className="text-sm font-semibold text-sky-blue-dark uppercase tracking-wide">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-dark-teal mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-text-grey">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {post.read_time_minutes} min read
            </span>
            {post.published_at && (
              <span>
                {new Date(post.published_at).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            <button
              onClick={() => navigator.clipboard?.writeText(shareUrl)}
              className="flex items-center gap-1 hover:text-dark-teal transition-colors"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </header>

        <div className="max-w-3xl mx-auto mb-8">
          <img
            src={post.featured_image_url || 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200'}
            alt={post.featured_image_alt || post.title}
            className="w-full rounded-xl object-cover aspect-video"
            loading="lazy"
          />
        </div>

        <div
          className="max-w-3xl mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-dark-teal prose-a:text-sky-blue-dark prose-a:no-underline hover:prose-a:underline prose-strong:text-text-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="max-w-3xl mx-auto mt-12 p-6 bg-sky-blue/5 rounded-xl border border-sky-blue/20">
          <h3 className="font-heading font-bold text-dark-teal text-lg mb-2">
            Need help with {post.focus_keyword || 'health services'}?
          </h3>
          <p className="text-text-grey text-sm mb-4">
            Get matched to a Calvia health expert now -- it takes less than 2 minutes.
          </p>
          <Link to="/get-matched" className="btn-primary inline-block text-sm">
            Get Matched Now
          </Link>
        </div>

        {related.length > 0 && (
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-heading font-bold text-dark-teal mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  to={`/blog/${r.slug}`}
                  key={r.id}
                  className="group bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all"
                >
                  <h3 className="font-heading font-bold text-dark-teal text-sm mb-2 group-hover:text-dark-teal-light transition-colors line-clamp-2">
                    {r.title}
                  </h3>
                  <span className="text-xs text-text-grey flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto mt-12 flex justify-between">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm text-text-grey hover:text-dark-teal transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
        </div>
      </article>
    </div>
  );
}
