import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Pro Member',
      image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'FitCore transformed my life! The trainers are amazing and the equipment is top-notch. I\'ve never felt stronger.',
      rating: 5,
      achievement: 'Lost 30 lbs in 6 months',
    },
    {
      name: 'Mike Chen',
      role: 'Elite Member',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The 24/7 access is perfect for my schedule. The variety of classes keeps my workouts exciting and challenging.',
      rating: 5,
      achievement: 'Gained 15 lbs muscle',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Pro Member',
      image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Best investment I\'ve made for my health. The community here is incredibly supportive and motivating.',
      rating: 5,
      achievement: 'Completed first marathon',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SUCCESS <span className="text-red-600">STORIES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from real people. Join thousands of members who have achieved their fitness goals with FitCore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-red-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-red-600 mb-4" />
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                {testimonial.achievement}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-red-100 text-lg mb-8">
            Join FitCore today and start your transformation journey with personalized support and world-class facilities.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-100 transition-colors">
            START YOUR JOURNEY
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-600">Member Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">2,500+</div>
            <div className="text-gray-600">Transformations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">5★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;