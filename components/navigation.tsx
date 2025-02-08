"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [expandedServiceCategory, setExpandedServiceCategory] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const serviceCategories = {
    preventive: {
      title: "Preventive & Diagnostic Care",
      items: [
        { title: "Digital Wellness Scans", href: "/services/digital-wellness-scans" },
        { title: "Saliva Testing", href: "/services/saliva-testing" },
        { title: "Minimally Invasive Cleanings", href: "/services/minimally-invasive-cleanings" }
      ]
    },
    restorative: {
      title: "Restorative & Functional",
      items: [
        { title: "Biomimetic Restorations", href: "/services/biomimetic-restorations" },
        { title: "Metal-Free Ceramic Implants", href: "/services/metal-free-ceramic-implants" },
        { title: "3D-Printed Restorations", href: "/services/3d-printed-restorations" }
      ]
    },
    biological: {
      title: "Biological & Holistic",
      items: [
        { title: "Safe Metal Removal", href: "/services/safe-metal-removal" },
        { title: "Ozone Therapy", href: "/services/ozone-therapy" },
        { title: "Laser Therapy", href: "/services/laser-therapy" },
        { title: "Biological Surgery", href: "/services/biological-surgery" }
      ]
    },
    aesthetic: {
      title: "Aesthetic & Regenerative",
      items: [
        { title: "Smile Rejuvenation", href: "/services/smile-rejuvenation" },
        { title: "3D Smile Design", href: "/services/3d-smile-design" }
      ]
    },
    wellness: {
      title: "Wellness & Prevention",
      items: [
        { title: "Sleep & Airway Optimization", href: "/services/sleep-airway" },
        { title: "Longevity-Based Wellness", href: "/services/longevity-wellness" }
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setExpandedServiceCategory(null);
  };

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section);
  };

  const toggleServiceCategory = (category: string) => {
    setExpandedServiceCategory(expandedServiceCategory === category ? null : category);
  };

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isHomePage && !isScrolled && !isMobileMenuOpen ? "bg-transparent" : "bg-background/95 backdrop-blur-sm shadow-sm"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex flex-col items-start">
            <span className={cn(
              "text-2xl font-bold",
              isHomePage && !isScrolled && !isMobileMenuOpen ? "text-white" : "text-foreground"
            )} style={{ fontFamily: 'Avegreat' }}>
              Rise Dental
            </span>
            <span className={cn(
              "text-xs tracking-widest",
              isHomePage && !isScrolled && !isMobileMenuOpen ? "text-white" : "text-foreground"
            )} style={{ fontFamily: 'TT Chocolates', fontWeight: 300 }}>
              MODERN WELLNESS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* The Experience Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('experience')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 py-2",
                  isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-foreground"
                )}
              >
                The Experience
                <ChevronDown className="h-4 w-4" />
              </button>
              <div 
                className={cn(
                  "absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                  activeDropdown === 'experience' && "opacity-100 visible"
                )}
              >
                <div className="bg-white rounded-lg shadow-lg py-2">
                  <a href="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Meet the Doctors</a>
                  <a href="/first-visit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">First Visit</a>
                  <a href="/technology" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Technology & Innovation</a>
                  <a href="/sustainability" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sustainability</a>
                  <a href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQs</a>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 py-2",
                  isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-foreground"
                )}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              <div 
                className={cn(
                  "absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                  activeDropdown === 'services' && "opacity-100 visible"
                )}
              >
                <div className="bg-white rounded-lg shadow-lg py-2 w-72">
                  {Object.entries(serviceCategories).map(([key, category]) => (
                    <div key={key} className="relative group/category">
                      <button
                        className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                        onMouseEnter={() => toggleServiceCategory(key)}
                      >
                        {category.title}
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      {expandedServiceCategory === key && (
                        <div className="absolute left-full top-0 ml-0.5 w-72">
                          <div className="bg-white rounded-lg shadow-lg py-2">
                            {category.items.map((item, index) => (
                              <a
                                key={index}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {item.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Regular Menu Items */}
            <a 
              href="/membership" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary py-2",
                isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-foreground"
              )}
            >
              Membership
            </a>

            <a 
              href="/events" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary py-2",
                isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-foreground"
              )}
            >
              Events
            </a>

            <a 
              href="/blog" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary py-2",
                isHomePage && !isScrolled ? "text-white hover:text-white/80" : "text-foreground"
              )}
            >
              Blog
            </a>

            <Button className="bg-primary text-white hover:bg-primary/90" asChild>
              <a href="/waitlist">Join Our Priority Waitlist</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden",
              isHomePage && !isScrolled && !isMobileMenuOpen ? "text-white" : "text-foreground"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {/* The Experience Section */}
              <div>
                <button
                  onClick={() => toggleMobileSection('experience')}
                  className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary"
                >
                  <span className="font-medium">The Experience</span>
                  {expandedMobileSection === 'experience' ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
                {expandedMobileSection === 'experience' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="/team" className="block py-2 text-foreground/70 hover:text-primary">Meet the Team</a>
                    <a href="/first-visit" className="block py-2 text-foreground/70 hover:text-primary">First Visit</a>
                    <a href="/technology" className="block py-2 text-foreground/70 hover:text-primary">Technology & Innovation</a>
                    <a href="/sustainability" className="block py-2 text-foreground/70 hover:text-primary">Sustainability</a>
                    <a href="/faq" className="block py-2 text-foreground/70 hover:text-primary">FAQs</a>
                  </div>
                )}
              </div>

              {/* Services Section */}
              <div>
                <button
                  onClick={() => toggleMobileSection('services')}
                  className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary"
                >
                  <span className="font-medium">Services</span>
                  {expandedMobileSection === 'services' ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
                {expandedMobileSection === 'services' && (
                  <div className="pl-4 mt-2 space-y-4">
                    {Object.entries(serviceCategories).map(([key, category]) => (
                      <div key={key} className="space-y-2">
                        <button
                          onClick={() => toggleServiceCategory(key)}
                          className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary"
                        >
                          <span className="font-medium">{category.title}</span>
                          {expandedServiceCategory === key ? (
                            <ChevronDown className="h-5 w-5" />
                          ) : (
                            <ChevronRight className="h-5 w-5" />
                          )}
                        </button>
                        {expandedServiceCategory === key && (
                          <div className="pl-4 space-y-2">
                            {category.items.map((item, index) => (
                              <a
                                key={index}
                                href={item.href}
                                className="block py-2 text-foreground/70 hover:text-primary"
                              >
                                {item.title}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a href="/membership" className="py-2 text-foreground hover:text-primary">Membership</a>
              <a href="/events" className="py-2 text-foreground hover:text-primary">Events</a>
              <a href="/blog" className="py-2 text-foreground hover:text-primary">Blog</a>

              <Button className="bg-primary text-white hover:bg-primary/90 w-full mt-4" asChild>
                <a href="/waitlist">Join The Priority Waitlist</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}