import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const isLikelyJwt = typeof supabaseAnonKey === 'string' && supabaseAnonKey.split('.').length === 3;
const isPublishableKey = typeof supabaseAnonKey === 'string' && supabaseAnonKey.startsWith('sb_');

export const isSupabaseConfigured =
  typeof supabaseUrl === 'string' &&
  supabaseUrl.startsWith('https://') &&
  typeof supabaseAnonKey === 'string' &&
  (isLikelyJwt || isPublishableKey);

if (!isSupabaseConfigured) {
  console.warn(
    'Supabase environment variables are missing or invalid. Database features will not work. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are correctly set in your deployment environment.'
  );
}

const effectiveSupabaseUrl = isSupabaseConfigured ? supabaseUrl! : 'https://placeholder.supabase.co';
const effectiveSupabaseAnonKey = isSupabaseConfigured ? supabaseAnonKey! : 'placeholder';

export const supabase = createClient(effectiveSupabaseUrl, effectiveSupabaseAnonKey);
