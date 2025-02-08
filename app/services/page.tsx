"use client";

import { ArrowRight, Microscope, Bluetooth as Tooth, Leaf, Shield, Brain, Heart, MessageSquare, Sparkles, Target, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ServicesPage() {
  const serviceCategories = {
    preventive: {
      title: "Preventive & Diagnostic Care",
      description: "Advanced diagnostics and preventive treatments for optimal oral health.",
      icon: Microscope,
      services: [
        {
          title: "Digital Wellness Scans",
          description: "Advanced 3D imaging and diagnostics for early detection and prevention.",
          link: "/services/digital-wellness-scans"
        },
        {
          title: "Saliva Testing",
          description: "Comprehensive biomarker analysis for personalized care.",
          link: "/services/saliva-testing"
        },
        {
          title: "Minimally Invasive Cleanings",
          description: "Gentle, effective care that preserves your natural oral ecosystem.",
          link: "/services/minimally-invasive-cleanings"
        }
      ]
    },
    restorative: {
      title: "Restorative & Functional Dentistry",
      description: "Advanced solutions for damaged or missing teeth using biocompatible materials.",
      icon: Tooth,
      services: [
        {
          title: "Biomimetic Restorations",
          description: "Natural tooth restoration using advanced techniques and materials.",
          link: "/services/biomimetic-restorations"
        },
        {
          title: "Metal-Free Ceramic Implants",
          description: "Biocompatible tooth replacement with ceramic implants.",
          link: "/services/metal-free-ceramic-implants"
        },
        {
          title: "3D-Printed Restorations",
          description: "Same-day custom restorations using advanced digital technology.",
          link: "/services/3d-printed-restorations"
        }
      ]
    },
    biological: {
      title: "Biological & Holistic Dentistry",
      description: "Whole-body health, function & wellness-driven care for optimal vitality.",
      icon: Heart,
      services: [
        {
          title: "Safe Metal Removal",
          description: "Expert removal of mercury & metal restorations using SMART-certified protocols.",
          link: "/services/safe-metal-removal"
        },
        {
          title: "Ozone Therapy",
          description: "Natural sterilization & healing support for immune health.",
          link: "/services/ozone-therapy"
        },
        {
          title: "Laser Therapy",
          description: "Light-based treatment for pain relief, healing acceleration, and inflammation reduction.",
          link: "/services/laser-therapy"
        },
        {
          title: "Biological Surgery",
          description: "Minimally invasive procedures using biocompatible materials for safer healing.",
          link: "/services/biological-surgery"
        },
        {
          title: "Longevity-Based Wellness",
          description: "Care designed for long-term health, function, and prevention.",
          link: "/services/longevity-wellness"
        }
      ]
    },
    aesthetic: {
      title: "Aesthetic & Regenerative Dentistry",
      description: "Enhancing beauty while supporting biological function & longevity.",
      icon: Sparkles,
      services: [
        {
          title: "Smile Rejuvenation",
          description: "Subtle, natural enhancements tailored to your unique features.",
          link: "/services/smile-rejuvenation"
        },
        {
          title: "3D Smile Design",
          description: "Digital precision & customization for a balanced transformation.",
          link: "/services/3d-smile-design"
        },
        {
          title: "Minimally Invasive Cosmetic Solutions",
          description: "Enhancing beauty while preserving natural tooth structure.",
          link: "/services/minimally-invasive-cosmetics"
        }
      ]
    }
  };

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
            <source src="/videos/20250207_2132_Tranquil Dental Oasis_simple_compose_01jkhstf16fjz9m32ppz6n0scd.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Modern Dentistry, Designed for Longevity
              <span className="block text-2xl md:text-3xl mt-4 font-normal">
                Experience comprehensive care that prioritizes your long-term health and wellness.
              </span>
            </h1>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Schedule Your Visit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Rise Dental Difference</h2>
            <p className="text-lg text-gray-600">
              Experience dentistry that goes beyond traditional care, integrating advanced technology with holistic wellness principles.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <Sparkles className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Modern Technology</h3>
              <p className="text-gray-600 text-sm">Advanced solutions for precise, comfortable care.</p>
            </Card>

            <Card className="p-6">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Personalized Care</h3>
              <p className="text-gray-600 text-sm">Treatment plans tailored to your unique needs.</p>
            </Card>

            <Card className="p-6">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Long-Term Focus</h3>
              <p className="text-gray-600 text-sm">Solutions designed for lasting health and wellness.</p>
            </Card>

            <Card className="p-6">
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Holistic Approach</h3>
              <p className="text-gray-600 text-sm">Comprehensive care for total body wellness.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {Object.entries(serviceCategories).map(([key, category]) => (
        <section key={key} className="py-24 bg-[#F8F7F5] last:bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <category.icon className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
              <p className="text-lg text-gray-600">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.services.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <a href={service.link} className="block p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex items-center text-primary">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Dental Experience?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of patients who've discovered a better approach to dental wellness.
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