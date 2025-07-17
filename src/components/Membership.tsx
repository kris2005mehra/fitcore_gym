import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Membership: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: 2299,
      icon: Zap,
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        'Gym access during business hours',
        'Basic cardio and strength equipment',
        'Locker room access',
        'Mobile app access',
        'Monthly fitness assessment',
      ],
      color: 'gray',
      popular: false,
    },
    {
      name: 'Pro',
      price: 3899,
      icon: Star,
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Everything in Basic',
        '24/7 gym access',
        'All premium equipment',
        'Group fitness classes',
        'Personal trainer consultation',
        'Guest passes (2 per month)',
        'Nutrition consultation',
      ],
      color: 'red',
      popular: true,
    },
    {
      name: 'Elite',
      price: 79,
      icon: Crown,
      description: 'Ultimate package for fitness professionals',
      features: [
        'Everything in Pro',
        'Unlimited guest passes',
        'Private training sessions (2 per month)',
        'Meal planning service',
        'Recovery room access',
        'Priority booking for classes',
        'Custom workout plans',
        'Body composition analysis',
      ],
      color: 'black',
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CHOOSE YOUR <span className="text-red-600">MEMBERSHIP</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect plan that fits your fitness goals and lifestyle. All memberships come with no contracts and can be cancelled anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition-all ${
                  plan.popular ? 'ring-4 ring-red-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
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
                    <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-md font-bold text-lg transition-all ${
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
          className="mt-16 bg-white rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Compare All Features
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Features</th>
                  <th className="text-center py-4 px-4">Basic</th>
                  <th className="text-center py-4 px-4">Pro</th>
                  <th className="text-center py-4 px-4">Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">Gym Access</td>
                  <td className="text-center py-4 px-4">Business Hours</td>
                  <td className="text-center py-4 px-4">24/7</td>
                  <td className="text-center py-4 px-4">24/7</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Group Classes</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="text-center py-4 px-4"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Personal Training</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">Consultation</td>
                  <td className="text-center py-4 px-4">2 Sessions/Month</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Guest Passes</td>
                  <td className="text-center py-4 px-4">-</td>
                  <td className="text-center py-4 px-4">2/Month</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="font-bold text-white mb-2">Can I cancel anytime?</h4>
              <p className="text-gray-300">Yes, all memberships are month-to-month with no long-term contracts.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="font-bold text-white mb-2">Is there a joining fee?</h4>
              <p className="text-gray-300">No joining fees for the first 100 members. Limited time offer!</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="font-bold text-white mb-2">Can I freeze my membership?</h4>
              <p className="text-gray-300">Yes, you can freeze your membership for up to 3 months per year.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="font-bold text-white mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-300">We accept all major credit cards, debit cards, and bank transfers.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;