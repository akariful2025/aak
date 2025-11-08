import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download, ExternalLink, Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
import { APP_LOGO, APP_TITLE } from '@/const';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'portfolio', 'services', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Handle form submission with validation
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    if (!formData.message.trim()) {
      alert('Please enter your message');
      return;
    }
    
    if (formData.message.trim().length < 10) {
      alert('Message must be at least 10 characters long');
      return;
    }
    
    alert(`Thank you ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce website with product filtering and checkout',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete brand identity including logo, colors, and guidelines',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'marketing',
      description: 'Viral social media campaign with 500K+ impressions',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=300&fit=crop',
      link: '#'
    },
    {
      id: 4,
      title: 'Video Production',
      category: 'video',
      description: 'Professional promotional video for tech startup',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=300&fit=crop',
      link: '#'
    },
    {
      id: 5,
      title: 'Mobile App Design',
      category: 'design',
      description: 'UI/UX design for fitness tracking mobile application',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      link: '#'
    },
    {
      id: 6,
      title: 'Content Marketing',
      category: 'marketing',
      description: 'Blog and content strategy for SaaS company',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&h=300&fit=crop',
      link: '#'
    }
  ];

  const filteredProjects = portfolioFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === portfolioFilter);

  // Skills data
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'React', level: 88 },
    { name: 'Adobe Photoshop', level: 85 },
    { name: 'Adobe Illustrator', level: 82 },
    { name: 'Premiere Pro', level: 80 },
    { name: 'WordPress', level: 87 },
    { name: 'SEO', level: 85 },
    { name: 'Social Media Marketing', level: 88 }
  ];

  // Services data
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      icon: '💻'
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, SEM, social media strategies to grow your online presence',
      icon: '📈'
    },
    {
      title: 'Video Editing',
      description: 'Professional video production and editing for marketing content',
      icon: '🎬'
    },
    {
      title: 'Graphic Design',
      description: 'Logo design, branding, and visual content creation',
      icon: '🎨'
    },
    {
      title: 'Content Creation',
      description: 'Blog posts, social media content, and copywriting services',
      icon: '✍️'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design for web and mobile applications',
      icon: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-2xl text-gray-900">
              {APP_TITLE || 'Portfolio'}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'portfolio', 'services', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === item
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {['home', 'about', 'skills', 'portfolio', 'services', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-700 hover:bg-gray-100 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Your Name</span>
              </h1>
              <p className="text-xl text-gray-600">
                Creative Digital Professional | Designer & Developer
              </p>
              <p className="text-gray-600 leading-relaxed">
                I create beautiful, functional digital experiences that help businesses grow and connect with their audience.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Hire Me
                </Button>
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                👨‍💼
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 animate-bounce">
            <ChevronDown size={32} className="text-blue-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Profile"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                With over 5 years of experience in digital design and development, I've helped dozens of businesses establish their online presence and achieve their goals. My passion is creating beautiful, user-friendly digital experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I specialize in web development, digital marketing, video editing, and graphic design. I believe in combining creativity with strategy to deliver results that matter.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">50+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">40+</p>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
                <Download size={20} />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-blue-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-1000 ease-out skill-bar"
                    style={{ width: '0%', '--target-width': `${skill.level}%` } as any}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Portfolio</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'web', 'design', 'marketing', 'video'].map(category => (
              <button
                key={category}
                onClick={() => setPortfolioFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                  portfolioFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden h-48 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your message here..."
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                Send Message
              </Button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-gray-600 mb-8">
                  I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">hello@example.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">{APP_TITLE || 'Portfolio'}</h4>
              <p className="text-gray-400">Creating beautiful digital experiences</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Follow</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {APP_TITLE || 'Portfolio'}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-bar {
          animation: slideInUp 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        section {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
