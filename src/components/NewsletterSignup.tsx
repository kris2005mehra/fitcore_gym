import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
      >
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-green-900 mb-2">
          Welcome to FitCore!
        </h3>
        <p className="text-green-700">
          You're now subscribed to our newsletter. Get ready for fitness tips, workout routines, and exclusive offers!
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-6 text-white">
      <div className="flex items-center space-x-2 mb-4">
        <Mail className="h-6 w-6" />
        <h3 className="text-xl font-bold">Stay Motivated</h3>
      </div>
      
      <p className="text-red-100 mb-4">
        Get weekly workout tips, nutrition advice, and exclusive member offers delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-300"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-red-600 py-3 px-4 rounded-md font-bold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe Now'}
        </button>
      </form>
      
      <p className="text-red-200 text-xs mt-3">
        No spam, unsubscribe anytime. We respect your privacy.
      </p>
    </div>
  );
};

export default NewsletterSignup;