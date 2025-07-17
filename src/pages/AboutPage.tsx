import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, Star, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const trainers = [
    {
      name: 'Sarah Johnson',
      role: 'Head Trainer & Nutritionist',
      image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 10 years of experience in fitness and nutrition, Sarah specializes in strength training and body transformation.',
      certifications: ['NASM-CPT', 'Precision Nutrition', 'Functional Movement'],
      specialties: ['Strength Training', 'Nutrition', 'Body Transformation'],
    },
    {
      name: 'Mike Chen',
      role: 'HIIT & Cardio Specialist',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former professional athlete turned fitness coach, Mike brings high-intensity training methods to help you reach peak performance.',
      certifications: ['ACSM-CPT', 'HIIT Certified', 'Sports Performance'],
      specialties: ['HIIT Training', 'Cardio', 'Sports Performance'],
    },
    {
      name: 'Emily Rodriguez',
      role: 'Yoga & Wellness Instructor',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emily combines traditional yoga practices with modern wellness techniques to help you find balance in mind and body.',
      certifications: ['RYT-500', 'Meditation Teacher', 'Wellness Coach'],
      specialties: ['Yoga', 'Meditation', 'Wellness Coaching'],
    },
    {
      name: 'David Martinez',
      role: 'Powerlifting Coach',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Competitive powerlifter and coach, David helps members build serious strength and achieve their lifting goals safely.',
      certifications: ['USAPL Coach', 'Starting Strength', 'Powerlifting Judge'],
      specialties: ['Powerlifting', 'Strength Building', 'Form Correction'],
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'We help you set and achieve realistic fitness goals through personalized training programs.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive community where everyone motivates each other to succeed.',
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'We focus on complete wellness - physical, mental, and emotional health.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the highest quality equipment, training, and service.',
    },
  ];

  const achievements = [
    { number: '5000+', label: 'Members Transformed' },
    { number: '15+', label: 'Expert Trainers' },
    { number: '50+', label: 'Equipment Pieces' },
    { number: '98%', label: 'Member Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ABOUT <span className="text-red-600">FITCORE</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just a gym - we're your partners in achieving a healthier, stronger, and more confident you.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, FitCore was born from a simple belief: everyone deserves access to world-class fitness facilities and expert guidance. Our founders, former athletes and fitness enthusiasts, recognized the need for a gym that combines cutting-edge equipment with personalized attention.
            </p>
            <p className="text-gray-600 mb-6">
              What started as a small neighborhood gym has grown into a thriving fitness community of over 5,000 members. We've helped countless individuals transform their lives through fitness, nutrition, and wellness coaching.
            </p>
            <p className="text-gray-600">
              Today, FitCore stands as a testament to what's possible when passionate people come together with a shared mission: to make fitness accessible, enjoyable, and transformative for everyone.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Our Gym"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-lg"></div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg text-center"
                >
                  <div className="bg-red-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-2xl p-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meet Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-1">{trainer.name}</h3>
                  <p className="text-red-600 text-sm font-medium mb-3">{trainer.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {trainer.specialties.map((specialty, i) => (
                        <span key={i} className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {trainer.certifications.map((cert, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-red-100 text-lg max-w-4xl mx-auto">
            "To empower individuals to achieve their fitness goals through innovative training methods, 
            state-of-the-art equipment, and a supportive community that celebrates every victory, 
            no matter how small. We believe that fitness is not just about physical transformation - 
            it's about building confidence, discipline, and a lifestyle that enhances every aspect of your life."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;