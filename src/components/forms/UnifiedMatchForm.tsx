import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Loader2, Send } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { LeadFormData } from '../../types';
import ProgressBar from './ProgressBar';
import StepNeeds from './StepNeeds';
import StepSpecialized from './StepSpecialized';
import StepPreferences from './StepPreferences';
import StepContact from './StepContact';
import StepReview from './StepReview';
import { CONDITIONAL_FIELDS } from './formConfig';

const STEPS = ['Needs', 'Details', 'Preferences', 'Contact', 'Review'];

const INITIAL: LeadFormData = {
  name: '',
  email: '',
  phone: '',
  village: '',
  needs: [],
  category: 'general',
  timeline: 'exploring',
  budgetRange: '500-1000',
  details: '',
  customNeed: '',
  gdprConsent: false,
  specializedFields: {},
};

export default function UnifiedMatchForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<LeadFormData>(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const hasSpecializedNeeds = form.needs.some((id) => CONDITIONAL_FIELDS[id]);

  const effectiveSteps = hasSpecializedNeeds
    ? STEPS
    : STEPS.filter((s) => s !== 'Details');

  const realStep = hasSpecializedNeeds ? step : (step === 0 ? 0 : step + 1);

  const update = (field: keyof LeadFormData, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const toggleNeed = (needId: string) => {
    setForm((prev) => ({
      ...prev,
      needs: prev.needs.includes(needId)
        ? prev.needs.filter((n) => n !== needId)
        : [...prev.needs, needId],
    }));
    setErrors((prev) => ({ ...prev, needs: '' }));
  };

  const updateSpecialized = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      specializedFields: { ...prev.specializedFields, [key]: value },
    }));
  };

  const validateStep = () => {
    const errs: Record<string, string> = {};
    if (realStep === 0 && form.needs.length === 0) {
      errs.needs = 'Please select at least one health need';
    }
    if (realStep === 3) {
      if (!form.name.trim()) errs.name = 'Name is required';
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required';
      if (!form.phone.trim()) errs.phone = 'Phone is required';
      if (!form.village) errs.village = 'Please select a village';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const totalSteps = effectiveSteps.length;

  const next = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, totalSteps - 1));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (!form.gdprConsent) {
      setErrors({ gdprConsent: 'You must consent to proceed' });
      return;
    }
    setSubmitting(true);
    try {
      await supabase.from('health_leads').insert({
        form_type: 'unified',
        category: form.needs[0] || 'general',
        user_contact: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          village: form.village,
        },
        needs: form.needs,
        details: {
          specializedFields: form.specializedFields,
          preferences: form.customNeed,
          freeText: form.details,
        },
        budget_range: form.budgetRange,
        timeline: form.timeline,
      });
      navigate('/thank-you');
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (realStep) {
      case 0:
        return <StepNeeds form={form} onToggleNeed={toggleNeed} error={errors.needs} />;
      case 1:
        return (
          <StepSpecialized
            form={form}
            onUpdateSpecialized={updateSpecialized}
            onUpdateDetails={(val) => update('details', val)}
          />
        );
      case 2:
        return <StepPreferences form={form} onUpdate={update} />;
      case 3:
        return <StepContact form={form} errors={errors} onUpdate={update} />;
      case 4:
        return <StepReview form={form} errors={errors} onUpdate={update} />;
      default:
        return null;
    }
  };

  const isLastStep = step === totalSteps - 1;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-subtle-grey/20 overflow-hidden">
        <div className="bg-gradient-to-r from-dark-teal to-dark-teal-light px-6 sm:px-8 pt-6 pb-4">
          <ProgressBar
            currentStep={step}
            totalSteps={totalSteps}
            labels={effectiveSteps}
          />
        </div>

        <div className="p-6 sm:p-8 min-h-[360px]">
          <div className="animate-fade-in">
            {renderStep()}
          </div>
        </div>

        <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex justify-between items-center">
          {step > 0 ? (
            <button
              type="button"
              onClick={prev}
              className="flex items-center gap-1 text-sm text-text-grey hover:text-dark-teal transition-colors font-medium py-2"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}
          {!isLastStep ? (
            <button
              type="button"
              onClick={next}
              className="btn-primary !py-2.5 !px-8 flex items-center gap-1.5 text-sm"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={submitting}
              className="btn-primary !py-2.5 !px-8 flex items-center gap-2 text-sm disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Get My Matches
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
