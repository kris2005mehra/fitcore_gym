import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Fitness Street', 'Gym City, GC 12345'],
      color: 'red',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', '(555) 123-4568'],
      color: 'blue',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@fitcore.com', 'support@fitcore.com'],
      color: 'green',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 5:00 AM - 11:00 PM', 'Sat-Sun: 6:00 AM - 10:00 PM'],
      color: 'purple',
    },
  ];

  const gymLocations = [
    {
      name: 'FitCore Downtown',
      address: '123 Fitness Street, Gym City, GC 12345',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 5:00 AM - 11:00 PM',
    },
    {
      name: 'FitCore Northside',
      address: '456 Health Avenue, Gym City, GC 12346',
      phone: '(555) 123-4568',
      hours: 'Mon-Fri: 5:30 AM - 10:30 PM',
    },
    {
      name: 'FitCore Westside',
      address: '789 Strength Road, Gym City, GC 12347',
      phone: '(555) 123-4569',
      hours: 'Mon-Fri: 6:00 AM - 10:00 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            GET IN <span className="text-red-600">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your fitness journey? We're here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Information</option>
                    <option value="tour">Schedule a Tour</option>
                    <option value="classes">Group Classes</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full bg-${info.color}-100`}>
                        <IconComponent className={`h-6 w-6 text-${info.color}-600`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h3>
              <p className="text-gray-300 mb-6">
                Our team is available to assist you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>CALL NOW</span>
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>LIVE CHAT</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gym Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gymLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-bold text-gray-900 mb-4">{location.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                    <span className="text-gray-600 text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-red-600" />
                    <span className="text-gray-600 text-sm">{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-red-600" />
                    <span className="text-gray-600 text-sm">{location.hours}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Visit Location
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <p className="text-gray-600">Interactive Map Coming Soon</p>
              <p className="text-gray-500 text-sm">123 Fitness Street, Gym City, GC 12345</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'What are your operating hours?',
                answer: 'We are open Monday-Friday 5:00 AM - 11:00 PM and Saturday-Sunday 6:00 AM - 10:00 PM. Pro and Elite members have 24/7 access.',
              },
              {
                question: 'Do you offer trial memberships?',
                answer: 'Yes! We offer a 7-day free trial for new members. Contact us to schedule your trial period.',
              },
              {
                question: 'What should I bring for my first visit?',
                answer: 'Bring workout clothes, athletic shoes, a water bottle, and a valid ID. Towels are provided for all members.',
              },
              {
                question: 'Do you have parking available?',
                answer: 'Yes, we have free parking available at all our locations with easy access to the gym entrance.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-red-100 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;