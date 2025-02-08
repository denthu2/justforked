"use client";

import { ArrowRight, Scan as Scan3d, Brain, Shield, Check, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DigitalWellnessScansPage() {
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
              Digital Wellness Scans
              <span className="block text-2xl md:text-3xl mt-4 font-normal">
                Advanced diagnostics for early detection and optimal prevention.
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
            <h2 className="text-4xl font-bold mb-6">Benefits of Digital Wellness Scans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of state-of-the-art diagnostic imaging for comprehensive oral health assessment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <Scan3d className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Early Detection</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Identify issues before symptoms appear</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Detailed 3D visualization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Comprehensive screening</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Brain className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Precision Planning</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Accurate treatment mapping</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Predictable outcomes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Minimally invasive approach</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Shield className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Patient Safety</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Ultra-low radiation exposure</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Non-invasive diagnostics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Immediate results</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Overview Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Advanced Imaging Technology</h2>
              <p className="text-lg text-gray-600">
                State-of-the-art diagnostic tools for comprehensive oral health assessment.
              </p>
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">3D Cone Beam CT Scanning</h3>
                    <p className="text-gray-600">
                      High-resolution 3D imaging provides detailed views of your oral structures, enabling precise diagnosis and treatment planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Digital X-Rays</h3>
                    <p className="text-gray-600">
                      Ultra-low radiation digital imaging for detailed views with maximum safety and minimal exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Intraoral Scanning</h3>
                    <p className="text-gray-600">
                      High-precision digital impressions for comfortable, accurate treatment planning and restoration design.
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
              Your comprehensive digital wellness assessment journey.
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
                    <h3 className="text-2xl font-bold mb-4">Initial Consultation</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Review health history and concerns</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Discuss imaging needs</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Explain the process</span>
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
                    <h3 className="text-2xl font-bold mb-4">Digital Imaging</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Comfortable, quick scanning process</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Multiple imaging modalities</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Immediate image processing</span>
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
                    <h3 className="text-2xl font-bold mb-4">Comprehensive Review</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Detailed findings explanation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Treatment recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Preventive care planning</span>
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
              Explore other services that complement digital wellness scans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Minimally Invasive Cleanings</h3>
              <p className="text-gray-600 mb-6">
                Gentle, effective care that preserves your natural oral ecosystem.
              </p>
              <Button variant="outline" className="w-full btn-outline-square" asChild>
                <a href="/services/minimally-invasive-cleanings">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Saliva Testing</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive analysis of your oral microbiome for personalized care.
              </p>
              <Button variant="outline" className="w-full btn-outline-square" asChild>
                <a href="/services/saliva-testing">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Biomimetic Restorations</h3>
              <p className="text-gray-600 mb-6">
                Natural tooth restoration using advanced techniques and materials.
              </p>
              <Button variant="outline" className="w-full btn-outline-square" asChild>
                <a href="/services/biomimetic-restorations">
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
            <h2 className="text-4xl font-bold mb-6">Experience Advanced Diagnostics</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to benefit from state-of-the-art digital wellness scanning? Schedule your visit today.
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