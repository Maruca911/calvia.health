import { BUDGET_RANGES } from '../../types';
import type { LeadFormData } from '../../types';

interface StepPreferencesProps {
  form: LeadFormData;
  onUpdate: (field: keyof LeadFormData, value: unknown) => void;
}

export default function StepPreferences({ form, onUpdate }: StepPreferencesProps) {
  return (
    <div>
      <h3 className="text-lg font-heading font-bold text-dark-teal mb-1">
        Your preferences
      </h3>
      <p className="text-sm text-text-grey mb-6">This helps us prioritize and find the right fit.</p>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-dark mb-3">How soon do you need this?</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: 'immediate', label: 'As soon as possible', sub: 'Within days' },
              { value: '1-3 months', label: 'Coming months', sub: '1-3 months' },
              { value: 'exploring', label: 'Just exploring', sub: 'No rush' },
            ].map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => onUpdate('timeline', t.value)}
                className={`p-3 rounded-xl border-2 text-center transition-all ${
                  form.timeline === t.value
                    ? 'border-dark-teal bg-dark-teal/5'
                    : 'border-subtle-grey/30 hover:border-dark-teal/30'
                }`}
              >
                <span className={`block text-sm font-medium ${
                  form.timeline === t.value ? 'text-dark-teal' : 'text-text-dark'
                }`}>
                  {t.label}
                </span>
                <span className="block text-xs text-text-grey mt-0.5">{t.sub}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-dark mb-3">Approximate budget</label>
          <div className="flex flex-wrap gap-2">
            {BUDGET_RANGES.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => onUpdate('budgetRange', b)}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${
                  form.budgetRange === b
                    ? 'border-dark-teal bg-dark-teal/10 text-dark-teal font-medium'
                    : 'border-subtle-grey/40 text-text-grey hover:border-dark-teal/40'
                }`}
              >
                &euro;{b}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">
            Any specific preferences?
          </label>
          <p className="text-xs text-text-grey mb-2">E.g., English-speaking, specific area, special requirements</p>
          <textarea
            value={form.customNeed}
            onChange={(e) => onUpdate('customNeed', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-subtle-grey/50 focus:border-dark-teal focus:ring-2 focus:ring-dark-teal/10 outline-none transition-all text-sm resize-none"
            placeholder="Tell us anything that helps us find the perfect match..."
          />
        </div>
      </div>
    </div>
  );
}
