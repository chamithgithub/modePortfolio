import moon from '../assets/Moonsun.svg';
import yourImage from '../assets/profile.jpg';

import SplitText from "../components/SplitText";
import Ribbons from '../components/Ribbons';

const Home = () => {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

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
      {/* Ribbons Background */}
      <div className="absolute inset-0 z-0" style={{ overflow: 'hidden' }}>
        <Ribbons
          baseThickness={5}
          colors={['#0f00ff']}
          speedMultiplier={0.38}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
        />
      </div>

      {/* Meteor Shower */}
      {meteors}

      {/* Profile Image */}
      <div className="relative z-10 mb-8">
        <img
          src={yourImage}
          alt="profile"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
        />
      </div>

      {/* Animated Text */}
      <SplitText
        text="Hi, I'm A.C.Dilshan 👋"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center px-4"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      {/* Moon */}
      <img
        src={moon}
        alt="Moon"
        className="w-24 h-24 animate-bounce absolute top-10 right-10 opacity-80 dark:opacity-60 z-10"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          I am a passionate Mobile and Fullstack Developer with expertise in building responsive and user-friendly applications. I enjoy crafting seamless experiences across platforms and leveraging modern technologies to solve complex problems.
        </p>
      </div>

      {/* Meteor Styles */}
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
