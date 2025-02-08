"use client";

import { useState } from 'react';
import { ArrowRight, Search, Tag, Clock, User, MessageSquare, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const categories = [
  "Holistic Dentistry",
  "Wellness Tips",
  "Oral Health",
  "Nutrition",
  "Sleep & TMJ",
  "Sustainable Living",
  "Technology",
  "Patient Stories"
];

const featuredPosts = [
  {
    title: "The Connection Between Oral Health and Overall Wellness",
    excerpt: "Discover how your dental health impacts your body's systems and why a holistic approach matters.",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80",
    category: "Holistic Dentistry",
    author: "Dr. Thu Trinh",
    date: "March 7, 2025",
    readTime: "6 min read",
    comments: 12
  },
  {
    title: "Natural Ways to Improve Your Oral Microbiome",
    excerpt: "Learn about the beneficial bacteria in your mouth and how to maintain a healthy balance naturally.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80",
    category: "Wellness Tips",
    author: "Emma Thompson, RDH",
    date: "March 5, 2025",
    readTime: "5 min read",
    comments: 8
  },
  {
    title: "Understanding Biocompatible Dental Materials",
    excerpt: "A comprehensive guide to modern, body-friendly materials used in holistic dentistry.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80",
    category: "Technology",
    author: "Dr. Robert Banh",
    date: "March 3, 2025",
    readTime: "7 min read",
    comments: 15
  }
];

const recentPosts = [
  {
    title: "Sleep Apnea and Dental Health: What You Need to Know",
    excerpt: "Explore the connection between dental health and sleep quality, and discover solutions for better rest.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80",
    category: "Sleep & TMJ",
    author: "Dr. Thu Trinh",
    date: "March 1, 2025",
    readTime: "5 min read",
    comments: 6
  },
  {
    title: "Sustainable Practices in Modern Dentistry",
    excerpt: "How we're reducing our environmental impact while providing exceptional care.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    category: "Sustainable Living",
    author: "Dr. Robert Banh",
    date: "February 28, 2025",
    readTime: "4 min read",
    comments: 9
  },
  {
    title: "Foods That Promote Dental Health",
    excerpt: "A guide to nutrition choices that support strong teeth and healthy gums.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80",
    category: "Nutrition",
    author: "Emma Thompson, RDH",
    date: "February 25, 2025",
    readTime: "6 min read",
    comments: 11
  },
  {
    title: "The Benefits of Mercury-Free Dentistry",
    excerpt: "Understanding the importance of biocompatible materials in modern dental care.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
    category: "Holistic Dentistry",
    author: "Dr. Thu Trinh",
    date: "February 23, 2025",
    readTime: "5 min read",
    comments: 7
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/origami.jpg')] bg-fixed bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Insights for Your Wellness Journey</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert advice, holistic health tips, and the latest in modern dental wellness.
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.readTime}</span>
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{post.comments}</span>
                  </div>
                  <Button variant="outline" className="w-full btn-outline-square">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Recent Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Categories */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Categories</h2>
              <Card className="p-6">
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-50 rounded-lg group"
                    >
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 text-primary mr-2" />
                        <span>{category}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Recent Posts */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
              <div className="space-y-8">
                {recentPosts.map((post, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <span className="text-sm text-primary font-medium mb-2 block">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <User className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.author}</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="mr-4">{post.readTime}</span>
                          <MessageSquare className="h-4 w-4 mr-1" />
                          <span>{post.comments}</span>
                        </div>
                        <Button variant="outline" className="btn-outline-square">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#F8F7F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest wellness tips and dental health insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-sm"
              />
              <Button className="bg-primary text-white hover:bg-primary/90">
                Subscribe <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}