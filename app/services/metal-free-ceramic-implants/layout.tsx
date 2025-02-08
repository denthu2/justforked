import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Metal-Free Ceramic Implants | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience biocompatible ceramic dental implants at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Safe, natural-looking tooth replacement with holistic benefits.",
  keywords: "ceramic implants cedar park, metal free implants austin, zirconia implants, holistic dental implants, biocompatible tooth replacement, ceramic tooth implants austin",
};

export default function CeramicImplantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}