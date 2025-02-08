import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Minimally Invasive Cleanings | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience gentle, effective dental cleanings at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Our minimally invasive approach preserves your natural oral microbiome.",
  keywords: "gentle dental cleaning cedar park, minimally invasive dentistry austin, holistic teeth cleaning, natural dental hygiene, conservative dentistry cedar park, microbiome friendly cleaning",
};

export default function MinimallyInvasiveCleaningsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}