import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function FinalCTA() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section ref={ref} className="bg-dark-teal">
      <div className="container-narrow section-padding !py-16 sm:!py-20">
        <div className={`text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Ready to find your expert?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
            Tell us what you need. We will match you with trusted professionals in Calvia -- for free.
          </p>
          <Link
            to="/get-matched"
            className="inline-flex items-center gap-2 bg-white text-dark-teal font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-50 hover:shadow-lg transition-all text-lg"
          >
            Get Matched Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
