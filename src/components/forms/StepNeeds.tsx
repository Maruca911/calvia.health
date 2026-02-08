import {
  Smile, Eye, Moon, Baby, Droplets, Hand, Dumbbell, Activity,
  UtensilsCrossed, Leaf, Apple, Building2, Sunrise, Shield, Siren,
} from 'lucide-react';
import { healthCategories } from '../../data/healthCategories';
import type { LeadFormData } from '../../types';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Smile, Eye, Moon, Baby, Droplets, Hand, Dumbbell, Activity,
  UtensilsCrossed, Leaf, Apple, Building2, Sunrise, Shield, Siren,
};

interface StepNeedsProps {
  form: LeadFormData;
  onToggleNeed: (needId: string) => void;
  error?: string;
}

export default function StepNeeds({ form, onToggleNeed, error }: StepNeedsProps) {
  return (
    <div>
      <h3 className="text-lg font-heading font-bold text-dark-teal mb-1">
        What do you need help with?
      </h3>
      <p className="text-sm text-text-grey mb-6">Select all that apply -- we will tailor your matches.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {healthCategories.map((cat) => {
          const Icon = iconMap[cat.icon];
          const isSelected = form.needs.includes(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onToggleNeed(cat.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                isSelected
                  ? 'border-dark-teal bg-dark-teal/5 shadow-sm'
                  : 'border-subtle-grey/30 hover:border-dark-teal/30 hover:bg-gray-50'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                isSelected ? 'bg-dark-teal/10' : 'bg-gray-100'
              }`}>
                {Icon && <Icon className={`w-5 h-5 ${isSelected ? 'text-dark-teal' : 'text-text-grey'}`} />}
              </div>
              <span className={`text-xs font-medium leading-tight ${
                isSelected ? 'text-dark-teal' : 'text-text-grey'
              }`}>
                {cat.title}
              </span>
            </button>
          );
        })}
      </div>
      {error && <p className="text-red-500 text-xs mt-3">{error}</p>}
    </div>
  );
}
