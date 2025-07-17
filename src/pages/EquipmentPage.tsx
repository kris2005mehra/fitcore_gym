import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, MapPin, Clock } from 'lucide-react';

const EquipmentPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Equipment' },
    { id: 'strength', name: 'Strength Training' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'functional', name: 'Functional' },
    { id: 'recovery', name: 'Recovery' },
  ];

  const equipment = [
    {
      id: 1,
      name: 'Power Rack Station',
      category: 'strength',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional power rack with safety bars and pull-up station',
      features: ['Safety bars', 'Pull-up station', 'Olympic bar included'],
      availability: 'Available',
      rating: 4.8,
      location: 'Strength Training Area',
    },
    {
      id: 2,
      name: 'Commercial Treadmill',
      category: 'cardio',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'High-end treadmill with interactive touchscreen',
      features: ['Interactive display', 'Heart rate monitoring', 'Incline adjustment'],
      availability: 'In Use',
      rating: 4.9,
      location: 'Cardio Zone',
    },
    {
      id: 3,
      name: 'Cable Machine System',
      category: 'strength',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dual-stack cable machine for versatile training',
      features: ['Dual stacks', 'Multiple attachments', 'Adjustable pulleys'],
      availability: 'Available',
      rating: 4.7,
      location: 'Strength Training Area',
    },
    {
      id: 4,
      name: 'Kettlebell Set',
      category: 'functional',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete kettlebell set from 10-80 lbs',
      features: ['Various weights', 'Powder coated', 'Wide handle'],
      availability: 'Available',
      rating: 4.6,
      location: 'Functional Training Area',
    },
    {
      id: 5,
      name: 'Rowing Machine',
      category: 'cardio',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Air resistance rowing machine',
      features: ['Air resistance', 'Performance monitor', 'Adjustable footrests'],
      availability: 'Available',
      rating: 4.8,
      location: 'Cardio Zone',
    },
    {
      id: 6,
      name: 'Recovery Pods',
      category: 'recovery',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Compression therapy recovery pods',
      features: ['Compression therapy', 'Multiple programs', 'Bluetooth connectivity'],
      availability: 'Available',
      rating: 4.9,
      location: 'Recovery Room',
    },
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            GYM <span className="text-red-600">EQUIPMENT</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of professional-grade fitness equipment designed to help you achieve your goals.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search equipment..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                  item.availability === 'Available' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {item.availability}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                    Reserve
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gym Tour Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gray-900 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to See Our Equipment in Person?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book a free tour and try out our equipment with a personal trainer guide.
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-red-700 transition-colors">
            BOOK FREE TOUR
          </button>
        </motion.div>

        {/* Equipment Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-lg p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Equipment Availability Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Time</th>
                  <th className="text-left py-3 px-4">Peak Hours</th>
                  <th className="text-left py-3 px-4">Recommended</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">6:00 AM - 8:00 AM</td>
                  <td className="py-3 px-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">High</span>
                  </td>
                  <td className="py-3 px-4">Cardio Equipment</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">8:00 AM - 12:00 PM</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Low</span>
                  </td>
                  <td className="py-3 px-4">All Equipment</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">12:00 PM - 2:00 PM</td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">Medium</span>
                  </td>
                  <td className="py-3 px-4">Strength Training</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">6:00 PM - 8:00 PM</td>
                  <td className="py-3 px-4">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">High</span>
                  </td>
                  <td className="py-3 px-4">Functional Training</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EquipmentPage;