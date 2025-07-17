import React from 'react';
import Hero from '../components/Hero';
import Equipment from '../components/Equipment';
import Membership from '../components/Membership';
import Testimonials from '../components/Testimonials';
import BMICalculator from '../components/BMICalculator';
import WorkoutGenerator from '../components/WorkoutGenerator';
import NewsletterSignup from '../components/NewsletterSignup';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Equipment />
      <Membership />
      <Testimonials />
      
      {/* Additional Tools Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              FITNESS <span className="text-red-600">TOOLS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take advantage of our free fitness tools to track your progress and plan your workouts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <BMICalculator />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <WorkoutGenerator />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <NewsletterSignup />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;