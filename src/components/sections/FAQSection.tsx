import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../../data/faqData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.05);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-padding bg-white" ref={ref}>
      <div className="container-narrow">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-dark-teal/60 uppercase tracking-wider mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-dark-teal mb-4">
            Health in Mallorca: Your Questions Answered
          </h2>
          <p className="text-text-grey max-w-2xl mx-auto">
            Detailed answers to the most common questions about healthcare, insurance, and
            wellness services for expats and residents in Calvia.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border-b border-subtle-grey/20 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isVisible ? `${Math.min(i * 50, 400)}ms` : '0ms' }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-dark-teal group-hover:text-dark-teal-light transition-colors text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-dark-teal/50 transition-transform duration-300 mt-0.5 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? 'max-h-[600px] opacity-100 pb-5' : 'max-h-0 opacity-0'
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
      </div>
    </section>
  );
}
