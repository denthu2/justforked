import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smile Rejuvenation | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience natural smile enhancement at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Holistic approach to smile rejuvenation with biocompatible materials and conservative techniques.",
  keywords: "smile rejuvenation cedar park, holistic cosmetic dentist austin, natural smile enhancement, conservative cosmetic dentistry, biocompatible smile makeover, aesthetic dentistry cedar park",
};

export default function SmileRejuvenationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}