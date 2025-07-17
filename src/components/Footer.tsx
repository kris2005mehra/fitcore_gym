import React from 'react';
import { Dumbbell, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold">FitCore</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transform your body and mind with state-of-the-art equipment, expert trainers, and a supportive community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-red-600 transition-colors cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-red-600 transition-colors cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-red-600 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Equipment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Membership</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Trainers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Personal Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Group Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Nutrition Counseling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Fitness Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Recovery Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Meal Planning</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-600" />
                <span className="text-gray-400">123 Fitness Street, Gym City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600" />
                <span className="text-gray-400">info@fitcore.com</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-bold mb-2">Hours</h4>
              <div className="text-gray-400 text-sm">
                <p>Mon-Fri: 5:00 AM - 11:00 PM</p>
                <p>Sat-Sun: 6:00 AM - 10:00 PM</p>
                <p className="text-red-600 font-medium">24/7 Access for Pro & Elite Members</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for fitness tips and special offers.</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 FitCore. All rights reserved. Made by Kris | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;