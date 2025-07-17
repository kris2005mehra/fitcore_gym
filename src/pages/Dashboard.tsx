import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Target, TrendingUp, Award, Clock, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Workouts This Month',
      value: '18',
      icon: Target,
      color: 'red',
      trend: '+12%',
    },
    {
      title: 'Hours Trained',
      value: '24',
      icon: Clock,
      color: 'blue',
      trend: '+8%',
    },
    {
      title: 'Calories Burned',
      value: '12,450',
      icon: TrendingUp,
      color: 'green',
      trend: '+15%',
    },
    {
      title: 'Classes Attended',
      value: '7',
      icon: Users,
      color: 'purple',
      trend: '+3%',
    },
  ];

  const recentWorkouts = [
    {
      date: '2024-01-15',
      type: 'Strength Training',
      duration: '1h 30m',
      calories: 450,
    },
    {
      date: '2024-01-13',
      type: 'HIIT Class',
      duration: '45m',
      calories: 380,
    },
    {
      date: '2024-01-11',
      type: 'Yoga',
      duration: '1h',
      calories: 200,
    },
  ];

  const upcomingClasses = [
    {
      name: 'Morning Yoga',
      time: '8:00 AM',
      date: 'Today',
      instructor: 'Sarah Johnson',
    },
    {
      name: 'HIIT Training',
      time: '6:00 PM',
      date: 'Tomorrow',
      instructor: 'Mike Chen',
    },
    {
      name: 'Strength & Conditioning',
      time: '7:00 AM',
      date: 'Wed, Jan 17',
      instructor: 'David Rodriguez',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's your fitness journey overview
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                    <IconComponent className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-green-600 font-medium">{stat.trend}</span>
                  <span className="text-sm text-gray-500 ml-2">from last month</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Workouts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Workouts</h2>
            <div className="space-y-4">
              {recentWorkouts.map((workout, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{workout.type}</h3>
                    <p className="text-sm text-gray-600">{workout.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{workout.duration}</p>
                    <p className="text-sm text-gray-600">{workout.calories} cal</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
              View All Workouts
            </button>
          </motion.div>

          {/* Upcoming Classes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Classes</h2>
            <div className="space-y-4">
              {upcomingClasses.map((class_, index) => (
                <div key={index} className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-medium text-gray-900">{class_.name}</h3>
                  <p className="text-sm text-gray-600">{class_.time} - {class_.date}</p>
                  <p className="text-sm text-gray-500">with {class_.instructor}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
              Book More Classes
            </button>
          </motion.div>
        </div>

        {/* Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 bg-white rounded-lg p-6 shadow-sm"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${75 * 1.884} ${188.4}`}
                    className="text-red-600"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">75%</span>
                </div>
              </div>
              <h3 className="font-medium text-gray-900">Monthly Workouts</h3>
              <p className="text-sm text-gray-600">18 of 24 sessions</p>
            </div>

            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${60 * 1.884} ${188.4}`}
                    className="text-blue-600"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">60%</span>
                </div>
              </div>
              <h3 className="font-medium text-gray-900">Weight Loss</h3>
              <p className="text-sm text-gray-600">12 of 20 lbs</p>
            </div>

            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${85 * 1.884} ${188.4}`}
                    className="text-green-600"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">85%</span>
                </div>
              </div>
              <h3 className="font-medium text-gray-900">Strength Goal</h3>
              <p className="text-sm text-gray-600">170 of 200 lbs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;