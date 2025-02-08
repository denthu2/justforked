import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sleep & Airway Optimization | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Address sleep apnea, TMJ & breathing issues at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Comprehensive treatment for better sleep, breathing & overall wellness.",
  keywords: "sleep dentistry cedar park, tmj treatment austin, airway optimization, sleep apnea dentist, breathing therapy cedar park, holistic sleep solutions austin",
};

export default function SleepAirwayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}