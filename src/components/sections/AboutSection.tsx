import React from 'react';
import { Card } from '@/components/ui/card';
import { User, Briefcase, GraduationCap, MapPin, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-12">
          <div className="md:w-1/2 order-2 md:order-1 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-portfolio-dark mb-4 flex items-center">
                <User className="mr-2 text-portfolio-primary" size={24} />
                Who I Am
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm Satyam Chourasiya, a passionate Senior Backend Engineer with over 5 years of experience designing, 
                developing, and securing high-performance backend systems and AI-powered platforms.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-portfolio-dark mb-4 flex items-center">
                <Lightbulb className="mr-2 text-portfolio-primary" size={24} />
                My Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I specialize in Python, Java, and AWS, with expertise in secure coding and GDPR compliance. 
                I have a proven track record in leading teams, optimizing cloud infrastructure, and building scalable systems.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-portfolio-dark mb-4 flex items-center">
                <Briefcase className="mr-2 text-portfolio-primary" size={24} />
                My Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I excel at balancing demanding priorities across multiple projects, making quick decisions, and 
                liaising with stakeholders to ensure smooth delivery. I'm passionate about driving innovation through 
                LLM-powered copilots and cloud-native solutions.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <Briefcase className="text-portfolio-primary mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-portfolio-dark">Experience</h4>
                </div>
                <p className="text-gray-600">5+ years in Backend Engineering</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <GraduationCap className="text-portfolio-primary mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-portfolio-dark">Education</h4>
                </div>
                <p className="text-gray-600">MCA & B.IT</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <MapPin className="text-portfolio-primary mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-portfolio-dark">Location</h4>
                </div>
                <p className="text-gray-600">Abu Dhabi, UAE</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <Lightbulb className="text-portfolio-primary mr-3" size={24} />
                  <h4 className="text-lg font-semibold text-portfolio-dark">Interests</h4>
                </div>
                <p className="text-gray-600">AI, Cloud Solutions, Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
