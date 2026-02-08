import { healthCategories } from '../../data/healthCategories';
import type { LeadFormData } from '../../types';

interface StepReviewProps {
  form: LeadFormData;
  errors: Record<string, string>;
  onUpdate: (field: keyof LeadFormData, value: unknown) => void;
}

export default function StepReview({ form, errors, onUpdate }: StepReviewProps) {
  const selectedNames = healthCategories
    .filter((cat) => form.needs.includes(cat.id))
    .map((cat) => cat.title);

  return (
    <div>
      <h3 className="text-lg font-heading font-bold text-dark-teal mb-1">
        Review and send
      </h3>
      <p className="text-sm text-text-grey mb-6">Check that everything looks right before we start matching.</p>

      <div className="bg-gray-50 rounded-xl p-5 text-sm space-y-3 mb-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <div>
            <span className="text-text-grey">Name</span>
            <p className="font-medium text-text-dark">{form.name}</p>
          </div>
          <div>
            <span className="text-text-grey">Email</span>
            <p className="font-medium text-text-dark">{form.email}</p>
          </div>
          <div>
            <span className="text-text-grey">Phone</span>
            <p className="font-medium text-text-dark">{form.phone}</p>
          </div>
          <div>
            <span className="text-text-grey">Village</span>
            <p className="font-medium text-text-dark">{form.village}</p>
          </div>
        </div>

        <hr className="border-subtle-grey/30" />

        <div>
          <span className="text-text-grey">Health needs</span>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {selectedNames.map((name) => (
              <span key={name} className="px-2.5 py-0.5 bg-dark-teal/10 text-dark-teal text-xs rounded-full font-medium">
                {name}
              </span>
            ))}
          </div>
        </div>

        {Object.keys(form.specializedFields).length > 0 && (
          <>
            <hr className="border-subtle-grey/30" />
            <div className="space-y-1">
              {Object.entries(form.specializedFields).map(([key, value]) => {
                const parts = key.split('_');
                const catId = parts[0];
                const fieldName = parts.slice(1).join('_');
                const catTitle = healthCategories.find((c) => c.id === catId)?.title || catId;
                return (
                  <div key={key} className="flex justify-between">
                    <span className="text-text-grey">{catTitle} - {fieldName}</span>
                    <span className="font-medium text-text-dark">{value}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}

        <hr className="border-subtle-grey/30" />

        <div className="flex justify-between">
          <span className="text-text-grey">Timeline</span>
          <span className="font-medium text-text-dark capitalize">{form.timeline}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-grey">Budget</span>
          <span className="font-medium text-text-dark">&euro;{form.budgetRange}</span>
        </div>
        {(form.details || form.customNeed) && (
          <div>
            <span className="text-text-grey">Additional notes</span>
            <p className="font-medium text-text-dark mt-0.5">{form.customNeed || form.details}</p>
          </div>
        )}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.gdprConsent}
          onChange={(e) => onUpdate('gdprConsent', e.target.checked)}
          className="w-4 h-4 mt-1 text-dark-teal rounded border-subtle-grey focus:ring-dark-teal"
        />
        <span className="text-xs text-text-grey leading-relaxed">
          I consent to having my data processed for the purpose of being matched with health service providers.
          My data will be handled in accordance with GDPR regulations and will not be shared beyond necessary matching partners.
        </span>
      </label>
      {errors.gdprConsent && <p className="text-red-500 text-xs mt-2">{errors.gdprConsent}</p>}
      {errors.submit && <p className="text-red-500 text-xs mt-2">{errors.submit}</p>}
    </div>
  );
}
