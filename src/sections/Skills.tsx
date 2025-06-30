import { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, description: 'Semantic markup & accessibility' },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, description: 'Responsive design & animations' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, description: 'ES6+ & functional programming' },
  { name: 'React', icon: <FaReact className="text-blue-400" />, description: 'Hooks, Context & performance' },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" />, description: 'Utility-first CSS framework' },
  { name: 'Vite', icon: <SiVite className="text-purple-500" />, description: 'Next-gen frontend tooling' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, description: 'Type-safe JavaScript' },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, description: 'Version control & collaboration' },
];

const Skills = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    
    // Clone the marquee items for seamless looping
    marquee.innerHTML += marquee.innerHTML;
    
    let position = 0;
    const speed = 0.5;
    
    const animate = () => {
      position -= speed;
      if (position <= -marquee.scrollWidth / 2) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <div className="py-12 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Here are some of the technologies and tools I use to build modern, responsive, and scalable web applications.
        </p>
        
        {/* Auto-sliding Carousel */}
        <div className="relative overflow-hidden py-6 mb-12">
          <div 
            ref={marqueeRef}
            className="flex whitespace-nowrap will-change-transform"
          >
            {skills.concat(skills).map((skill, index) => (
              <div 
                key={`${skill.name}-${index}`} 
                className="inline-flex flex-col items-center mx-8 transition-transform hover:scale-110"
              >
                <div className="w-20 h-20 flex items-center justify-center text-5xl mb-2">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 dark:from-gray-900 via-transparent to-gray-50 dark:to-gray-900 pointer-events-none"></div>
        </div>

        {/* Skills Grid with Tooltips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {skill.name}
                </h3>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;