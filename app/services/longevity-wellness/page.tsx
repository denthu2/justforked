"use client";

import { ArrowRight, Hourglass, Brain, Shield, Check, MessageSquare, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function LongevityWellnessPage() {
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
              Longevity-Based Wellness
              <span className="block text-2xl md:text-3xl mt-4 font-normal">
                A proactive approach to dental care designed for lifelong health and vitality.
              </span>
            </h1>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Schedule Your Visit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Benefits of Longevity-Based Care</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience a comprehensive approach that prioritizes prevention and long-term wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <Hourglass className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Preventive Focus</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Early risk detection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Proactive interventions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Minimized future issues</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Brain className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Whole-Body Health</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Systemic health integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Inflammation reduction</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Enhanced immune function</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Personalized Strategy</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Custom wellness plans</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Risk-based approach</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Ongoing optimization</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Longevity Approach</h2>
              <p className="text-lg text-gray-600">
                A comprehensive strategy for lasting oral health and overall wellness.
              </p>
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Risk Assessment & Prevention</h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation of oral health risks and personalized prevention strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Biocompatible Solutions</h3>
                    <p className="text-gray-600">
                      Use of materials and treatments that support your body's natural healing processes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Wellness Integration</h3>
                    <p className="text-gray-600">
                      Coordination with other healthcare providers for comprehensive care.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/leaves.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">The Process</h2>
            <p className="text-lg text-gray-600">
              Your journey to optimal health and longevity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Comprehensive Assessment</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Digital wellness scanning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Biomarker testing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Health history analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Personalized Planning</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Risk-based strategy development</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Treatment prioritization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Lifestyle recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Ongoing Optimization</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Regular wellness monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Plan adjustments</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Progress tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Related Services</h2>
            <p className="text-lg text-gray-600">
              Explore other services that support your longevity journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Digital Wellness Scans</h3>
              <p className="text-gray-600 mb-6">
                Advanced diagnostics for early detection and prevention.
              </p>
              <Button variant="outline" className="w-full btn-outline-square" asChild>
                <a href="/services/digital-wellness-scans">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Saliva Testing</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive biomarker analysis for personalized care.
              </p>
              <Button variant="outline" className="w-full btn-outline-square" asChild>
                <a href="/services/saliva-testing">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Sleep & Airway Optimization</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive treatment for optimal breathing and rest.
              </p>
              <Button variant="outline" className="w-full btn-outline-square" asChild>
                <a href="/services/sleep-airway">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Invest in Your Long-Term Health</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to start your journey to optimal wellness? Schedule your consultation today.
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