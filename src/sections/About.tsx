import yourImage from '../assets/acpic2.jpg'; // Import your image

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Portrait Image with Effects (Right Side) */}
        <div className="relative w-full md:w-1/3 max-w-md group">
          {/* Main Image with Hover Scale */}
          <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
            <img
              src={yourImage}
              alt="A.C. Dilshan"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Lightning Wave Effect (Bottom to Top) */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Permanent Bottom Shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Subtle Floating Particles (Stationary) */}
          <div className="absolute -z-10 inset-0 overflow-hidden rounded-xl">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-blue-400/20 rounded-full"
                style={{
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* About Content (Left Side) */}
        <div className="w-full md:w-2/3 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hi, I'm A.C. Dilshan
          </h2>
         
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I have an interest in the field of <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineering</span>  and am willing to embrace evolving, cutting-edge
            technologies. Dedicated and self-driven individual who is motivated by understanding deficiencies in their ownskills and fast learning. Would love to work with team members while leading or supporting us, towards
            success. Is passionate about academic work and has comeup with many instances that reveal the ability for
            teamwork and true skills in problem-solving. </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            My journey in development has equipped me with skills in <span className="font-medium">React, React Native, Node.js, and modern web technologies</span>. I'm passionate about creating efficient, scalable solutions that deliver exceptional user experiences.
          </p>

          <div className="pt-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;