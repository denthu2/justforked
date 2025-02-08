import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "3D Smile Design | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience precision smile design at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Advanced 3D technology for customized, natural-looking smile transformations.",
  keywords: "3d smile design cedar park, digital smile design austin, cosmetic dentistry cedar park, modern dental technology austin, smile makeover cedar park, aesthetic dentistry austin",
};

export default function ThreeDSmileDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}