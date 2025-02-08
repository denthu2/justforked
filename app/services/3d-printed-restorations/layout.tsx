import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "3D-Printed Dental Restorations | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Experience precision dental restorations with advanced 3D printing at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Same-day crowns & custom restorations with biocompatible materials.",
  keywords: "3d printed crowns cedar park, same day dental restorations austin, digital dentistry cedar park, modern dental technology austin, custom dental restorations, cad cam dentistry",
};

export default function ThreeDPrintedRestorationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}