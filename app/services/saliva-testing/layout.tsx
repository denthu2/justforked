import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Saliva Testing | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Advanced saliva testing at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Comprehensive biomarker analysis for personalized dental care & optimal oral health.",
  keywords: "saliva testing cedar park, oral biomarker testing austin, dental microbiome analysis, holistic dental diagnostics, personalized dental care cedar park, preventive dentistry austin",
};

export default function SalivaTestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}