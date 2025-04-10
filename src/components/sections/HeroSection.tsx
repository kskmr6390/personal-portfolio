import React from 'react';
import { ArrowDown, Linkedin, Github, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative">
      {/* Workspace Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://raw.githubusercontent.com/satyam19arya/portfolio/master/src/assets/workspace.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-xl transform transition duration-500 hover:scale-105">
            <img 
              src="https://raw.githubusercontent.com/satyam19arya/portfolio/master/src/assets/profile.jpg" 
              alt="Satyam Chourasiya" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-8 animate-fade-in">
          Satyam Chourasiya
        </h1>
        
        <h2 className="text-xl md:text-2xl mt-4 text-portfolio-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Senior Backend Engineer
        </h2>
        
        <p className="mt-6 max-w-2xl text-lg text-gray-200 animate-fade-in leading-relaxed" style={{ animationDelay: '0.4s' }}>
          Seasoned Senior Backend Engineer with 5+ years of experience designing, developing, 
          and securing high-performance backend systems and AI-powered platforms.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://www.linkedin.com/in/satyam-chourasiya-931674141/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-portfolio-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-portfolio-dark hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Github size={20} className="group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:ksatyam1038@gmail.com" 
            className="group bg-white hover:bg-gray-50 text-portfolio-dark border border-gray-200 font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform" />
            <span>Email</span>
          </a>
          <a 
            href="tel:+971509373942" 
            className="group bg-white hover:bg-gray-50 text-portfolio-dark border border-gray-200 font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Phone size={20} className="group-hover:scale-110 transition-transform" />
            <span>Phone</span>
          </a>
        </div>
        
        <a 
          href="#about" 
          className="mt-16 animate-bounce text-white hover:text-portfolio-primary transition-colors duration-300 group"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <ArrowDown size={24} className="relative" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
