import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Modern Dental Services | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience comprehensive holistic dental services at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Advanced diagnostics, biocompatible treatments & wellness-focused care.",
  keywords: "holistic dentist cedar park, modern dental services austin, biocompatible dentistry, ceramic implants austin, biomimetic dentistry cedar park, wellness dentistry austin",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}