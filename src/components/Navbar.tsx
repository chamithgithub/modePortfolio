import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional icon package, or use emoji/svg

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow fixed w-full z-50">
      <div className="text-xl font-bold text-gray-900 dark:text-white">MyPortfolio</div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
        {navLinks.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`}
              className="hover:text-blue-500 transition"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center gap-4 py-4 text-gray-700 dark:text-gray-300 md:hidden shadow-md">
          {navLinks.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
