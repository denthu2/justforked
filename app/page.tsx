"use client";

import { ArrowRight, Sparkles, Heart, Shield, Clock, Microscope, Bluetooth as Tooth, Leaf, Crown, Star, Check, Calendar, MessageSquare, Phone, Hourglass, Target, Recycle, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center hero-gradient">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/20250207_2139_Serene Spa Lounge_simple_compose_01jkht7341fw8syamjz8rypmbc.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Austin&apos;s Premier
              <span className="block">Dental Wellness</span>
              <span className="block">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Your Invitation to Longevity and Good Health Starts Here.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90" asChild>
                <a href="/waitlist">Join The Waitlist</a>
              </Button>
              <Button variant="outline" className="bg-white/90 text-primary border-primary hover:bg-primary hover:text-white">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Rise Dental: Where Wellness Meets Simplicity</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Rise Dental, wellness isn’t an abstract ideal—it’s a practical, intentional approach to lifelong health. We bridge the gap between traditional dentistry and modern care, making it easy to take meaningful steps toward better health.


            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-outline p-6">
              <Sparkles className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Innovative Technology</h3>
              <p className="text-gray-600">
                State-of-the-art equipment and modern techniques for precise, comfortable care.
              </p>
            </Card>

            <Card className="card-outline p-6">
              <Heart className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
              <p className="text-gray-600">
                Treatment plans that consider your overall health and wellness journey.
              </p>
            </Card>

            <Card className="card-outline p-6">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Care</h3>
              <p className="text-gray-600">
                From preventive care to advanced treatments, all in one luxurious setting.
              </p>
            </Card>
          </div>
        </div>
      </section>
{/* Services Section */}
<section className="py-20 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Modern Dentistry, Designed for Life</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience comprehensive dental care that focuses on your long-term health and wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-outline overflow-hidden group">
              <div className="relative h-48">
              <img
      src="/images/happy/happy-healthy-family-grandpa-grandson-kid-rise-dental.jpg"  // Change this to the path of your image
      alt="Preventive Care"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
                <div className="absolute inset-0 bg-black/20"></div>
                <Microscope className="absolute top-4 left-4 h-8 w-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Preventive Care</h3>
                <ul className="space-y-2 mb-4 text-gray-600">
                  <li>• Gentle Cleanings</li>
                  <li>• Low-dose X-rays</li>
                  <li>• Fluoride-Free Treatments</li>
                  <li>• Custom Bite Guards</li>
                  
                </ul>
                <Button variant="outline" className="btn-outline-square w-full group-hover:bg-primary group-hover:text-white">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="card-outline overflow-hidden group">
  <div className="relative h-48">
    <img
      src="/images/dental/molar-zirconia-crown-rise-dental.jpg"  // Change this to the path of your image
      alt="Dental Treatments"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/20"></div>
    <Tooth className="absolute top-4 left-4 h-8 w-8 text-white" />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">Dental Treatments</h3>
    <ul className="space-y-2 mb-4 text-gray-600">
      <li>• Fillings & Crowns</li>
      <li>• Cosmetic Dentistry</li>
      <li>• Invisalign</li>
      <li>• Dental Implants</li>
      <li>• Dental Emergencies</li>
    </ul>
    <Button variant="outline" className="btn-outline-square w-full group-hover:bg-primary group-hover:text-white">
      Learn More <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </div>
</Card>


            <Card className="card-outline overflow-hidden group">
              <div className="relative h-48">
              <img
      src="/images/happy/woman-happy-hair-rise-dental.jpg"  // Change this to the path of your image
      alt="Specialty Treatments"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
                <div className="absolute inset-0 bg-black/20"></div>
                <Leaf className="absolute top-4 left-4 h-8 w-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Speciality Treatments</h3>
                <ul className="space-y-2 mb-4 text-gray-600">
                  <li>• Safe Mercury Removal (SMART)</li>
                  <li>• Laser Therapy</li>
                  <li>• Ozone Therapy</li>
                  <li>• Biological Surgery</li>
                 </ul>
                <Button variant="outline" className="btn-outline-square w-full group-hover:bg-primary group-hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

{/* Testimonials Section */}
{/* <section className="testimonials-gradient py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by patients who value quality, longevity, and a health-first approach.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community of satisfied patients who've experienced the difference of our holistic approach to dental wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="card-outline p-8 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="flex text-primary">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "A truly personalized experience, unlike any dental visit I've had before. The team takes time to understand your overall health goals."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                    alt="Sarah M."
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-gray-500">Verified Patient</p>
                </div>
              </div>
            </Card>

            <Card className="card-outline p-8 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="flex text-primary">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The team takes time to explain everything and customize my care plan. Their holistic approach has made a real difference in my overall health."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                    alt="Michael R."
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Michael R.</p>
                  <p className="text-sm text-gray-500">Verified Patient</p>
                </div>
              </div>
            </Card>

            <Card className="card-outline p-8 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="flex text-primary">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "High-tech, modern, and sustainability-focused—it's the future of dentistry. I appreciate their commitment to using eco-friendly practices."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
                    alt="Emily L."
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Emily L.</p>
                  <p className="text-sm text-gray-500">Verified Patient</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              <Button variant="outline" className="btn-outline-square gap-2">
                <Star className="h-5 w-5" />
                Read Our 5-Star Google Reviews
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
*\}
      

      {/* The Rise Difference Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/ginkowallpaper.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Rise Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience a new standard in dental care where modern science meets practical wellness solutions. We make optimal health achievable through clear guidance, innovative care, and sustainable practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-outline-contrast p-8 relative group hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-[#EBDAC6] flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Concierge-Style Care</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>A dedicated team stays with you throughout your visit – no handoffs, no rushing.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Seamless, stress-free experience with personalized attention from start to finish.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Designed to feel familiar and intentional, so you always know what to expect.</span>
                </li>
              </ul>
            </Card>

            <Card className="card-outline-contrast p-8 relative group hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-[#EBDAC6] flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Precision-Driven Treatment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>No cookie-cutter dentistry – your treatment is designed around your unique health profile & goals.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Advanced diagnostics & technology for the most precise, predictable outcomes.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Evidence-based protocols – integrating the best of modern and wellness-driven dentistry.</span>
                </li>
              </ul>
            </Card>

            <Card className="card-outline-contrast p-8 relative group hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-[#EBDAC6] flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Technology-Enhanced Experience</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Effortless digital integration – seamless scheduling, digital forms, and patient portals.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>AI-assisted diagnostics – precision-driven care with smart technology.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Constant innovation – always evolving to enhance your experience.</span>
                </li>
              </ul>
            </Card>

<Card className="card-outline-contrast p-8 relative group hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-[#EBDAC6] flex items-center justify-center mb-6">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainable, Science-Backed Approach</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Biocompatible, non-toxic materials – protecting your health and the planet.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Eco-conscious design & responsible techniques for a lower environmental impact.
</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Cutting-edge, future-forward care – always innovating for safer, smarter treatment.
</span>
                </li>
              </ul>
            </Card>
            
            <Card className="card-outline-contrast p-8 relative group hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-[#EBDAC6] flex items-center justify-center mb-6">
                <Hourglass className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Designed for Longevity</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>More than just fixing issues—our focus is prevention & optimization.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Sustainable health habits & wellness-driven care for lasting vitality.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Minimally invasive, high-impact solutions designed to preserve your smile for life.</span>
                </li>
              </ul>
            </Card>

            <Card className="card-outline-contrast p-8 relative group hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-[#EBDAC6] flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Education & Empowerment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Wellness workshops & patient education events – so you can take charge of your health.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Transparent guidance on treatment options – no confusing medical jargon.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Ongoing support beyond the chair – because true wellness happens every day.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>


      {/* Membership Section */}
      <section className="py-24 membership-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#EBDAC6] text-primary">
                  <Crown className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Rise Wellness Club</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">VIP Care, Personalized for You</h2>
                <p className="text-lg text-gray-600">
                  Our membership program is designed to make high-quality, whole-body dentistry accessible, seamless, and rewarding.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">Priority scheduling and extended appointments</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">Complimentary wellness consultations</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="ml-3 text-gray-600">Exclusive member events and education sessions</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="btn-outline-square"><a href="/membership">
                    Join the Rise Wellness Club</a> <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-[#EBDAC6] transform -rotate-2"></div>
                <Card className="card-outline-contrast relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <Star className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-2xl font-bold">Core Wellness Membership</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Starting at</div>
                      <div className="text-3xl font-bold text-primary">$49/mo</div>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-600">
                      Unlock exclusive benefits and prioritized care with our premium membership program.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        2 Professional cleanings per year
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        Annual comprehensive exam
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        15% off additional treatments
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        Wellness workshops access
                      </li>
                    </ul>
                  </div>
                  <Button variant="outline" className="btn-outline-square w-full"><a href="/membership">
                    Learn More</a>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Events Section */}
      {/* <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Empowering Wellness Through Education & Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community events focused on holistic health, wellness education, and creating lasting connections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-outline group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
                  alt="Facial Acupuncture Workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">March 15</div>
                  <div className="text-xl">Facial Acupuncture Workshop</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Learn about the benefits of facial acupuncture for dental wellness and overall health.</p>
                <Button variant="outline" className="btn-outline-square w-full group-hover:bg-primary group-hover:text-white">
                  Reserve Spot
                </Button>
              </div>
            </Card>

            <Card className="card-outline group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80"
                  alt="TMJ Relief Class"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">March 22</div>
                  <div className="text-xl">TMJ & Facial Tension Relief</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Discover techniques for managing TMJ pain and relieving facial tension naturally.</p>
                <Button variant="outline" className="btn-outline-square w-full group-hover:bg-primary group-hover:text-white">
                  Reserve Spot
                </Button>
              </div>
            </Card>

            <Card className="card-outline group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80"
                  alt="Nutrition Seminar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-semibold">March 29</div>
                  <div className="text-xl">Nutrition for Dental Health</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Explore the connection between nutrition and optimal dental health.</p>
                <Button variant="outline" className="btn-outline-square w-full group-hover:bg-primary group-hover:text-white">
                  Reserve Spot
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="btn-outline-square">
            <a href="/events">
              View All Events</a><ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
  </section> */}

      {/* Final CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/leaves.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Experience dentistry with intention.</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Whether you're a first-time wellness patient or looking for a new dental experience, we make things simple, clear, and seamless.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="card-outline p-8">
                <Phone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Schedule a Visit</h3>
                <p className="text-gray-600 mb-6">Join our priority waitlist to be among the first to experience our wellness-focused approach.</p>
                <Button className="bg-primary text-white hover:bg-primary/90 w-full" asChild>
                  <a href="/waitlist">Join The Waitlist</a>
                </Button>
              </Card>

              <Card className="card-outline p-8">
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Have Questions?</h3>
                <p className="text-gray-600 mb-6">Our team is here to help answer any questions about your dental wellness journey.</p>
                <Button variant="outline" className="btn-outline-square w-full">
                  Message Us
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Dental Experience?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Be the first to experience Rise Dental. Join the waitlist today for early booking access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-white hover:bg-primary/90" asChild>
                <a href="/waitlist">Join The Waitlist</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}