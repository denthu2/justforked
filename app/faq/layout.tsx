import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Find answers about our holistic dental care approach at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Learn about our services, technology, and wellness-focused treatments.",
  keywords: "dental faq cedar park, holistic dentist questions austin, dental wellness faq, modern dentistry questions, biological dentist faq cedar park, dental care questions austin",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}