import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ozone Therapy | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience advanced ozone therapy at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Natural antimicrobial treatment for optimal oral health using biocompatible methods.",
  keywords: "ozone therapy cedar park, holistic dental treatment austin, natural dental care, biocompatible dentistry, antimicrobial dental treatment cedar park, holistic cavity treatment austin",
};

export default function OzoneTherapyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}