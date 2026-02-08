import { Shield, Clock, Users, CheckCircle } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Shield, text: 'Free & Confidential' },
  { icon: Clock, text: 'Matched in 24 Hours' },
  { icon: Users, text: '50+ Vetted Providers' },
  { icon: CheckCircle, text: 'English-Speaking Experts' },
];

export default function TrustStrip() {
  return (
    <div className="bg-dark-teal/[0.03] border-y border-dark-teal/10">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {TRUST_ITEMS.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-dark-teal" />
              <span className="text-sm font-medium text-dark-teal/80">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
