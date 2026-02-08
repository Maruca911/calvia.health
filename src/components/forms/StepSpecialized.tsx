import { CONDITIONAL_FIELDS } from './formConfig';
import { healthCategories } from '../../data/healthCategories';
import type { LeadFormData } from '../../types';

interface StepSpecializedProps {
  form: LeadFormData;
  onUpdateSpecialized: (key: string, value: string) => void;
  onUpdateDetails: (value: string) => void;
}

export default function StepSpecialized({ form, onUpdateSpecialized, onUpdateDetails }: StepSpecializedProps) {
  const selectedCategories = healthCategories.filter((cat) => form.needs.includes(cat.id));
  const categoriesWithFields = selectedCategories.filter((cat) => CONDITIONAL_FIELDS[cat.id]);
  const categoriesWithoutFields = selectedCategories.filter((cat) => !CONDITIONAL_FIELDS[cat.id]);

  return (
    <div>
      <h3 className="text-lg font-heading font-bold text-dark-teal mb-1">
        Tell us more
      </h3>
      <p className="text-sm text-text-grey mb-6">Help us find the best match for your specific needs.</p>

      <div className="space-y-6">
        {categoriesWithFields.map((cat) => {
          const fields = CONDITIONAL_FIELDS[cat.id];
          return (
            <div key={cat.id} className="bg-gray-50 rounded-xl p-5">
              <h4 className="text-sm font-bold text-dark-teal mb-4">{cat.title}</h4>
              <div className="space-y-4">
                {fields.map((field) => {
                  const fieldKey = `${cat.id}_${field.label}`;
                  return (
                    <div key={fieldKey}>
                      <p className="text-xs font-medium text-text-dark mb-2">{field.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {field.options.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => onUpdateSpecialized(fieldKey, opt)}
                            className={`px-3 py-1.5 rounded-full border text-xs transition-all ${
                              form.specializedFields[fieldKey] === opt
                                ? 'border-dark-teal bg-dark-teal/10 text-dark-teal font-medium'
                                : 'border-subtle-grey/40 text-text-grey hover:border-dark-teal/40'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {categoriesWithoutFields.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-5">
            <h4 className="text-sm font-bold text-dark-teal mb-2">
              {categoriesWithoutFields.map((c) => c.title).join(', ')}
            </h4>
            <textarea
              value={form.details}
              onChange={(e) => onUpdateDetails(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-subtle-grey/50 focus:border-dark-teal focus:ring-2 focus:ring-dark-teal/10 outline-none transition-all text-sm resize-none bg-white"
              placeholder="Tell us what you are looking for..."
            />
          </div>
        )}
      </div>
    </div>
  );
}
