import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Advanced Technology & Sustainable Dentistry | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Explore the intersection of innovation and sustainability at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Experience cutting-edge digital dentistry, AI diagnostics, and eco-conscious care for a healthier future.",
  keywords: "modern dental technology cedar park, sustainable dentistry austin, eco friendly dental practice, holistic dentist brushy creek, AI diagnostics dentistry, digital dentistry cedar park, green dental care austin",
};

export default function TechSustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
