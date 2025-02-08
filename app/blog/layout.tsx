import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dental Wellness Blog | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Explore dental wellness insights, holistic health tips, and expert advice from Rise Dental in Cedar Park, serving Austin & Brushy Creek. Stay informed about modern dental care.",
  keywords: "dental blog cedar park, holistic dentistry blog, dental wellness tips austin, oral health blog, holistic dental advice, dental education cedar park",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}