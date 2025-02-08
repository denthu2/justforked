/*
  # Create waitlist entries table

  1. New Tables
    - `waitlist_entries`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text) 
      - `email` (text)
      - `phone` (text)
      - `wants_benefits_breakdown` (boolean)
      - `insurance_carrier` (text, optional)
      - `other_insurance_carrier` (text, optional)
      - `subscriber_name` (text, optional)
      - `subscriber_dob` (date, optional)
      - `subscriber_id` (text, optional)
      - `referral_source` (text)
      - `other_referral_source` (text, optional)
      - `treatment_preferences` (text array)
      - `additional_info` (text, optional)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS
    - Allow anonymous inserts
*/

-- Drop existing table if it exists
DROP TABLE IF EXISTS waitlist_entries;

-- Create waitlist entries table
CREATE TABLE waitlist_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  wants_benefits_breakdown boolean DEFAULT false,
  insurance_carrier text,
  other_insurance_carrier text,
  subscriber_name text,
  subscriber_dob date,
  subscriber_id text,
  referral_source text,
  other_referral_source text,
  treatment_preferences text[] DEFAULT '{}',
  additional_info text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE waitlist_entries ENABLE ROW LEVEL SECURITY;

-- Create policy for anyone to insert entries
CREATE POLICY "Anyone can add waitlist entries"
  ON waitlist_entries
  FOR INSERT
  TO anon
  WITH CHECK (true);