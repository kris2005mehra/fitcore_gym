import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar, Star, Filter, Search } from 'lucide-react';

const ClassesPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const days = ['all', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const classTypes = ['all', 'yoga', 'hiit', 'strength', 'cardio', 'dance', 'pilates'];

  const classes = [
    {
      id: 1,
      name: 'Morning Yoga Flow',
      instructor: 'Emily Rodriguez',
      type: 'yoga',
      day: 'monday',
      time: '6:30 AM',
      duration: '60 min',
      capacity: 20,
      enrolled: 15,
      difficulty: 'Beginner',
      description: 'Start your day with gentle yoga flows and breathing exercises.',
      image: 'https://images.pexels.com/photos/1380359/pexels-photo-1380359.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'HIIT Blast',
      instructor: 'Mike Chen',
      type: 'hiit',
      day: 'monday',
      time: '7:00 PM',
      duration: '45 min',
      capacity: 15,
      enrolled: 12,
      difficulty: 'Advanced',
      description: 'High-intensity interval training for maximum calorie burn.',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Strength & Conditioning',
      instructor: 'Sarah Johnson',
      type: 'strength',
      day: 'tuesday',
      time: '6:00 AM',
      duration: '75 min',
      capacity: 12,
      enrolled: 10,
      difficulty: 'Intermediate',
      description: 'Build functional strength with compound movements.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      name: 'Cardio Dance',
      instructor: 'Maria Garcia',
      type: 'dance',
      day: 'wednesday',
      time: '7:30 PM',
      duration: '50 min',
      capacity: 25,
      enrolled: 18,
      difficulty: 'Beginner',
      description: 'Fun cardio workout with dance moves and upbeat music.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 5,
      name: 'Power Pilates',
      instructor: 'Jessica Lee',
      type: 'pilates',
      day: 'thursday',
      time: '8:00 AM',
      duration: '55 min',
      capacity: 16,
      enrolled: 14,
      difficulty: 'Intermediate',
      description: 'Core-focused pilates with emphasis on strength and flexibility.',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 6,
      name: 'Spin Class',
      instructor: 'David Martinez',
      type: 'cardio',
      day: 'friday',
      time: '6:00 PM',
      duration: '45 min',
      capacity: 20,
      enrolled: 17,
      difficulty: 'Intermediate',
      description: 'High-energy cycling class with motivating music.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 7,
      name: 'Weekend Warrior',
      instructor: 'Alex Thompson',
      type: 'hiit',
      day: 'saturday',
      time: '9:00 AM',
      duration: '60 min',
      capacity: 18,
      enrolled: 13,
      difficulty: 'Advanced',
      description: 'Intense weekend workout combining strength and cardio.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 8,
      name: 'Sunday Stretch',
      instructor: 'Emily Rodriguez',
      type: 'yoga',
      day: 'sunday',
      time: '10:00 AM',
      duration: '45 min',
      capacity: 22,
      enrolled: 16,
      difficulty: 'Beginner',
      description: 'Relaxing stretching session to prepare for the week ahead.',
      image: 'https://images.pexels.com/photos/1380359/pexels-photo-1380359.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const filteredClasses = classes.filter(cls => {
    const matchesDay = selectedDay === 'all' || cls.day === selectedDay;
    const matchesType = selectedType === 'all' || cls.type === selectedType;
    const matchesSearch = cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cls.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDay && matchesType && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
            GROUP <span className="text-red-600">CLASSES</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our energizing group fitness classes led by expert instructors. From yoga to HIIT, find the perfect workout for your fitness level.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search classes or instructors..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {days.map(day => (
                <option key={day} value={day}>
                  {day === 'all' ? 'All Days' : day.charAt(0).toUpperCase() + day.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {classTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredClasses.map((cls, index) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(cls.difficulty)}`}>
                    {cls.difficulty}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{cls.name}</h3>
                  <p className="text-sm opacity-90">with {cls.instructor}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{cls.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-gray-600">{cls.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-gray-600 capitalize">{cls.day}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-gray-600">{cls.enrolled}/{cls.capacity}</span>
                    </div>
                    <span className="text-sm text-gray-600">{cls.duration}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                    Book Class
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Weekly Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Weekly Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Time</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Monday</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Tuesday</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Wednesday</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Thursday</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Friday</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Saturday</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Sunday</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '6:00 AM', classes: ['', 'Strength & Conditioning', '', '', '', '', '', ''] },
                  { time: '6:30 AM', classes: ['Morning Yoga Flow', '', '', '', '', '', '', ''] },
                  { time: '7:00 AM', classes: ['', '', '', '', '', '', '', ''] },
                  { time: '8:00 AM', classes: ['', '', '', 'Power Pilates', '', '', '', ''] },
                  { time: '9:00 AM', classes: ['', '', '', '', '', '', 'Weekend Warrior', ''] },
                  { time: '10:00 AM', classes: ['', '', '', '', '', '', '', 'Sunday Stretch'] },
                  { time: '6:00 PM', classes: ['', '', '', '', '', 'Spin Class', '', ''] },
                  { time: '7:00 PM', classes: ['HIIT Blast', '', '', '', '', '', '', ''] },
                  { time: '7:30 PM', classes: ['', '', 'Cardio Dance', '', '', '', '', ''] },
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{row.time}</td>
                    {row.classes.map((cls, i) => (
                      <td key={i} className="py-3 px-4">
                        {cls && (
                          <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                            {cls}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClassesPage;