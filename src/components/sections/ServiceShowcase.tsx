import { Link } from 'react-router-dom';
import {
  Smile, Eye, Moon, Droplets, Dumbbell, Shield, Sunrise, Apple, ArrowRight,
} from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const HIGHLIGHTS = [
  { id: 'dentist', title: 'Dentists', desc: 'Trusted dental clinics for check-ups and cosmetic work.', icon: Smile },
  { id: 'eye-care', title: 'Eye Care', desc: 'Lasik, cataracts, and comprehensive vision specialists.', icon: Eye },
  { id: 'snoring', title: 'Snoring Solutions', desc: 'Effective treatments for snoring and sleep apnea.', icon: Moon },
  { id: 'spa', title: 'Spas', desc: 'Luxury spa experiences at premier wellness centers.', icon: Droplets },
  { id: 'gym', title: 'Gyms & Fitness', desc: 'Premium fitness centers with personal training.', icon: Dumbbell },
  { id: 'diet', title: 'Diet & Nutrition', desc: 'Personalized plans from expert nutritionists.', icon: Apple },
  { id: 'wellness-retreat', title: 'Wellness Retreats', desc: 'Holistic retreats combining spas, yoga, and mindfulness.', icon: Sunrise },
  { id: 'insurance', title: 'Health Insurance', desc: 'Navigate private and public health insurance options.', icon: Shield },
];

export default function ServiceShowcase() {
  const { ref, isVisible } = useIntersectionObserver(0.05);

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-narrow">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-dark-teal mb-3">
            Your Health, Our Priority
          </h2>
          <p className="text-text-grey max-w-2xl mx-auto">
            From medical specialists to wellness experiences -- explore what we can help you find.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((item, i) => (
            <Link
              to="/get-matched"
              key={item.id}
              className={`group bg-white rounded-2xl p-5 border border-subtle-grey/15 hover:border-dark-teal/20 hover:shadow-lg hover:shadow-dark-teal/5 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${100 + i * 60}ms` : '0ms' }}
            >
              <div className="w-11 h-11 rounded-xl bg-dark-teal/8 flex items-center justify-center mb-3 group-hover:bg-dark-teal/15 transition-colors">
                <item.icon className="w-5 h-5 text-dark-teal" />
              </div>
              <h3 className="font-heading font-bold text-dark-teal text-sm mb-1">{item.title}</h3>
              <p className="text-text-grey text-xs leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link to="/services" className="inline-flex items-center gap-2 text-dark-teal font-semibold hover:text-dark-teal-light transition-colors">
            See All 15 Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
