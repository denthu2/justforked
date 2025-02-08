/*
  # Waitlist Schema Setup

  1. New Tables
    - `waitlist_entries`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `wants_benefits_breakdown` (boolean)
      - `insurance_carrier` (text)
      - `subscriber_name` (text)
      - `subscriber_dob` (date)
      - `subscriber_id` (text)
      - `referral_source` (text)
      - `other_referral_source` (text)
      - `treatment_preferences` (text[])
      - `additional_info` (text)
      - `created_at` (timestamptz)
      - `status` (text)

  2. Security
    - Enable RLS on `waitlist_entries` table
    - Add policy for authenticated users to read their own entries
    - Add policy for anon users to insert entries
*/

-- Create waitlist entries table
CREATE TABLE waitlist_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  wants_benefits_breakdown boolean DEFAULT false,
  insurance_carrier text,
  subscriber_name text,
  subscriber_dob date,
  subscriber_id text,
  referral_source text,
  other_referral_source text,
  treatment_preferences text[],
  additional_info text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE waitlist_entries ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read their own entries
CREATE POLICY "Users can read own entries"
  ON waitlist_entries
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = subscriber_id);

-- Create policy for anyone to insert entries
CREATE POLICY "Anyone can add waitlist entries"
  ON waitlist_entries
  FOR INSERT
  TO anon
  WITH CHECK (true);