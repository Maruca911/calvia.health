import type { BlogPost } from '../types';

const DEFAULT_IMAGE =
  'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200';
const DEFAULT_DATE = '2026-02-13T00:00:00.000Z';

type FallbackSeed = Pick<
  BlogPost,
  'slug' | 'title' | 'meta_description' | 'focus_keyword' | 'excerpt' | 'category' | 'read_time_minutes'
> & {
  tags?: string[];
  featured_image_url?: string;
};

const SEED_POSTS: FallbackSeed[] = [
  {
    slug: 'best-dentist-mallorca',
    title: 'Best Dentist in Mallorca for Expats',
    meta_description:
      'How to compare dental clinics in Mallorca, estimate treatment costs, and find English-speaking dentists in Calvia.',
    focus_keyword: 'best dentist in Mallorca for expats',
    excerpt:
      'Compare clinics, qualifications, and treatment pricing for dental care in Mallorca with practical guidance for expats.',
    category: 'medical',
    read_time_minutes: 18,
  },
  {
    slug: 'snoring-treatment-mallorca',
    title: 'Snoring Treatment in Mallorca',
    meta_description:
      'A practical guide to snoring and sleep apnea treatment options in Mallorca, including ENT and sleep clinics.',
    focus_keyword: 'snoring treatment mallorca',
    excerpt:
      'Understand common snoring causes, specialist pathways, and what to expect from assessments in Mallorca.',
    category: 'medical',
    read_time_minutes: 14,
  },
  {
    slug: 'eye-surgery-mallorca',
    title: 'Eye Surgery in Mallorca: Lasik and Beyond',
    meta_description:
      'What to know before Lasik, cataract surgery, or vision correction treatment in Mallorca.',
    focus_keyword: 'eye surgery mallorca',
    excerpt:
      'Compare eye care providers, treatment options, and recovery expectations for common vision procedures.',
    category: 'medical',
    read_time_minutes: 15,
  },
  {
    slug: 'pediatrician-mallorca',
    title: 'Finding a Pediatrician in Mallorca',
    meta_description:
      'How families in Calvia can find trusted pediatric care, urgent support, and multilingual clinics.',
    focus_keyword: 'pediatrician mallorca',
    excerpt:
      'A family-focused guide to pediatric services, appointment planning, and urgent care options in Mallorca.',
    category: 'medical',
    read_time_minutes: 12,
  },
  {
    slug: 'emergency-medical-services-calvia',
    title: 'Emergency Medical Services in Calvia',
    meta_description:
      'Emergency numbers, response expectations, and hospital options for urgent care in Calvia and Palma.',
    focus_keyword: 'emergency medical services calvia',
    excerpt:
      'Know who to call, where to go, and what details to provide in a medical emergency in Calvia.',
    category: 'medical',
    read_time_minutes: 11,
  },
  {
    slug: 'best-massage-therapists-calvia',
    title: 'Best Massage Therapists in Calvia',
    meta_description:
      'How to choose massage therapists in Calvia by treatment goals, specialization, and clinic quality.',
    focus_keyword: 'best massage therapists calvia',
    excerpt:
      'Find sports, therapeutic, and relaxation massage options with tips on provider quality and session planning.',
    category: 'wellness',
    read_time_minutes: 10,
  },
  {
    slug: 'personal-trainers-calvia-mallorca',
    title: 'Personal Trainers in Calvia, Mallorca',
    meta_description:
      'How to evaluate personal trainers in Calvia for weight loss, performance, and rehabilitation goals.',
    focus_keyword: 'personal trainers calvia mallorca',
    excerpt:
      'Compare coaching styles, certifications, and pricing structures for personal training in Calvia.',
    category: 'wellness',
    read_time_minutes: 10,
  },
  {
    slug: 'luxury-wellness-retreats-mallorca',
    title: 'Luxury Wellness Retreats in Mallorca',
    meta_description:
      'A guide to premium wellness retreat options near Calvia, including spa, yoga, and recovery programs.',
    focus_keyword: 'luxury wellness retreats mallorca',
    excerpt:
      'Explore retreat formats, cost ranges, and planning tips for restorative wellness stays in Mallorca.',
    category: 'spa-hotels',
    read_time_minutes: 12,
  },
  {
    slug: 'diet-nutritionist-mallorca',
    title: 'Diet and Nutritionist Services in Mallorca',
    meta_description:
      'How to find qualified nutrition support in Mallorca for weight goals, metabolic health, and lifestyle changes.',
    focus_keyword: 'diet nutritionist mallorca',
    excerpt:
      'Practical steps for choosing a nutrition professional and building a realistic plan for long-term outcomes.',
    category: 'lifestyle',
    read_time_minutes: 9,
  },
  {
    slug: 'natural-health-shops-mallorca',
    title: 'Natural Health Shops in Mallorca',
    meta_description:
      'Where to find supplements and natural health products in Mallorca, and how to verify quality.',
    focus_keyword: 'natural health shops mallorca',
    excerpt:
      'A shopper-friendly guide to natural product stores, label reading, and safe supplement selection.',
    category: 'lifestyle',
    read_time_minutes: 8,
  },
  {
    slug: 'healthy-restaurants-calvia',
    title: 'Healthy Restaurants in Calvia',
    meta_description:
      'A guide to healthy dining in Calvia, including nutrition-conscious menus and family-friendly options.',
    focus_keyword: 'healthy restaurants calvia',
    excerpt:
      'Discover healthy dining options and menu strategies for balanced eating across Calvia.',
    category: 'lifestyle',
    read_time_minutes: 8,
  },
  {
    slug: 'health-insurance-mallorca',
    title: 'Health Insurance in Mallorca',
    meta_description:
      'How health insurance works in Mallorca, including private plan options and expat decision criteria.',
    focus_keyword: 'health insurance mallorca',
    excerpt:
      'Understand policy types, network access, and common tradeoffs when choosing health insurance in Spain.',
    category: 'insurance',
    read_time_minutes: 13,
  },
  {
    slug: 'private-vs-public-health-insurance-spain',
    title: 'Private vs Public Health Insurance in Spain',
    meta_description:
      'A side-by-side comparison of private and public healthcare access in Spain for residents and expats.',
    focus_keyword: 'private vs public health insurance spain',
    excerpt:
      'Compare waiting times, specialist access, language support, and cost structures across systems.',
    category: 'insurance',
    read_time_minutes: 11,
  },
  {
    slug: 'health-insurance-over-65-mallorca',
    title: 'Health Insurance Over 65 in Mallorca',
    meta_description:
      'Coverage options, eligibility realities, and pricing expectations for over-65 insurance in Mallorca.',
    focus_keyword: 'health insurance over 65 mallorca',
    excerpt:
      'A practical planning guide for older residents reviewing private insurance options in Mallorca.',
    category: 'insurance',
    read_time_minutes: 10,
  },
  {
    slug: 'top-spas-calvia',
    title: 'Top Spas in Calvia',
    meta_description:
      'How to choose a high-quality spa in Calvia for recovery, stress reduction, and wellness routines.',
    focus_keyword: 'top spas calvia',
    excerpt:
      'Compare spa formats, treatment menus, and what to prioritize when booking wellness sessions.',
    category: 'spa-hotels',
    read_time_minutes: 9,
  },
  {
    slug: 'thalassotherapy-mallorca',
    title: 'Thalassotherapy in Mallorca',
    meta_description:
      'An introduction to thalassotherapy benefits, treatment types, and where to find it in Mallorca.',
    focus_keyword: 'thalassotherapy mallorca',
    excerpt:
      'Learn what thalassotherapy includes, who it suits best, and how to choose reputable centers.',
    category: 'spa-hotels',
    read_time_minutes: 9,
  },
  {
    slug: 'top-boutique-hotels-mallorca',
    title: 'Top Boutique Hotels in Mallorca for Wellness',
    meta_description:
      'A guide to boutique hotels in Mallorca with strong wellness offerings and health-focused experiences.',
    focus_keyword: 'top boutique hotels mallorca',
    excerpt:
      'Compare wellness-friendly boutique stays and plan a healthier, more restorative visit to Mallorca.',
    category: 'spa-hotels',
    read_time_minutes: 10,
  },
];

const createContent = (title: string, excerpt: string) =>
  `<h2>${title}</h2>
<p>${excerpt}</p>
<p>This article is temporarily served from an indexed fallback dataset to keep the knowledge base available. For the latest live version, please reload later or contact Calvia Health.</p>
<p>Calvia Health connects residents and visitors with trusted providers in Calvia, Mallorca. This page is informational only and does not replace medical advice.</p>`;

export const FALLBACK_BLOG_POSTS: BlogPost[] = SEED_POSTS.map((post) => ({
  id: `fallback-${post.slug}`,
  slug: post.slug,
  title: post.title,
  meta_description: post.meta_description,
  focus_keyword: post.focus_keyword,
  excerpt: post.excerpt,
  content: createContent(post.title, post.excerpt),
  featured_image_url: post.featured_image_url || DEFAULT_IMAGE,
  featured_image_alt: post.title,
  category: post.category,
  tags: post.tags || [post.category, 'calvia', 'mallorca'],
  read_time_minutes: post.read_time_minutes,
  published: true,
  published_at: DEFAULT_DATE,
  created_at: DEFAULT_DATE,
}));
