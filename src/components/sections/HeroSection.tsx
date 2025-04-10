
import React from 'react';
import { ArrowDown, Linkedin, Github, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-white to-blue-50 pt-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-portfolio-primary mb-6">
          <img 
            src="https://media.licdn.com/dms/image/D5603AQEKnd_h5EfUWg/profile-displayphoto-shrink_200_200/0/1681138122100?e=1719446400&v=beta&t=BYeBakKm-2i74DIoHhMorF-t-deBGQaZbxgNaKRUsGk" 
            alt="Satyam Chourasiya" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-portfolio-dark animate-fade-in">
          Satyam Chourasiya
        </h1>
        
        <h2 className="text-xl md:text-2xl mt-4 text-portfolio-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Senior Backend Engineer
        </h2>
        
        <p className="mt-6 max-w-2xl text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Seasoned Senior Backend Engineer with 5+ years of experience designing, developing, 
          and securing high-performance backend systems and AI-powered platforms.
        </p>
        
        <div className="mt-8 flex space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://www.linkedin.com/in/satyam-chourasiya-931674141/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-portfolio-primary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
          >
            <Linkedin size={16} className="mr-2" />
            LinkedIn
          </a>
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-portfolio-dark hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
          >
            <Github size={16} className="mr-2" />
            GitHub
          </a>
          <a 
            href="mailto:ksatyam1038@gmail.com" 
            className="bg-white hover:bg-gray-100 text-portfolio-dark border border-gray-300 font-semibold py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
          >
            <Mail size={16} className="mr-2" />
            Email
          </a>
          <a 
            href="tel:+971509373942" 
            className="bg-white hover:bg-gray-100 text-portfolio-dark border border-gray-300 font-semibold py-2 px-4 rounded-md transition-colors duration-300 flex items-center"
          >
            <Phone size={16} className="mr-2" />
            Phone
          </a>
        </div>
        
        <a 
          href="#about" 
          className="mt-16 animate-bounce text-portfolio-primary hover:text-portfolio-secondary transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
