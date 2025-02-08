import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sustainable & Eco-Friendly Dentistry | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience sustainable, eco-conscious dental care at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Minimizing environmental impact through green practices & biocompatible materials.",
  keywords: "sustainable dentist cedar park, eco friendly dentist austin, green dental practice, mercury free dentist austin, biocompatible dentistry cedar park, environmentally conscious dentist",
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}