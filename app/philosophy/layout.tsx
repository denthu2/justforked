import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rise Philosophy | Wellness-Driven, Integrative Dentistry in Cedar Park & Austin",
  description: "Discover the philosophy behind Rise Dental—a patient-centered, wellness-driven approach that integrates whole-body health, sustainability, and innovative care in Cedar Park and Austin.",
  keywords: "holistic dentist cedar park, integrative dentistry austin, whole-body dental care, wellness-driven dentistry, sustainable dentistry, mindful dental practice, biocompatible dentistry",
};

export default function RisePhilosophyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
