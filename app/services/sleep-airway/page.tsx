"use client";

import { ArrowRight, Moon, Brain, Shield, Check, MessageSquare, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SleepAirwayPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center hero-gradient">
        <div className="absolute inset-0 z-0">
        <img
            src="/images/textures/serene-cotton-branch-display-rise-dental.jpeg" // Update this path to the path of your new image
            alt="Sleep and airway screening at Rise Dental"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sleep & Airway Optimization
              <span className="block text-2xl md:text-3xl mt-4 font-normal">
                Comprehensive solutions for better breathing, sleep, and overall wellness.
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
            <h2 className="text-4xl font-bold mb-6">Benefits of Sleep & Airway Treatment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience comprehensive care that addresses the root cause of sleep and breathing issues.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <Moon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Better Sleep Quality</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Reduced sleep apnea symptoms</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Improved sleep patterns</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Enhanced daytime energy</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Brain className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Optimal Breathing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Enhanced airway function</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Improved oxygen levels</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Better cognitive function</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Zap className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">TMJ Relief</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Reduced jaw pain</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Improved jaw function</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Headache relief</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Treatment Options</h2>
              <p className="text-lg text-gray-600">
                Personalized solutions for your unique sleep and airway needs.
              </p>
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Airway Analysis & Optimization</h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation and treatment of breathing patterns and airway restrictions using advanced 3D imaging.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sleep Appliance Therapy</h3>
                    <p className="text-gray-600">
                      Custom-designed oral appliances to maintain optimal airway positioning during sleep.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">TMJ & Facial Pain Treatment</h3>
                    <p className="text-gray-600">
                      Integrated approach to addressing jaw pain, headaches, and related symptoms.
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
              Your journey to better sleep and breathing.
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
                        <span>3D airway analysis</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Sleep breathing evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>TMJ examination</span>
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
                    <h3 className="text-2xl font-bold mb-4">Personalized Treatment Plan</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Custom appliance design</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Integrated therapy approach</span>
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
                    <h3 className="text-2xl font-bold mb-4">Ongoing Support & Monitoring</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Regular progress checks</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Appliance adjustments</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Long-term wellness support</span>
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
              Explore other services that complement sleep and airway optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Digital Wellness Scans</h3>
              <p className="text-gray-600 mb-6">
                Advanced imaging for comprehensive airway analysis.
              </p>
              <Button variant="outline" className="w-full btn-outline-square" asChild>
                <a href="/services/digital-wellness-scans">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Holistic Dentistry</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive approach to oral and overall wellness.
              </p>
              <Button variant="outline" className="w-full btn-outline-square" asChild>
                <a href="/services/holistic">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Preventive Care</h3>
              <p className="text-gray-600 mb-6">
                Proactive treatments for long-term health maintenance.
              </p>
              <Button variant="outline" className="w-full btn-outline-square" asChild>
                <a href="/services/preventive">
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
            <h2 className="text-4xl font-bold mb-6">Start Your Journey to Better Sleep</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to address your sleep and breathing concerns? Schedule your consultation today.
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