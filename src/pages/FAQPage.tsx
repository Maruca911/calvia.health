import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { FAQ_DATA, FAQ_CATEGORIES } from '../data/faqData';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const faqSchema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_DATA.map((item) => ({
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
    title: 'FAQ - Health in Calvia & Mallorca Guide for Tourists and Residents (2026)',
    description:
      'Comprehensive FAQ covering vaccines, emergencies, doctors, insurance, allergies, wellness, and safety tips for tourists and residents in Calvia and Mallorca. Updated for 2026.',
    canonical: 'https://www.calvia.health/faq',
    jsonLd: faqSchema,
  });

  const filteredFAQs = useMemo(() => {
    let items = FAQ_DATA;
    if (activeCategory) {
      items = items.filter((item) => item.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );
    }
    return items;
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    FAQ_DATA.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-gradient-to-b from-dark-teal to-dark-teal-light text-white py-16 sm:py-20">
        <div className="container-narrow section-padding !py-0">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
            Health in Calvia & Mallorca
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mb-2">
            Essential guide for tourists and residents -- {FAQ_DATA.length} questions answered with the latest 2026 guidelines.
          </p>
          <p className="text-sm text-white/60 max-w-3xl">
            Based on guidance from the CDC, NHS, ECDC, and Spanish health authorities. Always consult a healthcare professional for personalised advice.
          </p>
        </div>
      </section>

      <div className="container-narrow section-padding !py-8 lg:!py-12">
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-grey" />
            <input
              type="text"
              placeholder="Search questions (e.g. vaccine, emergency, insurance...)"
              value={searchQuery}
              onChange={(e) => {
                const nextQuery = e.target.value;
                setSearchQuery(nextQuery);
                if (nextQuery.trim()) {
                  setSearchParams({ q: nextQuery });
                } else {
                  setSearchParams({});
                }
                setOpenIndex(null);
              }}
              className="w-full pl-12 pr-4 py-3 border border-subtle-grey/40 rounded-xl text-text-dark placeholder:text-text-grey/60 focus:outline-none focus:ring-2 focus:ring-dark-teal/30 focus:border-dark-teal transition-all"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => {
              setActiveCategory(null);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !activeCategory
                ? 'bg-dark-teal text-white'
                : 'bg-gray-100 text-text-grey hover:bg-gray-200'
            }`}
          >
            All ({FAQ_DATA.length})
          </button>
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(activeCategory === cat ? null : cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-dark-teal text-white'
                  : 'bg-gray-100 text-text-grey hover:bg-gray-200'
              }`}
            >
              {cat} ({categoryCounts[cat] || 0})
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-grey text-lg">No questions match your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSearchParams({});
                  setActiveCategory(null);
                }}
                className="mt-4 text-dark-teal font-medium hover:text-dark-teal-light transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

          {filteredFAQs.map((item, i) => {
            const isOpen = openIndex === i;
            const globalIndex = FAQ_DATA.indexOf(item);
            return (
              <div
                key={globalIndex}
                className="border-b border-subtle-grey/20"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 min-w-0">
                    <span className="font-heading font-semibold text-dark-teal group-hover:text-dark-teal-light transition-colors text-sm sm:text-base leading-snug block">
                      {item.question}
                    </span>
                    <span className="text-xs text-text-grey/60 mt-1 block">{item.category}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-dark-teal/50 transition-transform duration-300 mt-0.5 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? 'max-h-[800px] opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-text-grey text-sm leading-relaxed pr-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-12 p-6 bg-sky-blue/5 rounded-xl border border-sky-blue/20">
          <h3 className="font-heading font-bold text-dark-teal text-lg mb-2">
            Need personalised health advice for Calvia?
          </h3>
          <p className="text-text-grey text-sm mb-4">
            Get matched to a local health expert now -- it takes less than 2 minutes and is completely free.
          </p>
          <Link to="/get-matched" className="btn-primary inline-flex items-center gap-2 text-sm">
            Get Matched Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-xl border border-subtle-grey/20">
          <h3 className="font-heading font-bold text-dark-teal text-base mb-3">
            Legal Disclaimer
          </h3>
          <p className="text-xs text-text-grey leading-relaxed">
            The information provided on this page is for general informational and educational purposes only. It does not constitute medical advice, diagnosis, or treatment. Calvia Health is not a medical provider -- we are an intermediary service connecting users with qualified health professionals. The content is based on publicly available guidelines from the CDC, NHS, ECDC, and Spanish health authorities current as of February 2026, but health guidelines change frequently. Always consult a qualified healthcare professional before making decisions about vaccinations, treatments, medications, or any health concern. In a medical emergency, call 112 immediately. Individual health circumstances vary, and what is appropriate for one person may not be suitable for another. Calvia Health accepts no liability for actions taken based on the information provided here. Travel health requirements and regulations are subject to change without notice -- verify current requirements with official sources before travelling.
          </p>
          <p className="text-xs text-text-grey mt-2">
            Last updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
}
