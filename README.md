# FitCore Gym Website 🏋️‍♂️

A modern, responsive gym website built with React, TypeScript, and Tailwind CSS. FitCore offers a complete fitness experience with membership management, equipment showcase, class scheduling, and user dashboard.

## 🌟 Features

### Core Functionality
- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Authentication System** - Login, registration, and user profile management
- **Membership Plans** - Three tiers (Basic, Pro, Elite) with detailed comparisons
- **Equipment Showcase** - Interactive gallery with filtering and search
- **Class Scheduling** - Group fitness classes with booking system
- **User Dashboard** - Progress tracking, workout stats, and achievements
- **Contact System** - Multi-location contact forms and information

### Interactive Tools
- **BMI Calculator** - Real-time body mass index calculation
- **Workout Generator** - Personalized workout routines based on preferences
- **Newsletter Signup** - Email subscription with confirmation
- **Progress Tracking** - Visual charts and achievement badges

### Design Elements
- **Modern UI/UX** - Bold, high-energy fitness aesthetic
- **Smooth Animations** - Framer Motion powered transitions
- **Color Scheme** - Red (#DC2626), Black (#1F2937), White (#FFFFFF)
- **Professional Photography** - High-quality gym equipment images
  
## 📸 ScreenShots

<img width="1455" height="822" alt="Screenshot 2025-07-17 at 12 55 34 PM" src="https://github.com/user-attachments/assets/f19418dc-0b5c-4975-aecf-72de77025f4b" />

<img width="1455" height="822" alt="Screenshot 2025-07-17 at 12 53 36 PM" src="https://github.com/user-attachments/assets/948503be-5aea-47e1-9f47-d4c7a06f6789" />

<img width="1455" height="822" alt="Screenshot 2025-07-17 at 12 53 52 PM" src="https://github.com/user-attachments/assets/6ce52999-ce6e-47de-852d-e64ea2b7d379" />

<img width="1455" height="822" alt="Screenshot 2025-07-17 at 12 54 15 PM" src="https://github.com/user-attachments/assets/4ce45163-acd3-4916-83be-f96e305bc28c" />

## 🚀 Live Demo

**Website:** [https://radiant-froyo-9c0af7.netlify.app](https://radiant-froyo-9c0af7.netlify.app)

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Netlify

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fitcore-gym-website.git
   cd fitcore-gym-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Landing page hero
│   ├── Equipment.tsx   # Equipment showcase
│   ├── Membership.tsx  # Membership plans
│   ├── Testimonials.tsx # Customer reviews
│   ├── BMICalculator.tsx # BMI calculation tool
│   ├── WorkoutGenerator.tsx # Workout creation tool
│   └── NewsletterSignup.tsx # Email subscription
├── pages/              # Main application pages
│   ├── Home.tsx        # Landing page
│   ├── Login.tsx       # User authentication
│   ├── Register.tsx    # User registration
│   ├── Dashboard.tsx   # User dashboard
│   ├── ProfilePage.tsx # User profile management
│   ├── MembershipPage.tsx # Detailed membership info
│   ├── EquipmentPage.tsx # Equipment catalog
│   ├── ClassesPage.tsx # Group fitness classes
│   ├── AboutPage.tsx   # About us and team
│   └── ContactPage.tsx # Contact information
├── contexts/           # React context providers
│   └── AuthContext.tsx # Authentication state
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Design System

### Colors
- **Primary Red:** #DC2626, #EF4444
- **Black/Gray:** #000000, #1F2937, #374151
- **White/Light:** #FFFFFF, #F9FAFB, #F3F4F6

### Typography
- **Headers:** Bold, athletic styling
- **Body:** Clean, readable fonts
- **Buttons:** All caps, bold weight

### Components
- **Buttons:** Red gradient primary, black outline secondary
- **Cards:** White background with subtle shadows
- **Forms:** Clean inputs with red focus states

## 📱 Responsive Design

- **Mobile First:** Optimized for mobile devices
- **Tablet Support:** Adapted layouts for medium screens
- **Desktop Enhanced:** Full-featured desktop experience
- **Touch Friendly:** Swipeable galleries and touch navigation

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Deployment
npm run deploy       # Deploy to Netlify (if configured)
```

## 🌐 Deployment

The application is configured for easy deployment to Netlify:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## 🔐 Authentication

The application includes a mock authentication system:

- **Login:** Any email/password combination works
- **Registration:** Creates mock user profiles
- **Session:** Stored in localStorage
- **Dashboard:** Personalized user experience

## 📊 Features Overview

### User Dashboard
- Workout statistics and progress tracking
- Upcoming class bookings
- Achievement badges and milestones
- Personal fitness goals

### Equipment Catalog
- Interactive filtering by category
- Equipment availability status
- Detailed specifications and features
- Reservation system mockup

### Class Scheduling
- Weekly schedule grid
- Class difficulty levels
- Instructor information
- Booking system interface

### Tools & Calculators
- BMI calculator with health recommendations
- Workout generator with customizable routines
- Progress tracking charts
- Nutrition planning tools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Made with ❤️ by Kris © 2025**
