"use client";

import { 
  ArrowRight, Microscope, Scan as Scan3d, Brain, Shield, Zap, MessageSquare, Check, 
  Leaf, Recycle, Wind, TreePine, FlaskConical 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center hero-gradient">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/textures/abstract-waves-rise-dental.jpg"
            alt="Abstract waves at Rise Dental"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technology & Sustainablity
              <span className="block text-2xl md:text-xl mt-4 font-normal">
              Experience state-of-the-art dental care with cutting-edge technology and a commitment to environmental responsibility
              </span>
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

          {/* Technology Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[ 
              { icon: Scan3d, title: "3D Imaging & Digital Scans", benefits: ["Low radiation exposure", "Precise 3D visualization", "Comfortable digital impressions"] },
              { icon: Microscope, title: "Microscope-Enhanced Precision", benefits: ["25x magnification for detail", "Ultra-precise treatments", "Early issue detection"] },
              { icon: Brain, title: "AI-Enhanced Diagnostics", benefits: ["Smart cavity detection", "Predictive analytics", "Personalized care insights"] },
              { icon: Shield, title: "Advanced Imaging Systems", benefits: ["Digital X-rays with minimal radiation", "Intraoral cameras for detailed views", "3D treatment planning"] },
              { icon: Zap, title: "Advanced Sterilization", benefits: ["Medical-grade protocols", "HEPA air filtration", "Water purification systems"] }
            ].map((tech, index) => (
              <Card key={index} className="p-8">
                <tech.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {tech.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/leaves.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Sustainable Approach</h2>
            <p className="text-lg text-gray-600">
              Every aspect of our practice is designed with environmental responsibility in mind. We're dedicated to continuous improvement in our environmental practices.
            </p>
          </div>

          {/* Sustainability Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Leaf, title: "Eco-Friendly Practices", benefits: ["Digital records & paperless office", "Reduced plastic waste", "Sustainable supply chain"] },
              { icon: FlaskConical, title: "Mercury-Free Materials", benefits: ["Safe amalgam removal", "Biocompatible alternatives", "Non-toxic treatments"] },
              { icon: Wind, title: "Energy-Efficient Design", benefits: ["LED lighting throughout", "Smart climate control", "Energy-saving equipment"] },
              { icon: TreePine, title: "Sustainable Partnerships", benefits: ["Ethical sourcing", "Long-lasting materials", "Local supplier priority"] },
              { icon: Recycle, title: "Waste Reduction", benefits: ["Comprehensive recycling", "Water conservation", "Eco-friendly sterilization"] }
            ].map((sustain, index) => (
              <Card key={index} className="p-8">
                <sustain.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{sustain.title}</h3>
                <ul className="space-y-3 text-gray-600">
                  {sustain.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#F8F7F5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience dental care that's better for you and better for the planet.
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Schedule Your Visit <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
}
