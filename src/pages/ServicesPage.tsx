import { Link } from 'react-router-dom';
import {
  Smile, Eye, Moon, Baby, Droplets, Hand, Dumbbell, Activity,
  UtensilsCrossed, Leaf, Apple, Building2, Sunrise, Shield, Siren,
  ArrowRight,
} from 'lucide-react';
import { healthCategories, categoryGroups } from '../data/healthCategories';
import { useSEO } from '../hooks/useSEO';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Smile, Eye, Moon, Baby, Droplets, Hand, Dumbbell, Activity,
  UtensilsCrossed, Leaf, Apple, Building2, Sunrise, Shield, Siren,
};

const GROUP_COLORS: Record<string, { bg: string; accent: string }> = {
  medical: { bg: 'from-sky-blue/10 to-sky-blue/5', accent: 'bg-sky-blue/15' },
  wellness: { bg: 'from-mint/10 to-mint/5', accent: 'bg-mint/20' },
  lifestyle: { bg: 'from-amber-100/40 to-amber-50/20', accent: 'bg-amber-100/40' },
  stays: { bg: 'from-dark-teal/5 to-dark-teal/[0.02]', accent: 'bg-dark-teal/10' },
  coverage: { bg: 'from-slate-100/60 to-slate-50/30', accent: 'bg-slate-100/60' },
};

export default function ServicesPage() {
  const { ref, isVisible } = useIntersectionObserver(0.05);

  useSEO({
    title: 'Health & Wellness Services in Calvia, Mallorca',
    description: 'Explore all health, wellness, and lifestyle services available through Calvia Health. From dentists to wellness retreats.',
    canonical: 'https://www.calvia.health/services',
  });

  return (
    <div className="min-h-screen bg-white pt-24" ref={ref}>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container-narrow section-padding !pb-12">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-dark-teal mb-4">
              Health & Wellness Services
            </h1>
            <p className="text-text-grey text-lg leading-relaxed mb-6">
              We connect you with trusted providers across every aspect of health and wellbeing in Calvia.
              Browse our categories below and get matched with the right expert for your needs.
            </p>
            <Link to="/get-matched" className="btn-primary inline-flex items-center gap-2">
              Get Matched Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container-narrow px-4 sm:px-6 lg:px-8 pb-20">
        {categoryGroups.map((group) => {
          const cats = healthCategories.filter((c) => c.group === group.id);
          const colors = GROUP_COLORS[group.id] || GROUP_COLORS.medical;

          return (
            <section key={group.id} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <div className={`h-8 w-1.5 rounded-full bg-dark-teal`} />
                <h2 className="text-2xl font-heading font-bold text-dark-teal">{group.label}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cats.map((category) => {
                  const Icon = iconMap[category.icon];
                  return (
                    <div
                      key={category.id}
                      className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border border-subtle-grey/10 hover:shadow-lg hover:shadow-dark-teal/5 transition-all duration-300 group`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${colors.accent} flex items-center justify-center mb-4`}>
                        {Icon && <Icon className="w-6 h-6 text-dark-teal" />}
                      </div>
                      <h3 className="font-heading font-bold text-dark-teal text-lg mb-2">
                        {category.title}
                      </h3>
                      <p className="text-text-grey text-sm leading-relaxed mb-4">
                        {category.description}
                      </p>
                      {category.partners.length > 0 && (
                        <p className="text-xs text-dark-teal/60 mb-4">
                          Partners include: {category.partners.join(', ')}
                        </p>
                      )}
                      <Link
                        to="/get-matched"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark-teal hover:text-dark-teal-light transition-colors"
                      >
                        Get Matched
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <div className="bg-dark-teal">
        <div className="container-narrow section-padding !py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Tell us what you need and we will guide you to the right providers. It takes less than 2 minutes.
          </p>
          <Link to="/get-matched" className="inline-flex items-center gap-2 bg-white text-dark-teal font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-all">
            Start Your Match <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
