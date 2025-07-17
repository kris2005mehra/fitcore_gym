import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, Crown, Zap, Calculator, Users, Calendar, Award } from 'lucide-react';

const MembershipPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      monthlyPrice: 2299,
      yearlyPrice: 22990,
      icon: Zap,
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Gym access during business hours (6 AM - 10 PM)',
        'Basic cardio and strength equipment',
        'Locker room and shower access',
        'Mobile app access',
        'Monthly fitness assessment',
        'Basic workout plans',
        'Community support',
      ],
      color: 'gray',
      popular: false,
    },
    {
      id: 'pro',
      name: 'Pro',
      monthlyPrice: 3899,
      yearlyPrice: 38990,
      icon: Star,
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Everything in Basic',
        '24/7 gym access',
        'All premium equipment access',
        'Unlimited group fitness classes',
        'Personal trainer consultation (1 per month)',
        'Guest passes (2 per month)',
        'Nutrition consultation',
        'Progress tracking tools',
        'Priority customer support',
      ],
      color: 'red',
      popular: true,
    },
    {
      id: 'elite',
      name: 'Elite',
      monthlyPrice: 6299,
      yearlyPrice: 62990,
      icon: Crown,
      description: 'Ultimate package for fitness professionals',
      features: [
        'Everything in Pro',
        'Unlimited guest passes',
        'Personal training sessions (2 per month)',
        'Custom meal planning service',
        'Recovery room access (sauna, massage)',
        'Priority class booking',
        'Advanced body composition analysis',
        'Supplement consultation',
        'VIP locker with towel service',
        'Exclusive member events',
      ],
      color: 'black',
      popular: false,
    },
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Certified professionals to guide your fitness journey',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Book classes and sessions at your convenience',
    },
    {
      icon: Award,
      title: 'Achievement Tracking',
      description: 'Monitor your progress with advanced analytics',
    },
    {
      icon: Calculator,
      title: 'Nutrition Planning',
      description: 'Personalized meal plans for optimal results',
    },
  ];

  const getPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: any) => {
    return billingCycle === 'yearly' ? plan.monthlyPrice * 12 - plan.yearlyPrice : 0;
  };

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
            CHOOSE YOUR <span className="text-red-600">MEMBERSHIP</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Select the perfect plan that fits your fitness goals and lifestyle. All memberships come with no contracts and can be cancelled anytime.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-red-600' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-red-600' : 'text-gray-600'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Save up to 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Membership Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = getPrice(plan);
            const savings = getSavings(plan);
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all cursor-pointer ${
                  plan.popular ? 'ring-4 ring-red-600' : ''
                } ${selectedPlan === plan.id ? 'ring-2 ring-red-600' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    plan.color === 'red' ? 'bg-red-600' : 
                    plan.color === 'black' ? 'bg-gray-900' : 'bg-gray-600'
                  }`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900">₹{price}</span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {savings > 0 && (
                    <div className="text-green-600 text-sm font-medium mt-2">
                      Save ₹{savings} per year
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  CHOOSE {plan.name.toUpperCase()}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Compare All Features
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Features</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">Basic</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">Pro</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-900">Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Gym Access', basic: 'Business Hours', pro: '24/7', elite: '24/7' },
                  { feature: 'Group Classes', basic: false, pro: true, elite: true },
                  { feature: 'Personal Training', basic: false, pro: '1/month', elite: '2/month' },
                  { feature: 'Guest Passes', basic: false, pro: '2/month', elite: 'Unlimited' },
                  { feature: 'Nutrition Consultation', basic: false, pro: true, elite: true },
                  { feature: 'Recovery Room', basic: false, pro: false, elite: true },
                  { feature: 'VIP Services', basic: false, pro: false, elite: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {row.basic === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.basic === false ? (
                        <span className="text-gray-400">-</span>
                      ) : (
                        <span className="text-gray-700">{row.basic}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.pro === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.pro === false ? (
                        <span className="text-gray-400">-</span>
                      ) : (
                        <span className="text-gray-700">{row.pro}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {row.elite === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : row.elite === false ? (
                        <span className="text-gray-400">-</span>
                      ) : (
                        <span className="text-gray-700">{row.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'Can I cancel anytime?',
                answer: 'Yes, all memberships are month-to-month with no long-term contracts. You can cancel with 30 days notice.',
              },
              {
                question: 'Is there a joining fee?',
                answer: 'No joining fees for new members! This is a limited-time offer for our first 500 members.',
              },
              {
                question: 'Can I freeze my membership?',
                answer: 'Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended travel.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, debit cards, bank transfers, and contactless payments.',
              },
              {
                question: 'Do you offer family plans?',
                answer: 'Yes! Family plans are available with special discounts for 2 or more family members.',
              },
              {
                question: 'What if I want to upgrade or downgrade?',
                answer: 'You can change your membership plan at any time. Changes take effect from the next billing cycle.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Join FitCore today and start your fitness journey with our world-class facilities and expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              START YOUR FREE TRIAL
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-red-600 transition-colors"
            >
              SCHEDULE A TOUR
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MembershipPage;