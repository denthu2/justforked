"use client";

import { ArrowRight, Check, Clock, FileText, Microscope, Brain, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FirstVisitPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center hero-gradient">
        <div className="absolute inset-0 z-0">
        <img
      src="/images/textures/fresh-grapefruit-water-rise-dental.jpg"
      alt="Refreshing grapefruit water at Rise Dental"
      className="w-full h-full object-cover"
    />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your First Visit
              <span className="block text-2xl md:text-1xl mt-4 font-normal">A Whole-Body Approach to Modern Dental Health</span>
            </h1>
       
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90" asChild>
                <a href="/waitlist">Schedule Your First Visit</a>
              </Button>
              <Button variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Learn More About Our Modern Approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Welcome to Your Personalized Experience</h2>
            <p className="text-lg text-gray-600">
              A comprehensive, patient-centered approach from the moment you walk in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Concierge-Style Care</h3>
              <p className="text-gray-600">A dedicated team will guide you through every step of your visit.</p>
            </Card>

            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Relaxing, Intentional Space</h3>
              <p className="text-gray-600">Designed for comfort, clarity, and stress-free care.</p>
            </Card>

            <Card className="p-6">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
              <p className="text-gray-600">Every visit is customized to your health goals and needs.</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="btn-outline-square" asChild>
              <a href="/team">Meet Your Care Team <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Comprehensive Evaluation Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Evaluation</h2>
            <p className="text-lg text-gray-600">
              A deeper look into your health, using advanced diagnostics and Kois Methodology.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {/* {/* Step 1 */}
<Card className="p-8">
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0">
      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
        <span className="text-xl font-bold text-primary">1</span>
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4">Oral & Systemic Health Check</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We test your saliva to understand the balance of bacteria in your mouth, which can affect your overall health.</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We check the acidity of your saliva to see how well your teeth can fight off decay and stay strong.</span>
          </li>
        </ul>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We assess your gums for any signs of disease or inflammation.</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We examine the inside of your mouth to ensure there are no unusual growths or issues.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</Card>

{/* Step 2 */}
<Card className="p-8">
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0">
      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
        <span className="text-xl font-bold text-primary">2</span>
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4">Risk Assessment for Dental Health</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold mb-2">Biomechanical Risk</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
              <span className="text-gray-600">We look at your existing fillings and assess your risk for cavities.</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
              <span className="text-gray-600">We evaluate how likely your teeth are to crack or break.</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Periodontal Risk</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
              <span className="text-gray-600">We conduct a thorough check of your gum health.</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
              <span className="text-gray-600">We consider how your overall health might impact your oral health.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</Card>
{/* Step 3 */}
<Card className="p-8">
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0">
      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
        <span className="text-xl font-bold text-primary">3</span>
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4">Breathing & Sleep Health</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We use advanced 3D imaging to check your airway health, important for breathing and sleep.</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We evaluate your tongue position and nasal breathing, which are crucial for proper airway function.</span>
          </li>
        </ul>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We analyze any breathing-related sleep issues you may have, like sleep apnea.</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We assess habits that may affect your mouth and facial muscles, like thumb sucking or tongue thrusting.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</Card>

{/* Step 4 */}
<Card className="p-8">
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0">
      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
        <span className="text-xl font-bold text-primary">4</span>
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4">Restorative & Material Safety</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We evaluate whether your existing mercury fillings need safe removal according to strict health standards.</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We assess your sensitivity to dental metals to ensure we use materials that are safe and suitable for you.</span>
          </li>
        </ul>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We test the compatibility of various materials with your body to ensure they do not cause adverse reactions.</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
            <span className="text-gray-600">We review all your current restorations to ensure they are functioning well and do not pose any health risks.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</Card>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Planning Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Personalized Treatment Planning</h2>
            <p className="text-lg text-gray-600">Your health roadmap—built just for you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <FileText className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Kois Risk-Based Strategy</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Comprehensive risk assessment for all aspects of oral health</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Evidence-based treatment planning</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Clock className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Longevity-Focused Treatment</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Prevention-first approach to dental care</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Long-term solutions for lasting results</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Microscope className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">High-Tech Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Minimally invasive techniques</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Advanced digital dentistry</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Heart className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Integrative Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Coordination with wellness specialists</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Comprehensive care network</span>
                </li>
              </ul>
            </Card>
            

          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Your Next Steps</h2>
            <p className="text-lg text-gray-600">Your journey to optimal health starts today.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Review Your Treatment Plan</h4>
                    <p className="text-gray-600">We'll provide a clear, detailed plan outlining your next steps and treatment options.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Follow Preventive Recommendations</h4>
                    <p className="text-gray-600">Implement personalized care strategies for optimal oral-systemic health.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Schedule Follow-Up Care</h4>
                    <p className="text-gray-600">Book your next visits based on your customized care timeline.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Stay Connected</h4>
                    <p className="text-gray-600">Access our educational resources and join our wellness community.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <Button className="bg-primary text-white hover:bg-primary/90" asChild>
                  <a href="/waitlist">Schedule Your First Appointment <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}