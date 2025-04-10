
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const educationItems = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Vellore Institute of Technology",
      period: "2016 - 2018",
      location: "Chennai, India",
      description: "Completed master's degree with a focus on advanced computing concepts, software development, and database management systems."
    },
    {
      degree: "Bachelor of Information Technology (B.IT)",
      institution: "Ranchi University",
      period: "2013 - 2016",
      location: "Ranchi, India",
      description: "Completed undergraduate studies with a focus on information technology fundamentals, programming, and systems analysis."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-dark mb-12">
          <span className="text-portfolio-primary">Education</span> & Achievements
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8 relative"
            >
              <div className="absolute -left-3 top-6 md:top-8 bg-portfolio-primary rounded-full p-2 shadow-md">
                <GraduationCap size={24} className="text-white" />
              </div>
              
              <div className="ml-5">
                <h3 className="text-xl font-bold text-portfolio-dark">{item.degree}</h3>
                <h4 className="text-lg font-medium text-portfolio-primary mt-1">{item.institution}</h4>
                
                <div className="flex items-center mt-3 text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                  <span className="mx-2">•</span>
                  <span className="italic">{item.location}</span>
                </div>
                
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-portfolio-dark mb-6 flex items-center">
            <Award className="mr-2 text-portfolio-primary" size={24} />
            Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Developer of the Month (Aug 2023)",
                description: "Optimized AWS infrastructure, reducing operational costs"
              },
              {
                name: "Go Beyond Award",
                description: "Recognized for innovation and contributions to Qatalyst"
              }
            ].map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="font-semibold text-portfolio-primary">{achievement.name}</h4>
                <p className="text-gray-600 mt-1">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
