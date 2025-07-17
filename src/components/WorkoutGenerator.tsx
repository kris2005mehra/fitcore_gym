import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Clock, Zap, RefreshCw } from 'lucide-react';

const WorkoutGenerator: React.FC = () => {
  const [preferences, setPreferences] = useState({
    fitnessLevel: '',
    goal: '',
    duration: '',
    equipment: '',
  });
  const [workout, setWorkout] = useState<any>(null);

  const workoutDatabase = {
    beginner: {
      strength: {
        '30': [
          { name: 'Bodyweight Squats', sets: 3, reps: 10, rest: '30s' },
          { name: 'Push-ups (modified)', sets: 3, reps: 8, rest: '30s' },
          { name: 'Plank Hold', sets: 3, reps: '20s', rest: '30s' },
          { name: 'Glute Bridges', sets: 3, reps: 12, rest: '30s' },
        ],
        '45': [
          { name: 'Bodyweight Squats', sets: 3, reps: 15, rest: '30s' },
          { name: 'Push-ups', sets: 3, reps: 10, rest: '30s' },
          { name: 'Lunges', sets: 3, reps: 10, rest: '30s' },
          { name: 'Plank Hold', sets: 3, reps: '30s', rest: '30s' },
          { name: 'Mountain Climbers', sets: 3, reps: 20, rest: '30s' },
        ],
      },
      cardio: {
        '30': [
          { name: 'Marching in Place', sets: 1, reps: '3 min', rest: '30s' },
          { name: 'Step-ups', sets: 3, reps: 10, rest: '30s' },
          { name: 'Jumping Jacks', sets: 3, reps: 15, rest: '30s' },
          { name: 'Walking in Place', sets: 1, reps: '5 min', rest: '0s' },
        ],
      },
    },
    intermediate: {
      strength: {
        '45': [
          { name: 'Goblet Squats', sets: 4, reps: 12, rest: '45s' },
          { name: 'Dumbbell Rows', sets: 4, reps: 10, rest: '45s' },
          { name: 'Push-ups', sets: 4, reps: 12, rest: '45s' },
          { name: 'Dumbbell Deadlifts', sets: 4, reps: 10, rest: '45s' },
          { name: 'Plank Hold', sets: 3, reps: '45s', rest: '30s' },
        ],
      },
      cardio: {
        '30': [
          { name: 'Burpees', sets: 3, reps: 8, rest: '30s' },
          { name: 'High Knees', sets: 3, reps: 30, rest: '30s' },
          { name: 'Jump Squats', sets: 3, reps: 12, rest: '30s' },
          { name: 'Mountain Climbers', sets: 3, reps: 30, rest: '30s' },
        ],
      },
    },
    advanced: {
      strength: {
        '60': [
          { name: 'Barbell Squats', sets: 4, reps: 8, rest: '60s' },
          { name: 'Bench Press', sets: 4, reps: 8, rest: '60s' },
          { name: 'Deadlifts', sets: 4, reps: 6, rest: '90s' },
          { name: 'Pull-ups', sets: 4, reps: 6, rest: '60s' },
          { name: 'Overhead Press', sets: 4, reps: 8, rest: '60s' },
        ],
      },
    },
  };

  const generateWorkout = () => {
    const { fitnessLevel, goal, duration } = preferences;
    
    if (!fitnessLevel || !goal || !duration) return;

    const levelWorkouts = workoutDatabase[fitnessLevel as keyof typeof workoutDatabase];
    if (!levelWorkouts) return;

    const goalWorkouts = levelWorkouts[goal as keyof typeof levelWorkouts];
    if (!goalWorkouts) return;

    const durationWorkouts = goalWorkouts[duration as keyof typeof goalWorkouts];
    if (!durationWorkouts) return;

    setWorkout({
      title: `${fitnessLevel.charAt(0).toUpperCase() + fitnessLevel.slice(1)} ${goal.charAt(0).toUpperCase() + goal.slice(1)} Workout`,
      duration: `${duration} minutes`,
      level: fitnessLevel,
      exercises: durationWorkouts,
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Target className="h-6 w-6 text-red-600" />
        <h3 className="text-xl font-bold text-gray-900">Workout Generator</h3>
      </div>

      <div className="space-y-4">
        {/* Fitness Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fitness Level
          </label>
          <select
            value={preferences.fitnessLevel}
            onChange={(e) => handleInputChange('fitnessLevel', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Goal
          </label>
          <select
            value={preferences.goal}
            onChange={(e) => handleInputChange('goal', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select goal</option>
            <option value="strength">Build Strength</option>
            <option value="cardio">Improve Cardio</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Workout Duration
          </label>
          <select
            value={preferences.duration}
            onChange={(e) => handleInputChange('duration', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select duration</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
          </select>
        </div>

        {/* Equipment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Available Equipment
          </label>
          <select
            value={preferences.equipment}
            onChange={(e) => handleInputChange('equipment', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select equipment</option>
            <option value="bodyweight">Bodyweight Only</option>
            <option value="dumbbells">Dumbbells</option>
            <option value="full-gym">Full Gym Access</option>
          </select>
        </div>

        <button
          onClick={generateWorkout}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors font-medium flex items-center justify-center space-x-2"
        >
          <Zap className="h-5 w-5" />
          <span>Generate Workout</span>
        </button>

        {/* Generated Workout */}
        {workout && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900">{workout.title}</h4>
              <button
                onClick={generateWorkout}
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{workout.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Target className="h-4 w-4" />
                <span className="capitalize">{workout.level}</span>
              </div>
            </div>

            <div className="space-y-3">
              {workout.exercises.map((exercise: any, index: number) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <div>
                    <span className="font-medium text-gray-900">{exercise.name}</span>
                    <div className="text-sm text-gray-600">
                      {exercise.sets} sets × {exercise.reps} reps
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Rest: {exercise.rest}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-red-50 rounded-md">
              <p className="text-sm text-red-800">
                <strong>Tip:</strong> Warm up for 5 minutes before starting and cool down with stretching afterward.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WorkoutGenerator;