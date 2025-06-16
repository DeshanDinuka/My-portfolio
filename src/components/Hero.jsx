import {  Github, Linkedin, Facebook } from 'lucide-react';

const Hero = () => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-accent-400 bg-clip-text text-transparent">
              Deshan Dinuka
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-slide-up">
            Full Stack Developer & DevOps Engineer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up">
            I’m an undergraduate student passionate about web development.
             I enjoy creating responsive and user-friendly websites using modern tools 
             like HTML, CSS, and JavaScript. Always eager to learn and grow in the tech field.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <button className="btn-primary">
              View My Work
            </button>
            <button className="btn-secondary">
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up">
            <a href="https://github.com/DeshanDinuka" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/deshan-kumara-945572303/" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/deshan.dinuka.90" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        
      </div>
    </section>
  );
};

export default Hero;