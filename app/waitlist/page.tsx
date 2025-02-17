"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight, Check, HelpCircle } from "lucide-react";
import { supabase } from '@/lib/supabase';
import type { WaitlistEntry } from '@/lib/supabase';

export default function WaitlistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Partial<WaitlistEntry>>({
    wants_benefits_breakdown: false,
    treatment_preferences: [],
  });

  const treatmentOptions = {
    preventive: {
      label: "Preventive Care",
      details: [
        "Exams",
        "Gentle Cleanings",
        "Low-dose X-rays"
       
      ]
    },
    restorative: {
      label: "Dental Treatment",
      details: [
        "Fillings & Crowns",
        "Invisalign®",
        "Dental Implants",
        "Dental Emergencies"
      ]
    },
    holistic: {
      label: "Specialty Treatment",
      details: [
        "Safe Mercury Removal (SMART)",
        "Laser Therapy",
        "Ozone Therapy",
                "Biological Surgery"
      ]
    },
    cosmetic: {
      label: "Cosmetic Dentistry",
      details: [
        "Veneers",
        "Whitening",
        "Cosmetic Gum Surgery"
        
      ]
    },
    consultation: {
      label: "I'm Not Sure – I'd Like a Consultation",
      details: ["Perfect for patients who want to explore their options"]
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value || null }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name.startsWith('treatment_')) {
      const treatment = name.replace('treatment_', '');
      setFormData(prev => ({
        ...prev,
        treatment_preferences: checked 
          ? [...(prev.treatment_preferences || []), treatment]
          : (prev.treatment_preferences || []).filter(t => t !== treatment)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: checked }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Clean up form data
      const cleanedData = {
        ...formData,
        subscriber_dob: formData.subscriber_dob || null,
        insurance_carrier: formData.insurance_carrier || null,
        other_insurance_carrier: formData.other_insurance_carrier || null,
        subscriber_name: formData.subscriber_name || null,
        subscriber_id: formData.subscriber_id || null,
        referral_source: formData.referral_source || null,
        other_referral_source: formData.other_referral_source || null,
        additional_info: formData.additional_info || null,
        treatment_preferences: formData.treatment_preferences || []
      };

      const { error } = await supabase
        .from('waitlist_entries')
        .insert([cleanedData]);

      if (error) throw error;

      setSubmitted(true);
      toast.success("Thank you for joining our waitlist!");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 text-center">
            <div className="mb-6">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Thank You for Joining Our Waitlist!</h1>
              <p className="text-gray-600">
                We've received your information and will contact you as soon as we begin accepting new patients. You'll be among the first to experience Rise Dental's innovative approach to wellness.
              </p>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Priority Waitlist</h1>
          <p className="text-lg text-gray-600">
            Be among the first to experience Rise Dental, Austin's premier modern dental wellness center. Complete the form below to secure your place on the waitlist. Doors open July 2025.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first_name">First Name</Label>
                <Input 
                  id="first_name" 
                  name="first_name"
                  onChange={handleInputChange}
                  value={formData.first_name || ''}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Last Name</Label>
                <Input 
                  id="last_name" 
                  name="last_name"
                  onChange={handleInputChange}
                  value={formData.last_name || ''}
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email" 
                id="email" 
                name="email"
                onChange={handleInputChange}
                value={formData.email || ''}
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone"
                onChange={handleInputChange}
                value={formData.phone || ''}
                required 
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="wants_benefits_breakdown"
                  name="wants_benefits_breakdown"
                  className="form-checkbox"
                  checked={formData.wants_benefits_breakdown}
                  onChange={handleCheckboxChange}
                />
                <Label htmlFor="wants_benefits_breakdown">
                  Would you like a complimentary benefits breakdown emailed to you prior to your appointment?
                </Label>
              </div>

              {formData.wants_benefits_breakdown && (
                <div className="space-y-4 pl-6">
                  <div className="space-y-2">
                    <Label htmlFor="insurance_carrier">Insurance Carrier</Label>
                    <select 
                      id="insurance_carrier" 
                      name="insurance_carrier"
                      className="w-full p-2 border rounded-md"
                      value={formData.insurance_carrier || ''}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select your insurance carrier</option>
                      <option value="aetna">Aetna</option>
                      <option value="bluecross">Blue Cross Blue Shield</option>
                      <option value="cigna">Cigna</option>
                      <option value="delta">Delta Dental</option>
                      <option value="guardian">Guardian</option>
                      <option value="humana">Humana</option>
                      <option value="metlife">MetLife</option>
                      <option value="united">United Healthcare</option>
                      <option value="other">Other</option>
                    </select>
                    
                    {formData.insurance_carrier === 'other' && (
                      <div className="mt-2">
                        <Input
                          type="text"
                          name="other_insurance_carrier"
                          placeholder="Please specify your insurance carrier"
                          value={formData.other_insurance_carrier || ''}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subscriber_name">Subscriber Name</Label>
                    <Input 
                      id="subscriber_name" 
                      name="subscriber_name"
                      onChange={handleInputChange}
                      value={formData.subscriber_name || ''}
                      required={formData.wants_benefits_breakdown} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subscriber_dob">Subscriber Date of Birth</Label>
                    <Input 
                      type="date" 
                      id="subscriber_dob" 
                      name="subscriber_dob"
                      onChange={handleInputChange}
                      value={formData.subscriber_dob || ''}
                      required={formData.wants_benefits_breakdown} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subscriber_id">Subscriber ID</Label>
                    <Input 
                      id="subscriber_id" 
                      name="subscriber_id"
                      onChange={handleInputChange}
                      value={formData.subscriber_id || ''}
                      required={formData.wants_benefits_breakdown} 
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="referral_source">How did you hear about us?</Label>
              <select 
                id="referral_source" 
                name="referral_source"
                className="w-full p-2 border rounded-md"
                value={formData.referral_source || ''}
                onChange={handleInputChange}
                required
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social">Social Media</option>
                <option value="friend">Friend/Family Referral</option>
                <option value="doctor">Healthcare Provider</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="yelp">Yelp</option>
                <option value="other">Other</option>
              </select>
              
              {formData.referral_source === 'other' && (
                <div className="mt-2">
                  <Input
                    type="text"
                    name="other_referral_source"
                    placeholder="Please specify"
                    value={formData.other_referral_source || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                Treatment Preferences
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm">Select all that interest you</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <div className="space-y-3">
                <TooltipProvider>
                  {Object.entries(treatmentOptions).map(([key, option]) => (
                    <div key={key} className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        name={`treatment_${key}`}
                        className="form-checkbox mt-1"
                        checked={formData.treatment_preferences?.includes(key)}
                        onChange={handleCheckboxChange}
                      />
                      <Tooltip>
                        <TooltipTrigger className="text-left">
                          <span>{option.label}</span>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <ul className="list-disc pl-4 space-y-1">
                            {option.details.map((detail, index) => (
                              <li key={index} className="text-sm">{detail}</li>
                            ))}
                          </ul>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  ))}
                </TooltipProvider>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional_info">Additional Information</Label>
              <Textarea 
                id="additional_info" 
                name="additional_info"
                placeholder="Tell us about your dental wellness goals and any specific concerns..."
                className="h-32"
                onChange={handleInputChange}
                value={formData.additional_info || ''}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary text-white hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Join Priority Waitlist'} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}