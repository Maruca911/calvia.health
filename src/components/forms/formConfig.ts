export const CONDITIONAL_FIELDS: Record<string, { label: string; options: string[] }[]> = {
  snoring: [
    { label: 'Severity', options: ['Mild', 'Moderate', 'Severe'] },
    { label: 'Duration', options: ['Less than 1 year', '1-3 years', 'More than 3 years'] },
    { label: 'Current Treatment', options: ['None', 'CPAP', 'Oral device', 'Other'] },
  ],
  'eye-care': [
    { label: 'Issue Type', options: ['Lasik', 'Cataracts', 'General Vision', 'Glaucoma', 'Other'] },
    { label: 'Urgency', options: ['Routine check', 'Deteriorating vision', 'Urgent'] },
  ],
  dentist: [
    { label: 'Need Type', options: ['General check-up', 'Cosmetic', 'Implants', 'Emergency', 'Orthodontics'] },
    { label: 'Last Visit', options: ['Less than 6 months', '6-12 months', 'Over 1 year', 'Never'] },
  ],
  pediatric: [
    { label: 'Child Age Range', options: ['0-2 years', '3-5 years', '6-12 years', '13-17 years'] },
    { label: 'Visit Type', options: ['Routine check-up', 'Illness', 'Vaccination', 'Specialist referral'] },
  ],
  spa: [
    { label: 'Preferred Type', options: ['Hydrotherapy', 'Thalassotherapy', 'Aromatherapy', 'Couples', 'Full day'] },
    { label: 'Duration', options: ['30 minutes', '60 minutes', '90 minutes', 'Half day', 'Full day'] },
  ],
  massage: [
    { label: 'Preferred Type', options: ['Deep tissue', 'Thai', 'Sports', 'Aromatherapy', 'Holistic', 'Couples'] },
    { label: 'Duration', options: ['30 minutes', '60 minutes', '90 minutes'] },
  ],
  gym: [
    { label: 'Goal', options: ['Weight loss', 'Muscle building', 'General fitness', 'Rehabilitation'] },
    { label: 'Experience', options: ['Beginner', 'Intermediate', 'Advanced'] },
  ],
  trainer: [
    { label: 'Goal', options: ['Weight loss', 'Muscle building', 'General fitness', 'Sports performance'] },
    { label: 'Experience', options: ['Beginner', 'Intermediate', 'Advanced'] },
  ],
  diet: [
    { label: 'Focus', options: ['Weight loss', 'Weight gain', 'Allergies', 'Vegan/Vegetarian', 'General wellness'] },
    { label: 'Preference', options: ['In-person', 'Online', 'No preference'] },
  ],
  'wellness-retreat': [
    { label: 'Type', options: ['Yoga', 'Mindfulness', 'Detox', 'Holistic', 'Fitness'] },
    { label: 'Duration', options: ['Weekend', '3-5 days', 'Week', 'Longer'] },
  ],
  hotel: [
    { label: 'Focus', options: ['Spa package', 'Fitness program', 'Detox retreat', 'General relaxation'] },
    { label: 'Duration', options: ['1-2 nights', '3-5 nights', 'Week+'] },
  ],
  insurance: [
    { label: 'Type', options: ['Private', 'Public', 'Both/Compare', 'Not sure'] },
    { label: 'Coverage', options: ['Individual', 'Couple', 'Family'] },
  ],
};
