import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Biomimetic Restorations | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience natural tooth restoration with biomimetic dentistry at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Preserve your natural tooth structure with minimally invasive techniques.",
  keywords: "biomimetic dentistry cedar park, natural tooth restoration austin, minimally invasive dentistry, holistic dental restoration, conservative dentistry cedar park, tooth preservation austin",
};

export default function BiomimeticRestorationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}