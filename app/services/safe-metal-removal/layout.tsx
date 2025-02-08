import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Safe Metal Removal | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Expert mercury & metal filling removal at Rise Dental in Cedar Park, serving Austin & Brushy Creek. SMART-certified protocols for safe amalgam removal with holistic protection.",
  keywords: "safe mercury removal cedar park, SMART certified dentist austin, holistic amalgam removal, mercury free dentist cedar park, biological dentistry austin, safe metal filling removal",
};

export default function SafeMetalRemovalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}