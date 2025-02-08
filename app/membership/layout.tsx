import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dental Wellness Membership | Holistic Dentist Cedar Park & Austin | Rise Dental",
  description: "Join Rise Dental's exclusive wellness membership in Cedar Park, serving Austin & Brushy Creek. Premium holistic dental care, priority scheduling & wellness benefits for optimal health.",
  keywords: "dental membership cedar park, holistic dentist membership austin, wellness dental plan brushy creek, premium dental care austin, dental wellness club cedar park, holistic dental membership",
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}