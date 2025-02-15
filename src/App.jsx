import { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { id: 'homeID', href: '#about', label: 'Home' },
    { id: 'EducationID', href: '#Education', label: 'Education' },
    { id: 'CertificatesID', href: '#Certificates', label: 'Certificates' },
    { id: 'skillsID', href: '#skills', label: 'Skills' },
    { id: 'projectID', href: '#project', label: 'Projects' },
    { id: 'contactID', href: '#contact', label: 'Contact' },
    { id: 'footer', href: '#footer', label: 'Footer' }
  ];

  const skills = [
    { name: 'C++', link: 'https://en.wikipedia.org/wiki/C%2B%2B' },
    { name: 'C#', link: 'https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29' },
    { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
    { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'SQL', link: 'https://learnsql.com/blog/what-is-sql/' }
  ];

  const projects = [
    { name: "Bakery Store", link: "https://github.com/YoussefHassanDEV/Bakery_FrontEnd" },
    { name: "Login System", link: "https://github.com/YoussefHassanDEV/Login_system" },
    { name: "Weather App", link: "https://github.com/YoussefHassanDEV/weatherapp" },
    { name: "E-commerce", link: "https://github.com/YoussefHassanDEV/E-commerce" },
    { name: "Fokir", link: "https://github.com/YoussefHassanDEV/Fokir_FrontEnd-project" },
    { name: "Mealify", link: "https://github.com/YoussefHassanDEV/Mealify_FrontEnd" },
    { name: "Hospital System", link: "https://github.com/YoussefHassanDEV/Hospital_System" },
    { name: "Library System", link: "https://github.com/YoussefHassanDEV/Libarary_System" },
    { name: "Ask Me", link: "https://github.com/YoussefHassanDEV/Ask_Me" },
    { name: "DevFolio", link: "https://github.com/YoussefHassanDEV/DevFolio_FrontEnd" },
    { name: "DANIELS", link: "https://github.com/YoussefHassanDEV/DANIELS_Frontend_project" },
    { name: "BookMark", link: "https://github.com/YoussefHassanDEV/BookMark-FrontEnd-Project" },
    { name: "Graduation Project", link: "https://github.com/YoussefHassanDEV/Graduation-Project" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="fixed w-full bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="text-yellow-400">Take</span>
            <span className="text-white ml-2">A Tour</span>
          </a>
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(item => (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <nav className="flex flex-col p-4">
              {menuItems.map(item => (
                <a
                  key={item.id}
                  href={item.href}
                  className="py-2 text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section (Home) */}
      <section id="about" className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            Hello <span className="animate-bounce ml-2">👋🏻</span>, I am Youssef
          </h2>
          <div className="relative">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text animate-pulse">
              Software Engineer
            </h1>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 transform hover:scale-105 transition-transform duration-200">
              <h2 className="text-2xl font-bold mb-2">Frontend Developer</h2>
              <p className="text-gray-400">Angular | React</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 transform hover:scale-105 transition-transform duration-200">
              <h2 className="text-2xl font-bold mb-2">Backend Developer</h2>
              <p className="text-gray-400">NodeJS | .NET</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="Education" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <p className="text-gray-400">[Add your educational background details here]</p>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="Certificates" className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Certificates</h2>
          <p className="text-gray-400">[Add your certificates and achievements here]</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 text-center transform hover:scale-105 transition-transform duration-200"
              >
                {skill.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-gray-700 rounded-lg border border-gray-600 hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300">View on GitHub</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Contact Me
          </h2>
          <div className="max-w-2xl mx-auto bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-700/50 rounded-lg border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              />
              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Youssef Hassan. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/YoussefHassanDEV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/youssef-hassan-60a85a248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
