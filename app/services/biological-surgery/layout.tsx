import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biological Surgery | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience minimally invasive biological surgery at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Advanced procedures using biocompatible materials for optimal healing.",
  keywords: "biological surgery cedar park, holistic oral surgery austin, minimally invasive dentistry, biocompatible dental surgery, biological dentist cedar park, natural healing dentistry austin",
};

export default function BiologicalSurgeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}