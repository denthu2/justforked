"use client";

import { useState } from 'react';
import { ArrowRight, Plus, Minus, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "About Rise Dental",
    items: [
      {
        question: "What makes Rise Dental different from other dental practices?",
        answer: "We take a concierge-style, longevity-focused approach, blending modern technology, holistic principles, and sustainable dentistry. Our practice is built on the foundation of personalized care, using advanced diagnostics and biocompatible materials while maintaining a strong commitment to environmental sustainability."
      },
      {
        question: "Are you a corporate dental practice?",
        answer: "No! We are independently owned and founded by dentists who prioritize patient care, not business quotas. This allows us to focus on providing the highest quality care without corporate pressures or standardized treatment protocols."
      },
      {
        question: "What does 'concierge-style dentistry' mean?",
        answer: "It means you'll see the same trusted team at every visit, enjoy longer appointment times, and receive completely personalized care tailored to your health goals. We prioritize building lasting relationships and ensuring each visit is unhurried and focused entirely on your needs."
      }
    ]
  },
  {
    title: "Services & Treatments",
    items: [
      {
        question: "Do you offer metal-free or biocompatible treatments?",
        answer: "Yes! We use biocompatible, non-toxic materials and offer ceramic implants, BPA-free fillings, and ozone therapy. All materials are carefully selected and tested for compatibility to ensure optimal health outcomes."
      },
      {
        question: "Do you provide alternatives to traditional root canals?",
        answer: "We prioritize preservation and offer biomimetic restorations and ozone therapy. For cases requiring extractions, we focus on optimal healing options and provide comprehensive guidance on the best treatment path for your specific situation."
      },
      {
        question: "What is a Digital Wellness Scan?",
        answer: "It's an advanced diagnostic tool that helps detect oral-systemic health risks before they become major concerns. This comprehensive scanning technology allows us to identify potential issues early and create more effective, preventive treatment plans."
      },
      {
        question: "Do you offer cosmetic dentistry?",
        answer: "Yes! We specialize in natural-looking smile enhancements that complement your features while preserving your health. Our approach focuses on conservative treatments that maintain the integrity of your natural teeth."
      }
    ]
  },
  {
    title: "The Mouth-Body Connection",
    items: [
      {
        question: "How does my oral health impact my overall health?",
        answer: "Your mouth is the gateway to your entire body. Poor oral health has been linked to heart disease, diabetes, and even cognitive decline. We take a whole-body approach to optimize your well-being, understanding that dental health is a crucial component of your overall wellness journey."
      },
      {
        question: "Do you offer saliva testing?",
        answer: "Yes! Saliva testing helps us analyze your microbiome, inflammation markers, and risk factors for systemic diseases. This valuable diagnostic tool provides insights into your overall health and helps us create more targeted treatment plans."
      }
    ]
  },
  {
    title: "Patient Experience & Appointments",
    items: [
      {
        question: "How do I book an appointment?",
        answer: "Easily book online through our website, call our office, or use our concierge scheduling for members. Our team is dedicated to finding appointment times that work best for your schedule."
      },
      {
        question: "Do you offer virtual consultations?",
        answer: "Yes! We offer telehealth consultations for treatment planning and wellness discussions. This convenient option allows you to discuss your concerns and treatment options from the comfort of your home."
      },
      {
        question: "What should I expect during my first visit?",
        answer: "We start with a comprehensive evaluation, digital wellness scan, and a deep dive into your health history to create a truly customized plan. Your first visit is an opportunity for us to understand your health goals and create a personalized roadmap for your dental wellness journey."
      }
    ]
  },
  {
    title: "Membership & Financial Information",
    items: [
      {
        question: "What is the Rise Wellness Club?",
        answer: "It's our exclusive membership program offering priority scheduling, discounted premium treatments, and VIP access to wellness events. Members enjoy a range of benefits designed to make high-quality dental care more accessible and rewarding."
      },
      {
        question: "Do you accept dental insurance?",
        answer: "We are out-of-network for most providers, but we assist with claim submissions and offer flexible payment options. Our team will help you maximize your benefits while providing transparent pricing and payment solutions."
      },
      {
        question: "What payment options do you offer?",
        answer: "We accept major credit cards, HSAs, FSAs, and provide financing options through trusted partners. Our goal is to make quality dental care accessible through flexible payment solutions that work for you."
      }
    ]
  }
];

export default function FAQPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your answers to the most common questions about our care, philosophy, and services.
            </p>
            <Button className="bg-primary text-white hover:bg-primary/90" asChild>
              <a href="#contact">Still have questions? Contact Us <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqSections.map((section) => (
              <Card key={section.title} className="mb-6 overflow-hidden">
                <button
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleSection(section.title)}
                >
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  {openSections[section.title] ? (
                    <Minus className="h-6 w-6 text-primary" />
                  ) : (
                    <Plus className="h-6 w-6 text-primary" />
                  )}
                </button>
                
                {openSections[section.title] && (
                  <div className="px-6 pb-6">
                    {section.items.map((item, index) => (
                      <div key={index} className="border-t first:border-t-0 py-4">
                        <button
                          className="w-full flex items-center justify-between text-left"
                          onClick={() => toggleQuestion(item.question)}
                        >
                          <h3 className="text-lg font-semibold pr-8">{item.question}</h3>
                          {openQuestions[item.question] ? (
                            <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                          ) : (
                            <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                          )}
                        </button>
                        {openQuestions[item.question] && (
                          <p className="mt-4 text-gray-600">{item.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have a question that's not listed? Our team is here to help you understand our approach to modern dental wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-white hover:bg-primary/90" asChild>
                <a href="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Us
                </a>
              </Button>
              <Button variant="outline" className="btn-outline-square" asChild>
                <a href="/waitlist">Schedule a Visit <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}