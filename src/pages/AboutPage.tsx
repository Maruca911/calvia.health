import { Link } from 'react-router-dom';
import {
  ArrowRight, Heart, Smartphone, Megaphone, Home, Activity,
  BookOpen, Calendar, Cpu, Star, Users, Clock, Shield,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ECOSYSTEM = [
  {
    domain: 'Calvia.app',
    description: 'The core concierge app -- simplifies daily life with discreet access to services, saving hours on coordination.',
    icon: Smartphone,
    status: 'live' as const,
  },
  {
    domain: 'Calvia.marketing',
    description: 'Tailored marketing support -- helps local businesses grow, connecting them to affluent residents.',
    icon: Megaphone,
    status: 'live' as const,
  },
  {
    domain: 'Calvia.realestate',
    description: 'Lead generation for properties -- brokers buyers and sellers to experts, streamlining transactions.',
    icon: Home,
    status: 'live' as const,
  },
  {
    domain: 'Calvia.health',
    description: 'Wellness connections -- matches health needs to providers, promoting vitality and peace of mind.',
    icon: Activity,
    status: 'current' as const,
  },
  {
    domain: 'Calvia.blog',
    description: 'Insightful guides -- shares practical tips on Calvia living, building community and informed decisions.',
    icon: BookOpen,
    status: 'live' as const,
  },
  {
    domain: 'Calvia.events',
    description: 'Events calendar -- keeps users connected to local happenings, enhancing social and cultural experiences.',
    icon: Calendar,
    status: 'coming' as const,
  },
  {
    domain: 'Calviadigital.ai',
    description: 'AI-driven tools -- automates daily needs, making life easier and more efficient.',
    icon: Cpu,
    status: 'coming' as const,
  },
  {
    domain: 'Calvia.vip',
    description: 'Elite perks portal -- offers exclusive opportunities, elevating status and connections.',
    icon: Star,
    status: 'tba' as const,
  },
];

const STATUS_BADGE: Record<string, { label: string; className: string }> = {
  live: { label: 'Live', className: 'bg-mint/30 text-mint-dark' },
  current: { label: 'You are here', className: 'bg-dark-teal text-white' },
  coming: { label: 'Coming soon', className: 'bg-amber-100 text-amber-700' },
  tba: { label: 'To be announced', className: 'bg-gray-100 text-text-grey' },
};

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Tell us what you need',
    description: 'Select your health needs from 15+ categories. From dentistry to wellness retreats, we cover it all.',
  },
  {
    step: '02',
    title: 'We match you with experts',
    description: 'Our team reviews your request and identifies 2-3 vetted providers that best fit your specific needs.',
  },
  {
    step: '03',
    title: 'Get connected within 24 hours',
    description: 'Receive personalized introductions via email or phone. You choose who to work with -- no pressure, no obligations.',
  },
];

export default function AboutPage() {
  const { ref: missionRef, isVisible: missionVisible } = useIntersectionObserver(0.1);
  const { ref: processRef, isVisible: processVisible } = useIntersectionObserver(0.1);
  const { ref: ecosystemRef, isVisible: ecosystemVisible } = useIntersectionObserver(0.05);

  useSEO({
    title: 'About Calvia Health - Part of the Calvia Group Ecosystem',
    description: 'Learn about Calvia Health and the Calvia Group ecosystem -- premium digital tools for residents of Calvia, Mallorca.',
    canonical: 'https://calvia.health/about',
  });

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="bg-gradient-to-b from-gray-50 to-white" ref={missionRef}>
        <div className="container-narrow section-padding !pb-12">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 bg-dark-teal/5 text-dark-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Heart className="w-4 h-4" /> About Us
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-dark-teal mb-6 leading-tight">
              Finding the right health expert should not be stressful
            </h1>
            <p className="text-text-grey text-lg leading-relaxed">
              Calvia Health exists to remove the guesswork from healthcare in Mallorca. Whether you just moved to
              the island, are visiting for the season, or have been here for years -- navigating local health
              services in a new language and system can be overwhelming. We make it simple: tell us what you
              need, and we connect you to trusted, vetted professionals in Calvia.
            </p>
          </div>
        </div>
      </div>

      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, label: '50+ Providers', desc: 'Vetted health and wellness professionals across Calvia' },
            { icon: Clock, label: '24h Response', desc: 'Personalized matches delivered within one business day' },
            { icon: Shield, label: 'Free & Private', desc: 'No cost to you. Your data stays confidential.' },
          ].map((item) => (
            <div key={item.label} className="text-center p-6 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 rounded-xl bg-dark-teal/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-dark-teal" />
              </div>
              <h3 className="font-heading font-bold text-dark-teal mb-1">{item.label}</h3>
              <p className="text-sm text-text-grey">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50" ref={processRef}>
        <div className="container-narrow section-padding">
          <div className={`text-center mb-14 transition-all duration-700 ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-teal mb-3">
              How it works
            </h2>
            <p className="text-text-grey max-w-xl mx-auto">
              Three simple steps from your first click to your first consultation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {HOW_IT_WORKS.map((item, i) => (
              <div
                key={item.step}
                className={`flex gap-6 mb-10 last:mb-0 transition-all duration-700 ${
                  processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: processVisible ? `${i * 150}ms` : '0ms' }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-dark-teal flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-lg">{item.step}</span>
                  </div>
                  {i < HOW_IT_WORKS.length - 1 && (
                    <div className="w-0.5 h-10 bg-dark-teal/20 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-heading font-bold text-dark-teal text-lg mb-1">{item.title}</h3>
                  <p className="text-text-grey leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={ecosystemRef}>
        <div className="container-narrow section-padding">
          <div className={`text-center mb-12 transition-all duration-700 ${
            ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-sm font-semibold text-dark-teal/60 uppercase tracking-wider mb-3">Part of something bigger</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark-teal mb-4">
              The Calvia Group Ecosystem
            </h2>
            <p className="text-text-grey max-w-2xl mx-auto leading-relaxed">
              Calvia Health is part of the Calvia Group -- a family of premium digital tools designed for
              residents of Calvia, Mallorca. Each platform delivers practical, real-life benefits: saving time,
              fostering connections, ensuring privacy, and enhancing daily living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ECOSYSTEM.map((item, i) => {
              const badge = STATUS_BADGE[item.status];
              return (
                <div
                  key={item.domain}
                  className={`rounded-2xl p-5 border transition-all duration-300 ${
                    item.status === 'current'
                      ? 'border-dark-teal/30 bg-dark-teal/[0.03] ring-1 ring-dark-teal/10'
                      : 'border-subtle-grey/20 bg-white hover:border-dark-teal/20 hover:shadow-md'
                  } ${ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: ecosystemVisible ? `${i * 80}ms` : '0ms' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-dark-teal/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-dark-teal" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${badge.className}`}>
                      {badge.label}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-dark-teal text-sm mb-1.5">{item.domain}</h3>
                  <p className="text-xs text-text-grey leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <blockquote className="max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl text-dark-teal font-heading italic leading-relaxed">
                "Empowering Calvia residents with tools that enhance real-life benefits -- saving time,
                fostering connections, ensuring privacy, and unlocking joy in paradise."
              </p>
              <footer className="mt-4 text-sm text-text-grey font-medium">
                -- Calvia Group Mission
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="bg-dark-teal">
        <div className="container-narrow section-padding !py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
            Ready to find your expert?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Join residents across Calvia who have already been matched with trusted health professionals.
          </p>
          <Link
            to="/get-matched"
            className="inline-flex items-center gap-2 bg-white text-dark-teal font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-all"
          >
            Get Matched Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
