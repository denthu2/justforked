"use client";

import { ArrowRight, Check, Crown, Star, Calendar, Gift, Users, Sparkles, Heart, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MembershipPage() {
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
            <source src="/videos/tranquil rise dental spa inset shelving waiting room spacious.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Crown className="h-5 w-5 mr-2" />
              <span className="font-medium">The Rise Wellness Club</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              VIP Care, Personalized for You
              <span className="block text-2xl md:text-3xl mt-4 font-normal">
                A membership designed for those who value premium care and an effortless patient experience.
              </span>
            </h1>
            <Button className="bg-primary text-white hover:bg-primary/90" asChild>
              <a href="#plans">Join the Rise Wellness Club <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Exclusive Benefits Tailored for You</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience a new standard in dental care with benefits designed for optimal wellness and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <Calendar className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Priority Scheduling & Extended Appointments</h3>
              <p className="text-gray-600 mb-6">Never feel rushed; enjoy unhurried, high-touch care with appointments that fit your schedule.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Preferred appointment times</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Extended visit durations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Same-day emergency care</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Gift className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Exclusive Pricing on Premium Treatments</h3>
              <p className="text-gray-600 mb-6">Members receive preferred rates on select services and exclusive access to special offers.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Member-only discounts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Wellness package savings</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Family plan benefits</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Brain className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Annual Wellness Assessments</h3>
              <p className="text-gray-600 mb-6">Comprehensive evaluations and personalized treatment plans for optimal health.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Detailed health analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Custom care roadmap</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Progress tracking</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">VIP Access to Events & Workshops</h3>
              <p className="text-gray-600 mb-6">Priority registration for expert-led health and wellness workshops.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Early event access</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Exclusive workshops</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Community gatherings</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Heart className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Dedicated Membership Concierge</h3>
              <p className="text-gray-600 mb-6">Your personal point of contact for seamless communication and care coordination.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Direct communication</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Priority response</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>Care coordination</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="plans" className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Choose Your Wellness Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the membership tier that best aligns with your wellness goals and desired level of care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Core Wellness Plan */}
            <Card className="relative p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Core Wellness Plan</h3>
                <p className="text-gray-600">Essential preventive care with baseline membership benefits.</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">2 Professional cleanings per year</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">1 Comprehensive exam & wellness evaluation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">10% off most basic treatments</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Wellness workshops access</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full btn-outline-square">
                Join Core Wellness <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>

            {/* Thrive Care Plan */}
            <Card className="relative p-8 border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 text-sm font-medium">Most Popular</span>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Thrive Care Plan</h3>
                <p className="text-gray-600">Expanded benefits for an integrative approach.</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$79</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Everything in Core Wellness Plan</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">15% off select adjunctive treatments</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">1 Complementary limited exam visit</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Basic biocompatibility testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Early access to wellness workshops</span>
                </li>
              </ul>

              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Join Thrive Care <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>

            {/* Flourish Wellness Plan */}
            <Card className="relative p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Flourish Wellness Plan</h3>
                <p className="text-gray-600">Premium care for optimal wellness.</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$129</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Everything in Thrive Care Plan</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">20% off select adjunctive treatments</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">2 Complementary limited exam visits</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">Comprehensive biocompatibility testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span className="text-gray-600">First-priority event access</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full btn-outline-square">
                Join Flourish Wellness <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/leaves.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">More Than a Membership—A Commitment to Lifelong Wellness</h2>
              <p className="text-lg text-gray-600">
                Join a community dedicated to optimal health through holistic care and preventive wellness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Membership?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 mr-3" />
                    <div>
                      <p className="font-semibold">Smarter Prevention, Better Outcomes</p>
                      <p className="text-gray-600">Stay ahead of oral-systemic risks with personalized tracking and preventive care.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 mr-3" />
                    <div>
                      <p className="font-semibold">Save on High-Quality Care</p>
                      <p className="text-gray-600">Reduce long-term costs with exclusive pricing and proactive treatment planning.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 mr-3" />
                    <div>
                      <p className="font-semibold">Seamless & Stress-Free</p>
                      <p className="text-gray-600">No surprises, no rushed visits—just high-quality care at your pace.</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Beyond Traditional Insurance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 mr-3" />
                    <div>
                      <p className="font-semibold">No Deductibles, No Surprises</p>
                      <p className="text-gray-600">Straightforward pricing with clear benefits and no hidden fees.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 mr-3" />
                    <div>
                      <p className="font-semibold">Personalized & Preventive-Focused</p>
                      <p className="text-gray-600">Designed for health optimization, not just reactive care.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 mr-3" />
                    <div>
                      <p className="font-semibold">More Value, Less Hassle</p>
                      <p className="text-gray-600">Direct, high-quality care without insurance limitations.</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/*<section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Our Patients Love Their Membership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our community of satisfied members experiencing the benefits of premium dental wellness care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="flex text-primary mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "The priority scheduling alone makes this membership worth it! No wait times, just exceptional care."
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
                  <p className="text-sm text-gray-500">Member since 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex text-primary mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "I love the holistic approach—every visit is tailored to me, not just a standard cleaning."
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
                  <p className="text-sm text-gray-500">Member since 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex text-primary mb-4">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
              <p className="text-gray-600 mb-6">
                "The events and workshops are an amazing bonus. I've learned so much about my health!"
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
                  <p className="text-sm text-gray-500">Member since 2024</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>*/}

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Experience a Higher Standard of Dental Wellness</h2>
            <p className="text-lg text-gray-600 mb-8">
              Choose a membership that aligns with your health goals and enjoy premium care that lasts a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Join Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-outline-square">
                Compare Membership Plans
              </Button>
              <Button variant="outline" className="btn-outline-square">
                Ask a Question
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}