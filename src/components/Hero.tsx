import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Gym Equipment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          UNLEASH YOUR
          <span className="text-red-600 block">POTENTIAL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Transform your body and mind with state-of-the-art equipment, expert trainers, and a community that pushes you to be your best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/membership"
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-md text-lg font-bold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-gray-300 text-sm md:text-base">MEMBERS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-300 text-sm md:text-base">EQUIPMENT</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">15+</div>
            <div className="text-gray-300 text-sm md:text-base">TRAINERS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-300 text-sm md:text-base">ACCESS</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;