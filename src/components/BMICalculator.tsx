import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Target } from 'lucide-react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) return;

    let weightKg = parseFloat(weight);
    let heightM = parseFloat(height);

    if (unit === 'imperial') {
      weightKg = weightKg * 0.453592; // lbs to kg
      heightM = heightM * 0.0254; // inches to meters
    } else {
      heightM = heightM / 100; // cm to meters
    }

    const bmiValue = weightKg / (heightM * heightM);
    setBmi(parseFloat(bmiValue.toFixed(1)));

    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue < 25) {
      setCategory('Normal weight');
    } else if (bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const getBMIColor = () => {
    if (!bmi) return 'gray';
    if (bmi < 18.5) return 'blue';
    if (bmi < 25) return 'green';
    if (bmi < 30) return 'yellow';
    return 'red';
  };

  const getBMIAdvice = () => {
    if (!category) return '';
    
    switch (category) {
      case 'Underweight':
        return 'Consider speaking with a healthcare provider about healthy weight gain strategies.';
      case 'Normal weight':
        return 'Great! Maintain your current lifestyle with regular exercise and balanced nutrition.';
      case 'Overweight':
        return 'Consider incorporating more physical activity and a balanced diet for gradual weight loss.';
      case 'Obese':
        return 'Consult with healthcare professionals for a comprehensive weight management plan.';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="h-6 w-6 text-red-600" />
        <h3 className="text-xl font-bold text-gray-900">BMI Calculator</h3>
      </div>

      <div className="space-y-4">
        {/* Unit Selection */}
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="metric"
              checked={unit === 'metric'}
              onChange={(e) => setUnit(e.target.value)}
              className="mr-2"
            />
            <span className="text-sm">Metric (kg/cm)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="imperial"
              checked={unit === 'imperial'}
              onChange={(e) => setUnit(e.target.value)}
              className="mr-2"
            />
            <span className="text-sm">Imperial (lbs/inches)</span>
          </label>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Weight ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder={unit === 'metric' ? '70' : '154'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height ({unit === 'metric' ? 'cm' : 'inches'})
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder={unit === 'metric' ? '175' : '69'}
            />
          </div>
        </div>

        <button
          onClick={calculateBMI}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors font-medium"
        >
          Calculate BMI
        </button>

        {/* Results */}
        {bmi && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 bg-gray-50 rounded-lg"
          >
            <div className="text-center mb-4">
              <div className={`text-3xl font-bold text-${getBMIColor()}-600`}>
                {bmi}
              </div>
              <div className={`text-sm font-medium text-${getBMIColor()}-700`}>
                {category}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Underweight</span>
                <span>Normal</span>
                <span>Overweight</span>
                <span>Obese</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`bg-${getBMIColor()}-600 h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${Math.min((bmi / 40) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            <p className="text-sm text-gray-600 text-center">
              {getBMIAdvice()}
            </p>
          </motion.div>
        )}

        {/* BMI Categories */}
        <div className="mt-6 text-xs text-gray-600">
          <h4 className="font-medium mb-2">BMI Categories:</h4>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Underweight</span>
              <span>&lt; 18.5</span>
            </div>
            <div className="flex justify-between">
              <span>Normal weight</span>
              <span>18.5 - 24.9</span>
            </div>
            <div className="flex justify-between">
              <span>Overweight</span>
              <span>25 - 29.9</span>
            </div>
            <div className="flex justify-between">
              <span>Obese</span>
              <span>&gt; 30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;