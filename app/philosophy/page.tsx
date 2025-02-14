"use client";

import { 
  ArrowRight, Leaf, Recycle, Wind, TreePine, Shield, FlaskConical, Check 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RisePhilosophy() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center hero-gradient">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/textures/sunset-rocky-texture-rise-dental.jpg"
            alt="Sunset Rocky Texture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Rise Philosophy
              <span className="block text-2xl md:text-3xl mt-4 font-normal">
              Integrating wellness, sustainability, and exceptional care to create lasting impact.
              </span>
            </h1>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
{/* Our Philosophy */}
<section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Heart of Rise</h2>
            <p className="text-lg text-gray-600">
              We believe that true health starts with connection—to ourselves, to others, and to the world around us. This connection is the foundation of vitality, empowering us to live with purpose, energy, and well-being.
            </p>
          </div>

          <Card className="p-8 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Rise Dental is an inclusive community dedicated to meaningful relationships. Through a personalized, integrative approach to dentistry, we support you in reaching your highest state of wellness.
            </p>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Guiding Principles</h2>
            <p className="text-lg text-gray-600">
              These values shape every decision we make, keeping us aligned with our mission and the patients we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Check, title: "Honesty & Authenticity", description: "Clear, evidence-based care—never swayed by trends or outside pressure." },
              { icon: FlaskConical, title: "Excellence in Care", description: "A commitment to high-quality care that makes a meaningful, lasting impact." },
              { icon: Wind, title: "Continuous Growth", description: "We embrace learning and innovation to provide the best for our patients." },
              { icon: TreePine, title: "Practical Wellness", description: "Health and well-being should be simple, actionable, and easy to integrate into daily life." },
              { icon: Leaf, title: "Compassion & Sustainability", description: "We foster a kind, supportive environment while prioritizing sustainable practices." },
              { icon: Shield, title: "Whole-Body Approach", description: "Oral health is deeply connected to overall wellness, and we integrate both seamlessly." }
            ].map((value, index) => (
              <Card key={index} className="p-8">
                <value.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Conscious Care</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your health, your community, and the planet deserve thoughtful care. Experience the future of sustainable, patient-centered dentistry.
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Schedule Your Visit <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
}
