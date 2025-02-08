import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wellness Events & Workshops | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Join expert-led wellness workshops and events at Rise Dental in Cedar Park, serving Austin & Brushy Creek. Learn about holistic health, TMJ relief, nutrition & more.",
  keywords: "dental wellness events cedar park, holistic health workshops austin, tmj relief class, nutrition seminars austin, dental education events, wellness community cedar park",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}