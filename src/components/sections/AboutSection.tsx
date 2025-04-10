
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-dark mb-12">
          About <span className="text-portfolio-primary">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-xl font-semibold text-portfolio-dark mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              I'm Satyam Chourasiya, a passionate Senior Backend Engineer with over 5 years of experience designing, 
              developing, and securing high-performance backend systems and AI-powered platforms.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in Python, Java, and AWS, with expertise in secure coding and GDPR compliance. 
              I have a proven track record in leading teams, optimizing cloud infrastructure, and building scalable systems.
            </p>
            <p className="text-gray-600">
              I'm passionate about driving innovation through LLM-powered copilots and cloud-native solutions, 
              continuously expanding my knowledge to stay at the forefront of technological advancements.
            </p>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">Experience</h4>
                <p className="text-gray-600">5+ years in Backend Engineering</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">Education</h4>
                <p className="text-gray-600">MCA & B.IT</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">Location</h4>
                <p className="text-gray-600">Abu Dhabi, UAE</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">Interests</h4>
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
