import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Wellness Scans | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience advanced diagnostic imaging at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Early detection and prevention with state-of-the-art digital wellness scans.",
  keywords: "digital dental scans cedar park, 3d dental imaging austin, preventive dentistry, dental diagnostics cedar park, modern dental technology, early detection austin",
};

export default function DigitalWellnessScansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}