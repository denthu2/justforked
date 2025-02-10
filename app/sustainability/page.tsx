"use client";

import { ArrowRight, Leaf, Recycle, Wind, TreePine, Shield, FlaskConical, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SustainabilityPage() {
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
              Conscious Care for a Healthier Future
              <span className="block text-2xl md:text-3xl mt-4 font-normal">
                We believe in doing better—for you, for the planet, and for the future of dentistry.
              </span>
            </h1>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Learn More About Our Commitment <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability Practices Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/leaves.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Sustainable Approach</h2>
            <p className="text-lg text-gray-600">
              Every aspect of our practice is designed with environmental responsibility in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <Leaf className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Eco-Friendly Practices</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Digital records & paperless office</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Reduced plastic waste initiatives</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Sustainable supply chain</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <FlaskConical className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Mercury-Free Materials</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Safe amalgam removal protocols</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Biocompatible alternatives</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Non-toxic treatment options</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Wind className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Energy-Efficient Design</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>LED lighting throughout</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Smart climate control</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Energy-saving equipment</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <TreePine className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Sustainable Partnerships</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Ethical sourcing practices</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Long-lasting materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Local supplier priority</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Shield className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Minimally Invasive Care</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Preserve natural structure</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Preventive focus</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Reduced waste in procedures</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Recycle className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Waste Reduction</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Comprehensive recycling program</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Water conservation measures</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Eco-friendly sterilization</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Environmental Impact</h2>
            <p className="text-lg text-gray-600">
              Making a measurable difference through sustainable practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <h3 className="text-xl font-bold mb-4">Digital Records</h3>
              <p className="text-gray-600">Reduction in paper waste through digital transformation</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <h3 className="text-xl font-bold mb-4">LED Lighting</h3>
              <p className="text-gray-600">Energy-efficient lighting throughout our facility</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <h3 className="text-xl font-bold mb-4">Waste Recycled</h3>
              <p className="text-gray-600">Of eligible materials recycled or properly disposed</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Commitment to the Future</h2>
              <p className="text-lg text-gray-600">
                We're dedicated to continuous improvement in our environmental practices.
              </p>
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ongoing Education</h3>
                    <p className="text-gray-600">
                      Regular team training on sustainable practices and environmental stewardship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community Leadership</h3>
                    <p className="text-gray-600">
                      Setting an example for sustainable healthcare practices in our community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
                    <p className="text-gray-600">
                      Staying current with the latest eco-friendly dental technologies and practices.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience dental care that's better for you and better for the planet.
            </p>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Schedule Your Visit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}