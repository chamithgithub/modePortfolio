// import React from 'react';
import { useState, useEffect } from 'react';


import project1 from '../assets/PortfolioWebsite.jpg'; // Import your image
import project2 from '../assets/E-CommerceApp.jpg'; // Import your image
import project3 from '../assets/TaskManagement.jpg'; // Import your image
import project4 from '../assets/WeatherDashboard.png'; // Import your image
import project5 from '../assets/SocialMedia.jpg'; // Import your image
import project6 from '../assets/RecipeFinder.jpg'; // Import your image
import project7 from '../assets/FitnessTracker.png'; // Import your image
import project8 from '../assets/ChatApplication.jpg'; // Import your image
import project9 from '../assets/BudgetPlanner.png'; // Import your image
import project10 from '../assets/MovieDatabase.png'; // Import your image


const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio built with React, TailwindCSS, and Vite.",
   image:project1 ,
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    title: "E-Commerce App",
    description: "Full-featured online store with cart functionality and payment integration.",
    image:project2,
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management",
    description: "Kanban-style task board with drag-and-drop functionality.",
    image:project3,
    tags: ["React", "Firebase",]
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasts with location detection.",
    image:project4,
    tags: ["API", "JavaScript", "CSS"]
  },
  {
    title: "Social Media Clone",
    description: "Twitter-like platform with posts and comments.",
    image:project5,
    tags: ["React", "GraphQL",]
  },
  {
    title: "Recipe Finder",
    description: "Search thousands of recipes with filtering options.",
    image:project6,
    tags: ["React", "API", "Redux"]
  },
  {
    title: "Fitness Tracker",
    description: "Workout logging app with progress charts.",
    image:project7,
    tags: ["React Native", "Firebase"]
  },
  {
    title: "Chat Application",
    description: "Real-time messaging with socket.io.",
    image:project8,
    tags: ["Node.js", "Socket.io", "React"]
  },
  {
    title: "Budget Planner",
    description: "Expense tracking with visual analytics.",
    image:project9,
    tags: ["JavaScript"]
  },
  {
    title: "Movie Database",
    description: "Browse films with ratings and trailers.",
    image:project10,
    tags: ["React", "API"]
  }
];

  
  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Calculate which projects to show (always shows all projects in rotation)
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < projects.length; i++) {
      const index = (activeIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  return (
    <div className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Here are some of the projects I've worked on, showcasing my skills in web development.
        </p>

        {/* Circular Carousel Container */}
        <div className="relative h-[500px]">
          {getVisibleProjects().map((project, index) => {
            // Calculate position in circle
            const angle = (index / projects.length) * Math.PI * 2;
            const radius = 180;
            const x = Math.sin(angle) * radius;
            const y = -Math.cos(angle) * radius;
            
            // Calculate scale based on position (front projects are larger)
            const scale = 1 - Math.abs(index - activeIndex) * 0.2;
            const opacity = 1 - Math.abs(index - activeIndex) * 0.3;
            const zIndex = projects.length - Math.abs(index - activeIndex);

            return (
              <div
                key={(project?.title || 'undefined') + index}
                className={`absolute left-1/2 top-1/2 transition-all duration-1000 ease-in-out`}
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  width: '300px'
                }}
              >
                <div className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-40 overflow-hidden rounded-lg mb-4">
                    <img 
                      src={project?.image || 'default-image.jpg'} 
                      alt={project?.title || 'No title available'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project?.title || 'Untitled Project'}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{project?.description || 'No description available'}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project?.tags?.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;