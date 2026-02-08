import { VILLAGES } from '../../types';
import type { LeadFormData } from '../../types';

interface StepContactProps {
  form: LeadFormData;
  errors: Record<string, string>;
  onUpdate: (field: keyof LeadFormData, value: unknown) => void;
}

export default function StepContact({ form, errors, onUpdate }: StepContactProps) {
  return (
    <div>
      <h3 className="text-lg font-heading font-bold text-dark-teal mb-1">
        Almost there -- how can we reach you?
      </h3>
      <p className="text-sm text-text-grey mb-6">We will only use this to send your matched results.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">Full Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => onUpdate('name', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-subtle-grey/50 focus:border-dark-teal focus:ring-2 focus:ring-dark-teal/10 outline-none transition-all text-sm"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => onUpdate('email', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-subtle-grey/50 focus:border-dark-teal focus:ring-2 focus:ring-dark-teal/10 outline-none transition-all text-sm"
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => onUpdate('phone', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-subtle-grey/50 focus:border-dark-teal focus:ring-2 focus:ring-dark-teal/10 outline-none transition-all text-sm"
            placeholder="+34 600 000 000"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-text-dark mb-1">Preferred Village</label>
          <select
            value={form.village}
            onChange={(e) => onUpdate('village', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-subtle-grey/50 focus:border-dark-teal focus:ring-2 focus:ring-dark-teal/10 outline-none transition-all text-sm bg-white"
          >
            <option value="">Select your area...</option>
            {VILLAGES.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
          {errors.village && <p className="text-red-500 text-xs mt-1">{errors.village}</p>}
        </div>
      </div>
    </div>
  );
}
