import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell, Heart, Users, Zap } from 'lucide-react';

const Equipment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('strength');

  const categories = [
    { id: 'strength', name: 'Strength Training', icon: Dumbbell },
    { id: 'cardio', name: 'Cardio', icon: Heart },
    { id: 'functional', name: 'Functional', icon: Zap },
    { id: 'group', name: 'Group Classes', icon: Users },
  ];

  const equipment = {
    strength: [
      {
        name: 'Power Rack',
        image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Professional power racks for safe heavy lifting'
      },
      {
        name: 'Dumbbells',
        image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Complete set from 5lbs to 100lbs'
      },
      {
        name: 'Cable Machines',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Versatile cable systems for all muscle groups'
      },
      {
        name: 'Leg Press',
        image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Heavy-duty leg press machines'
      },
    ],
    cardio: [
      {
        name: 'Treadmills',
        image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Latest model treadmills with interactive displays'
      },
      {
        name: 'Ellipticals',
        image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Low-impact full-body cardio machines'
      },
      {
        name: 'Stationary Bikes',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Spin bikes and recumbent bikes'
      },
      {
        name: 'Rowing Machines',
        image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Full-body cardio and strength training'
      },
    ],
    functional: [
      {
        name: 'Kettlebells',
        image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Various weights for functional training'
      },
      {
        name: 'Battle Ropes',
        image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'High-intensity interval training equipment'
      },
      {
        name: 'TRX Systems',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Suspension training for bodyweight exercises'
      },
      {
        name: 'Plyometric Boxes',
        image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Jump training and agility equipment'
      },
    ],
    group: [
      {
        name: 'Yoga Studio',
        image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Peaceful space for yoga and meditation'
      },
      {
        name: 'Spin Studio',
        image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'High-energy spin classes'
      },
      {
        name: 'CrossFit Box',
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Functional fitness and CrossFit training'
      },
      {
        name: 'Dance Studio',
        image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Zumba, dance fitness, and aerobics'
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            WORLD-CLASS <span className="text-red-600">EQUIPMENT</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Train with the best equipment available. From strength training to cardio, we have everything you need to reach your fitness goals.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Equipment Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {equipment[selectedCategory as keyof typeof equipment].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="text-red-600 hover:text-red-700 font-medium flex items-center space-x-1">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience Premium Equipment?
          </h3>
          <p className="text-gray-600 mb-8">
            Book a tour and try our equipment for yourself.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-md text-lg font-bold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105">
            BOOK A TOUR
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Equipment;