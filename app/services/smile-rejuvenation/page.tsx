"use client";

import { ArrowRight, Sparkles, Heart, Shield, Check, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SmileRejuvenationPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center hero-gradient">
        <div className="absolute inset-0 z-0">
        <img
            src="/images/lux/woman-profile-skin-rise-dental.jpeg" // Update this path to the path of your new image
            alt="Smile rejuvination at Rise Dental"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smile Rejuvenation
              <span className="block text-2xl md:text-3xl mt-4 font-normal">
                Natural, personalized smile enhancement that honors your unique features.
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
            <h2 className="text-4xl font-bold mb-6">Benefits of Holistic Smile Rejuvenation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience smile enhancement that prioritizes both aesthetics and overall wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <Sparkles className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Natural-Looking Results</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Customized to your features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Harmonious smile design</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Enhanced facial aesthetics</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Heart className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Conservative Approach</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Preserves natural tooth structure</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Minimally invasive techniques</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Long-lasting results</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Shield className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Biocompatible Materials</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Metal-free restorations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Non-toxic materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Allergy-friendly options</span>
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
                Customized solutions for your unique smile goals.
              </p>
            </div>

            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Biomimetic Bonding</h3>
                    <p className="text-gray-600">
                      Natural-looking composite restorations that mimic tooth structure while preserving maximum strength.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ceramic Veneers</h3>
                    <p className="text-gray-600">
                      Ultra-thin, metal-free porcelain restorations designed for minimal tooth reduction and maximum aesthetics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Alignment Optimization</h3>
                    <p className="text-gray-600">
                      Conservative orthodontic solutions to enhance smile harmony and function.
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
              Your journey to a naturally beautiful smile.
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
                    <h3 className="text-2xl font-bold mb-4">Smile Analysis</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Comprehensive facial assessment</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Digital smile design planning</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Treatment options discussion</span>
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
                    <h3 className="text-2xl font-bold mb-4">Preview & Planning</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>3D treatment visualization</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Material selection</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Treatment timeline review</span>
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
                    <h3 className="text-2xl font-bold mb-4">Smile Transformation</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Conservative preparation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Precise implementation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                        <span>Final refinements</span>
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
              Explore other services that complement smile rejuvenation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Digital Wellness Scans</h3>
              <p className="text-gray-600 mb-6">
                Advanced imaging for precise treatment planning and visualization.
              </p>
              <Button variant="outline" className="w-full btn-outline-square" asChild>
                <a href="/services/digital-wellness-scans">
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

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Sleep & Airway Optimization</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive treatment for TMJ and sleep-related concerns.
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
            <h2 className="text-4xl font-bold mb-6">Transform Your Smile Naturally</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to enhance your smile while maintaining optimal health? Schedule your consultation today.
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