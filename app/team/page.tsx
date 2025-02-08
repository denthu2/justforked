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
              Meet the Doctors
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
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-8 flex flex-col items-center text-center">
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
                <p className="text-gray-600 mb-6">
                  With over a decade of experience in holistic dentistry, Dr. Trinh combines modern techniques with a whole-body approach to dental wellness. Certified in biomimetic dentistry and a fellow of the International Academy of Biological Dentistry & Medicine.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Biomimetic & Biological Dentistry Expert</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Advanced Training in Sleep & TMJ Therapy</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Certified in Ceramic Implant Placement</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 flex flex-col items-center text-center">
              <div className="w-[250px] h-[250px] mb-8">
                <img
                  src="/images/dr banh austin dentist.jpg"
                  alt="Dr. Robert Banh"
                  className="w-full h-full object-cover object-center rounded-full shadow-lg"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Dr. Robert Banh, DDS</h3>
                <p className="text-gray-600 mb-4">Restorative & Aesthetic Specialist</p>
                <p className="text-gray-600 mb-6">
                  Dr. Banh specializes in minimally invasive restorative procedures and aesthetic dentistry. His attention to detail and artistic approach ensure natural-looking results that preserve tooth structure and promote long-term health.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Advanced Training in Digital Smile Design</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Expert in Minimally Invasive Techniques</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Certified in Advanced Bonding Protocols</span>
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