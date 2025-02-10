"use client";

import { ArrowRight, Star, MessageSquare, Calendar, Check, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center hero-gradient">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/20250207_2139_Serene Spa Lounge_simple_compose_01jkht7341fw8syamjz8rypmbc.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet the Doctor
              <span className="block text-2xl md:text-3xl mt-4 font-normal">
                A dedicated team of professionals committed to your long-term health and comfort.
              </span>
            </h1>
            <Button className="bg-primary text-white hover:bg-primary/90"><a href="/waitlist">
              Schedule Your Visit</a> <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-center"> {/* Updated this line to use flex and center alignment */}
            <Card className="p-8 flex flex-col items-center text-center max-w-md mx-auto">
              <div className="w-[250px] h-[250px] mb-8">
                <img
                  src="/images/dr trinh brushy creek dentist.jpg"
                  alt="Dr. Thu Trinh"
                  className="w-full h-full object-cover object-center rounded-full shadow-lg"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Dr. Thu Trinh, DDS</h3>
                <p className="text-gray-600 mb-4">Lead Dentist & Wellness Director</p>
                <p className="text-gray-700 mb-4">
    Rise Dental's founder, Dr. Thu Trinh, is renowned for her commitment to holistic and biomimetic dentistry. Her approach integrates a deep understanding of how oral health impacts overall wellness.
</p>
<p className="text-gray-700 mb-4">
    Rise Dental, envisioned and crafted by Dr. Trinh, offers a unique environment where patients are treated like esteemed guests in a charmingly inviting setting. As you walk in, you are greeted by the soothing ambiance of a thoughtfully designed interior that combines the comforts of a cozy home with the elegance of a boutique wellness center. 
</p>
<p className="text-gray-700 mb-4">
    From your first visit, Rise Dental offers a bespoke experience where comfort and personal attention are paramount. Dr. Trinh’s meticulous approach ensures that each aspect of your care reflects a commitment to your health, comfort, and wellness.
</p>


                <div className="space-y-2">
                <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>UCLA School of Dentistry (DDS)</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Eastman Institute of Oral Health (AEGD)</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Surgical Implantology (ICOI)</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Integrative & Biological Dentist (IAOMT)</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>SMART Safe Mercury Amalgam Removal Certified</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Functional Occlusion Certified at Kois Institute</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Invisalign Clear Aligners Certified</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>ADA, TDA, AGD Member</span>
                  </div>
                  
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule your visit with our experienced team of doctors today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-white hover:bg-primary/90" asChild>
                <a href="/waitlist">Schedule Your Visit <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button variant="outline" className="btn-outline-square" asChild>
                <a href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Ask a Question
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
