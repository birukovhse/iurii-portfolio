import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Linkedin, Github, ChevronDown, ExternalLink } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand identity system including logo, colors, and typography',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      tags: ['Adobe Illustrator', 'Brand Design', 'Identity']
    },
    {
      id: 2,
      title: 'Motion Graphics Reel',
      category: 'Motion Design',
      description: 'Animated explainer videos and motion graphics for social media',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop',
      tags: ['After Effects', 'Cinema 4D', 'Animation']
    },
    {
      id: 3,
      title: 'Festival Visual Identity',
      category: 'Event Design',
      description: 'Visual identity system for music and graffiti festival',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop',
      tags: ['Event Design', 'Print', 'Digital']
    },
    {
      id: 4,
      title: 'UI/UX Design System',
      category: 'Digital Design',
      description: 'Comprehensive design system for mobile and web applications',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Figma', 'UI/UX', 'Design System']
    },
    {
      id: 5,
      title: 'Packaging Design',
      category: 'Product Design',
      description: 'Modern packaging solutions for consumer products',
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop',
      tags: ['Packaging', '3D', 'Product Design']
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      description: 'Creative campaign with automated content generation',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&h=600&fit=crop',
      tags: ['Social Media', 'Automatizations', 'Content']
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 animate-gradient"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight">
              HELLO!
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I AM <span className="text-white font-black">IURII BIRUKOV,</span>
              <br />
              <span className="text-white font-black">GRAPHIC & MOTION</span>
              <br />
              <span className="text-white font-black">DESIGNER</span> 
              <span className="inline-flex items-center ml-4 text-2xl md:text-3xl font-normal">
                🇳🇱 BASED IN GRONINGEN
                <br className="md:hidden" />
                <span className="ml-2">NETHERLANDS</span>
              </span>
            </h2>
          </div>

          <div className="mt-12 md:mt-16 space-y-4 md:space-y-6">
            <div className="flex items-center justify-end">
              <div className="text-right space-y-2">
                <p className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider">
                  GRADUATED FROM
                </p>
                <p className="text-5xl md:text-7xl lg:text-8xl font-black">
                  HSE ART AND
                </p>
                <p className="text-5xl md:text-7xl lg:text-8xl font-black">
                  DESIGN SCHOOL
                </p>
                <p className="text-2xl md:text-3xl font-light flex items-center justify-end gap-2">
                  <span className="text-4xl">👨‍🎓</span> BACHELOR'S DEGREE '22
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20 space-y-4">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-light">
              I LOVE & DO <span className="font-black">DESIGNS</span> & <span className="font-black">AUTOMATIZATIONS!</span>
            </h3>
            <p className="text-3xl md:text-5xl lg:text-6xl font-light">
              ALSO ORGANISED
            </p>
            <p className="text-4xl md:text-6xl lg:text-7xl font-black flex items-center gap-3">
              GRAFFITI <span className="font-black">FESTIVALS</span> 
              <span className="text-3xl font-normal">🎨 inst @MOSTICK.PROJECT</span>
            </p>
          </div>

          <div className="mt-16 flex gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              VIEW PROJECTS
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('projects')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to projects"
        >
          <ChevronDown className="w-12 h-12" />
        </button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-center">SELECTED WORKS</h2>
          <p className="text-xl md:text-2xl text-gray-400 text-center mb-16">
            A collection of projects I'm proud of
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-sm text-purple-400 font-semibold mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-white/10 rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white text-black rounded-full p-2">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 md:px-16 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-16 text-center">SKILLS & TOOLS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-purple-400">Design</h3>
              <ul className="space-y-2 text-lg text-gray-300">
                <li>• Adobe Creative Suite</li>
                <li>• Figma / Sketch</li>
                <li>• Brand Identity</li>
                <li>• UI/UX Design</li>
                <li>• Typography</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-cyan-400">Motion</h3>
              <ul className="space-y-2 text-lg text-gray-300">
                <li>• After Effects</li>
                <li>• Cinema 4D</li>
                <li>• 2D/3D Animation</li>
                <li>• Video Editing</li>
                <li>• Motion Graphics</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-pink-400">Automatizations</h3>
              <ul className="space-y-2 text-lg text-gray-300">
                <li>• AI-Powered Design</li>
                <li>• Workflow Automation</li>
                <li>• Batch Processing</li>
                <li>• Content Generation</li>
                <li>• Design Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center py-20 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-5xl md:text-7xl font-black mb-8">LET'S WORK TOGETHER</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="mailto:birukovhse@gmail.com"
              className="flex items-center gap-3 text-2xl hover:text-purple-400 transition-colors group"
            >
              <div className="bg-white/10 p-4 rounded-full group-hover:bg-purple-400 group-hover:text-black transition-all">
                <Mail className="w-8 h-8" />
              </div>
              <span className="font-light">birukovhse@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a
              href="https://instagram.com/mostick.project"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Instagram"
            >
              <div className="bg-white/10 p-4 rounded-full group-hover:bg-pink-500 transition-all">
                <Instagram className="w-8 h-8" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/iurii-birukov"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn"
            >
              <div className="bg-white/10 p-4 rounded-full group-hover:bg-blue-500 transition-all">
                <Linkedin className="w-8 h-8" />
              </div>
            </a>
            <a
              href="https://github.com/iuriibirukov"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub"
            >
              <div className="bg-white/10 p-4 rounded-full group-hover:bg-gray-700 transition-all">
                <Github className="w-8 h-8" />
              </div>
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © 2026 Iurii Birukov. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
