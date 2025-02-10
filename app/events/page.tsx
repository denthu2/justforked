"use client";

import { ArrowRight, Calendar, Clock, Users, Star, Check, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center hero-gradient">
        <div className="absolute inset-0 z-0">
        <img
            src="/images/doingthings/group-activity-event-rise-dental.jpg" // Update this path to the path of your new image
            alt="Group activity and events and workshops at rise dental"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bringing Wellness & Community Together
              <span className="block text-2xl md:text-3xl mt-4 font-normal">
                Expert-led workshops and hands-on events designed to elevate your health and longevity.
              </span>
            </h1>
            <Button className="bg-primary text-white hover:bg-primary/90">
              View Upcoming Events <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Upcoming Events & Workshops</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our expert-led sessions designed to enhance your understanding of holistic health and wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Facial Acupuncture Workshop */}
            <Card className="overflow-hidden group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80"
                  alt="Facial Acupuncture Workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Facial Acupuncture Workshop</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>March 15, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>6:00 PM - 7:30 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Dr. Todd Janey</span>
                  </div>
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Reserve Your Spot <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>

            {/* TMJ & Facial Tension Relief Class */}
            <Card className="overflow-hidden group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80"
                  alt="TMJ & Facial Tension Relief Class"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">TMJ & Facial Tension Relief Class</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>March 22, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>5:30 PM - 7:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Mark Thompson</span>
                  </div>
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Reserve Your Spot <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>

            {/* Nutrition for Dental Health Seminar */}
            <Card className="overflow-hidden group">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80"
                  alt="Nutrition for Dental Health Seminar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Nutrition for Dental Health Seminar</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>March 29, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>6:30 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Dr. Sarah Williams</span>
                  </div>
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Reserve Your Spot <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Join Our Events?</h2>
            <p className="text-lg text-gray-600">
              Experience the benefits of our comprehensive approach to wellness education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Expert-Led Education</h3>
              <p className="text-gray-600">Learn directly from specialists in holistic health and longevity.</p>
            </Card>

            <Card className="p-8">
              <MessageSquare className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Hands-On & Interactive</h3>
              <p className="text-gray-600">Engage in workshops that provide real, practical takeaways.</p>
            </Card>

            <Card className="p-8">
              <Star className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Integrative Wellness</h3>
              <p className="text-gray-600">Understand how oral health impacts your entire body.</p>
            </Card>

            <Card className="p-8">
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Community & Connection</h3>
              <p className="text-gray-600">Meet like-minded individuals who prioritize long-term health.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/leaves.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Attendees Are Saying</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from participants who've experienced the value of our wellness events.
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
                "I never realized how much my jaw tension affected my migraines until I attended the TMJ workshop. A game-changer!"
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
                  <p className="text-sm text-gray-500">TMJ Workshop Attendee</p>
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
                "The nutrition seminar completely changed my perspective on food's role in oral health. So informative!"
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
                  <p className="text-sm text-gray-500">Nutrition Seminar Attendee</p>
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
                "Rise Dental's events make learning about wellness engaging and practical. Can't wait for the next one!"
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
                  <p className="text-sm text-gray-500">Regular Event Attendee</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section className="py-24 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Ready to Join? Here's How:</h2>
            <p className="text-lg text-gray-600">
              Three simple steps to secure your spot at our next event.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Select Your Event</h4>
                    <p className="text-gray-600">Browse our upcoming workshops and find one that interests you.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Reserve Your Spot</h4>
                    <p className="text-gray-600">Secure your place online with a simple registration.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Show Up & Learn</h4>
                    <p className="text-gray-600">Engage with experts, participate in hands-on activities, and leave with valuable insights.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Invest in Your Health Through Education & Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us for a workshop that empowers you to take control of your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-white hover:bg-primary/90">
                View All Events <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-outline-square">
                Reserve Your Spot <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="btn-outline-square">
                Become a Member for VIP Access <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}