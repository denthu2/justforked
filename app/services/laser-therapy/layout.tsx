import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Laser Therapy | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Advanced laser therapy at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Minimally invasive treatments for pain relief, healing acceleration & aesthetic enhancement.",
  keywords: "dental laser therapy cedar park, laser dentistry austin, pain relief dentist, gum contouring austin, minimally invasive dentistry cedar park, modern dental technology austin",
};

export default function LaserTherapyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}