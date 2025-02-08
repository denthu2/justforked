import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#272018] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+15123256788" className="text-gray-400 hover:text-white transition-colors">
                  (512) 325-6788
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:info@risesmiles.com" className="text-gray-400 hover:text-white transition-colors">
                  info@risesmiles.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/place/1651+S+Bell+Blvd+%23300,+Cedar+Park,+TX+78613" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  1651 S. Bell Blvd.<br />
                  Unit #300<br />
                  Cedar Park, TX 78613<br />
                  Across from Twin Lakes YMCA
                  
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Monday - Friday</span>
              </div>
              <div className="pl-6">8:00 AM - 5:00 PM</div>
              <div className="flex items-center mt-4">
                <Clock className="h-4 w-4 mr-2" />
            
                <span>Saturday - Sunday</span>
              </div>
              <div className="pl-6">Closed</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/membership" className="text-gray-400 hover:text-white transition-colors">Membership</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <p className="text-gray-400 mb-4">Follow us for dental wellness tips and updates</p>
            <p className="text-gray-400 mb-6">Share your smile journey with<br />#RiseSmiles</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Rise Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}