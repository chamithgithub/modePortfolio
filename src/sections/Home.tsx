import React from 'react';
import moon from '../assets/Moonsun.svg';
import yourImage from '../assets/profile.jpg';
const Home = () => {
  // Create multiple meteors
  const meteors = Array(10).fill(0).map((_, i) => (
    <div
      key={i}
      className="meteor"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      }}
    />
  ));

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 dark:from-gray-900 to-white dark:to-black transition-colors duration-500 overflow-hidden relative">
      {/* Meteor Shower */}
      {meteors}
      
      {/* Your Image */}
      <div className="relative z-10 mb-8">
        <img 
          src={yourImage} 
          alt="profile" 
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
        />
      </div>
      
      {/* Moon */}
      <img 
        src={moon} 
        alt="Moon" 
        className="w-24 h-24 animate-bounce absolute top-10 right-10 opacity-80 dark:opacity-60" 
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mt-6 text-gray-800 dark:text-white">
          Hi, I'm A.C.Dilshan 👋
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
         I am a passionate Mobile and Fullstack Developer with expertise in building responsive and user-friendly applications. I enjoy crafting seamless experiences across platforms and leveraging modern technologies to solve complex problems.
        </p>
      </div>
      
      {/* Add this CSS for the meteors */}
      <style>{`
        .meteor {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1),
                      0 0 0 4px rgba(255, 255, 255, 0.1),
                      0 0 8px rgba(255, 255, 255, 1);
          animation: meteor-fall linear infinite;
        }
        
        @keyframes meteor-fall {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(300px) translateX(-300px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;