import { Shield, Clock, Users } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import UnifiedMatchForm from '../components/forms/UnifiedMatchForm';

const TRUST_ITEMS = [
  { icon: Shield, text: 'Free & confidential' },
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: Users, text: '50+ vetted providers' },
];

export default function GetMatchedPage() {
  useSEO({
    title: 'Find Your Health Expert in Calvia',
    description: 'Answer a few quick questions and get matched with 2-3 trusted health professionals in Calvia, Mallorca. Free, fast, and private.',
    canonical: 'https://calvia.health/get-matched',
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="container-narrow section-padding !pt-8 !pb-16">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-dark-teal mb-4 leading-tight">
            Find the Right Health Expert for You
          </h1>
          <p className="text-text-grey text-lg leading-relaxed">
            Answer a few quick questions and we will match you with 2-3 trusted professionals in Calvia -- free, fast, and private.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {TRUST_ITEMS.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-text-grey">
                <item.icon className="w-4 h-4 text-dark-teal" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <UnifiedMatchForm />

        <p className="text-center text-xs text-text-grey mt-8 max-w-lg mx-auto">
          This is an informational matching service. We connect you with providers but do not offer medical advice.
          Always consult qualified professionals for health decisions.
        </p>
      </div>
    </div>
  );
}
