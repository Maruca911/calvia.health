import { Link } from 'react-router-dom';
import { ClipboardList, Search, Handshake, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Tell us what you need',
    description: 'Select from 15+ health and wellness categories. Takes under 2 minutes.',
  },
  {
    icon: Search,
    title: 'We match you with 2-3 experts',
    description: 'Our team finds the best-fit providers from our vetted network in Calvia.',
  },
  {
    icon: Handshake,
    title: 'Get connected within 24 hours',
    description: 'Receive personalized introductions. You choose who to work with.',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-narrow">
        <div className={`text-center mb-14 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-dark-teal mb-3">
            How It Works
          </h2>
          <p className="text-text-grey max-w-xl mx-auto">
            From first click to first consultation -- in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : '0ms' }}
            >
              <div className="relative inline-block mb-5">
                <div className="w-16 h-16 rounded-2xl bg-dark-teal/10 flex items-center justify-center mx-auto">
                  <step.icon className="w-7 h-7 text-dark-teal" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-dark-teal text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading font-bold text-dark-teal text-lg mb-2">{step.title}</h3>
              <p className="text-text-grey text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link
            to="/get-matched"
            className="btn-primary inline-flex items-center gap-2"
          >
            Start Now -- It Takes 2 Minutes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
