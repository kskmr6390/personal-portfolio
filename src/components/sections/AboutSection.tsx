
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
              I'm Satyam Chourasiya, a passionate software developer with experience in developing high-quality, scalable applications. I specialize in both backend and frontend technologies, with a strong foundation in Java, Python, and web development frameworks.
            </p>
            <p className="text-gray-600 mb-6">
              I enjoy tackling complex problems and turning them into simple, elegant solutions. My expertise includes developing RESTful APIs, database design, and creating responsive web applications.
            </p>
            <p className="text-gray-600">
              I am continuously learning and adapting to new technologies to stay at the forefront of software development trends, ensuring that I can provide innovative solutions to modern challenges.
            </p>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">Experience</h4>
                <p className="text-gray-600">4+ years in professional software development</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">Education</h4>
                <p className="text-gray-600">B.Tech in Computer Science</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">Location</h4>
                <p className="text-gray-600">India</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-portfolio-primary mb-2">Interests</h4>
                <p className="text-gray-600">Tech, Innovation, Problem Solving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
