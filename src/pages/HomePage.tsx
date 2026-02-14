import { useMemo } from 'react';
import { useSEO } from '../hooks/useSEO';
import { HOMEPAGE_FAQ_DATA } from '../data/faqData';
import Hero from '../components/sections/Hero';
import TrustStrip from '../components/sections/TrustStrip';
import HowItWorks from '../components/sections/HowItWorks';
import ServiceShowcase from '../components/sections/ServiceShowcase';
import LifestyleBand from '../components/sections/LifestyleBand';
import BlogPreview from '../components/sections/BlogPreview';
import FAQSection from '../components/sections/FAQSection';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage() {
  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HOMEPAGE_FAQ_DATA.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }),
    []
  );

  useSEO({
    title: 'Trusted Health Services in Calvia, Mallorca',
    description:
      'Find top health services in Calvia, Mallorca. Immediate expert matches for snoring, eyes, dentistry, pediatric care, spas, fitness, and more.',
    canonical: 'https://calvia.health/',
    jsonLd: faqSchema,
  });

  return (
    <>
      <Hero />
      <div id="trust">
        <TrustStrip />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <ServiceShowcase />
      <LifestyleBand />
      <BlogPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
