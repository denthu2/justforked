"use client";

import { ArrowRight, Microscope, Scan as Scan3d, Brain, Shield, Zap, MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function TechnologyPage() {
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
            <source src="/videos/tranquil rise dental spa inset shelving waiting room beautiful circular lounge sofa.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technology & Innovation
              <span className="block text-2xl md:text-1xl mt-4 font-normal">Experience state-of-the-art dental care with our innovative approach to modern dentistry</span>
            </h1>
          
            <Button className="bg-primary text-white hover:bg-primary/90" asChild>
              <a href="/waitlist">Experience Modern Holistic Dentistry</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Advanced Technology Suite</h2>
            <p className="text-lg text-gray-600">
              Our state-of-the-art technology ensures precise diagnostics, comfortable treatments, and optimal outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <Scan3d className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">3D Imaging & Digital Scans</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Ultra-low radiation exposure</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Precise 3D visualization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Comfortable digital impressions</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Microscope className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Microscope-Enhanced Precision</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>25x magnification for detail</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Ultra-precise treatments</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Early issue detection</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Brain className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">AI-Enhanced Diagnostics</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Smart cavity detection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Personalized care insights</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Shield className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Advanced Imaging Systems</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Digital X-rays with minimal radiation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Intraoral cameras for detailed views</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>3D treatment planning</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Zap className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Advanced Sterilization</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Medical-grade protocols</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>HEPA air filtration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Water purification systems</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Benefits of Advanced Technology</h2>
            <p className="text-lg text-gray-600">
              Experience the difference that modern dental technology can make in your care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <h3 className="text-xl font-bold mb-4">Diagnostic Accuracy</h3>
              <p className="text-gray-600">Enhanced precision with AI-assisted technology</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <h3 className="text-xl font-bold mb-4">Less Radiation</h3>
              <p className="text-gray-600">Compared to traditional dental X-rays</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h3 className="text-xl font-bold mb-4">Digital Integration</h3>
              <p className="text-gray-600">Seamless, efficient patient care</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Experience Modern Dentistry</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us in embracing the future of dental care with technology that puts your comfort and health first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-white hover:bg-primary/90" asChild>
                <a href="/waitlist">Schedule Your Visit <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button variant="outline" className="btn-outline-square" asChild>
                <a href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Ask About Our Technology
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}