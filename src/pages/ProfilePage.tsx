import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Phone, Calendar, Award, Target, Settings, Camera } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-01-01',
    membershipType: user?.membershipType || 'pro',
    joinDate: user?.joinDate || new Date().toISOString(),
    fitnessGoals: 'Build muscle and lose weight',
    emergencyContact: 'Jane Doe - (555) 987-6543',
    height: '5\'10"',
    weight: '180 lbs',
    experience: 'Intermediate',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Save profile data
    setIsEditing(false);
  };

  const achievements = [
    { title: 'First Workout', description: 'Completed your first workout', date: '2024-01-01', icon: '🏃' },
    { title: '30 Day Streak', description: 'Worked out for 30 consecutive days', date: '2024-01-30', icon: '🔥' },
    { title: 'Weight Goal', description: 'Lost 10 lbs', date: '2024-02-15', icon: '⚖️' },
    { title: 'Strength Milestone', description: 'Bench pressed body weight', date: '2024-03-01', icon: '💪' },
  ];

  const workoutStats = [
    { label: 'Total Workouts', value: '86', change: '+12%' },
    { label: 'Hours Trained', value: '142', change: '+8%' },
    { label: 'Calories Burned', value: '24,560', change: '+15%' },
    { label: 'Strength PRs', value: '12', change: '+3%' },
  ];

  const membershipBenefits = {
    basic: ['Gym Access (Business Hours)', 'Basic Equipment', 'Locker Room'],
    pro: ['24/7 Access', 'All Equipment', 'Group Classes', 'Guest Passes', 'Nutrition Consultation'],
    elite: ['All Pro Benefits', 'Personal Training', 'VIP Locker', 'Recovery Room', 'Meal Planning'],
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your account and track your fitness journey</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-16 w-16 text-white" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
                <p className="text-gray-600 capitalize">{profileData.membershipType} Member</p>
                <p className="text-gray-500 text-sm">
                  Member since {new Date(profileData.joinDate).toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <span className="text-gray-700">{profileData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span className="text-gray-700">{profileData.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-red-600" />
                  <span className="text-gray-700">{new Date(profileData.dateOfBirth).toLocaleDateString()}</span>
                </div>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="w-full mt-6 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Settings className="h-4 w-4" />
                <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
              </button>
            </div>

            {/* Membership Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Membership Benefits</h3>
              <div className="space-y-2">
                {membershipBenefits[profileData.membershipType as keyof typeof membershipBenefits].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Profile Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h3>
              {isEditing ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={profileData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                    <input
                      type="text"
                      name="height"
                      value={profileData.height}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                    <input
                      type="text"
                      name="weight"
                      value={profileData.weight}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fitness Goals</label>
                    <textarea
                      name="fitnessGoals"
                      value={profileData.fitnessGoals}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      onClick={handleSave}
                      className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                    <p className="text-gray-900">{profileData.height}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                    <p className="text-gray-900">{profileData.weight}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                    <p className="text-gray-900">{profileData.experience}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact</label>
                    <p className="text-gray-900">{profileData.emergencyContact}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fitness Goals</label>
                    <p className="text-gray-900">{profileData.fitnessGoals}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Workout Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Workout Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {workoutStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <p className="text-xs text-gray-500">{new Date(achievement.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;