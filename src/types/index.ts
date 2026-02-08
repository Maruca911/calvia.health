export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  village: string;
  needs: string[];
  category: string;
  timeline: string;
  budgetRange: string;
  details: string;
  customNeed: string;
  gdprConsent: boolean;
  specializedFields: Record<string, string>;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  focus_keyword: string;
  excerpt: string;
  content: string;
  featured_image_url: string;
  featured_image_alt: string;
  category: string;
  tags: string[];
  read_time_minutes: number;
  published: boolean;
  published_at: string;
  created_at: string;
}

export interface HealthCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  partners: string[];
  group: 'medical' | 'wellness' | 'lifestyle' | 'stays' | 'coverage';
}

export const VILLAGES = [
  'Portals Nous',
  'Santa Ponsa',
  'Bendinat',
  'Calvia Village',
  'Peguera',
  'Palmanova',
  'Magaluf',
  'Costa de la Calma',
  'Son Ferrer',
  'El Toro',
  'Illetes',
  'Cas Catala',
  'Other',
] as const;

export const HEALTH_NEEDS = [
  'Fix Snoring',
  'Eye Surgery',
  'Dentist',
  'Pediatrician for Kids',
  'Health Insurance',
  'Sports Trainer',
  'Gym Membership',
  'Diet Advice',
  'Natural Shop Recommendations',
  'Healthy Restaurant',
  'Massage Therapist',
  'Spa Session',
  'Boutique Hotel Wellness Stay',
  'Other',
] as const;

export const BUDGET_RANGES = [
  '100-500',
  '500-1000',
  '1000-2000',
  '2000-5000',
  '5000+',
] as const;
