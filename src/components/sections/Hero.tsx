import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function Hero() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark-teal/65 via-dark-teal/50 to-dark-teal/70" />
      </div>

      <div ref={ref} className="relative z-10 container-narrow section-padding text-center">
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            Calvia, Mallorca
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Your Health in Calvia, Simplified
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl mx-auto">
            Tell us what you need. We connect you to trusted local experts in minutes -- so you can focus on living well.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-matched"
              className="bg-white text-dark-teal font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg active:scale-95 text-lg w-full sm:w-auto text-center"
            >
              Find My Expert
            </Link>
            <button
              onClick={() => scrollTo('#how-it-works')}
              className="border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/60 active:scale-95 text-lg w-full sm:w-auto"
            >
              How It Works
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollTo('#trust')}
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-all duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
