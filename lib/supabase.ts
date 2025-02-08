import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qaiywvzjizouyrekwfch.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhaXl3dnpqaXpvdXlyZWt3ZmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMTI4MjMsImV4cCI6MjA1NDU4ODgyM30.oQZ0qgm-OWLeU2ogkRQJIwlXI8SEYT36Nh0HA3u_nEU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type WaitlistEntry = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  wants_benefits_breakdown: boolean;
  insurance_carrier?: string | null;
  other_insurance_carrier?: string | null;
  subscriber_name?: string | null;
  subscriber_dob?: string | null;
  subscriber_id?: string | null;
  referral_source?: string | null;
  other_referral_source?: string | null;
  treatment_preferences: string[];
  additional_info?: string | null;
  created_at?: string;
};