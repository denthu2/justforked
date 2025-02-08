import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Longevity-Based Wellness | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience comprehensive longevity-focused dental care at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Proactive wellness strategies for optimal oral & systemic health.",
  keywords: "longevity dentistry cedar park, wellness focused dentist austin, preventive dental care, holistic health dentist, dental wellness program cedar park, proactive dental care austin",
};

export default function LongevityWellnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}