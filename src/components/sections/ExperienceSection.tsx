
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "HashedIn by Deloitte",
      period: "Jan 2021 - Present",
      location: "Bengaluru, Karnataka, India",
      description: [
        "Analyzed large datasets to extract actionable insights for client applications",
        "Developed and maintained data pipelines for efficient data processing",
        "Collaborated with cross-functional teams to implement data-driven solutions",
        "Utilized Python, SQL, and data visualization tools to present findings effectively"
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "Virtuoso InfoTech",
      period: "Jun 2019 - Dec 2020",
      location: "Bengaluru, Karnataka, India",
      description: [
        "Developed and maintained multiple software applications using Java/Spring framework",
        "Implemented RESTful APIs and microservices architecture",
        "Collaborated with UX designers to implement user-friendly interfaces",
        "Participated in code reviews and implemented best practices"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Tech Solutions",
      period: "Jan 2019 - May 2019",
      location: "Bengaluru, Karnataka, India",
      description: [
        "Assisted in developing web applications using HTML, CSS, and JavaScript",
        "Learned and applied software development methodologies",
        "Contributed to team projects under senior developer guidance",
        "Gained exposure to database management and version control systems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-dark mb-8">
          Work <span className="text-portfolio-primary">Experience</span>
        </h2>
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          My professional journey has equipped me with a diverse skill set and experience across different domains in software development.
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 md:p-8 border-l-4 border-portfolio-primary hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-portfolio-dark">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-portfolio-primary mt-1">{exp.company}</h4>
                </div>
                
                <div className="flex items-center mt-2 md:mt-0 text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-500 mb-4">
                <span className="italic">{exp.location}</span>
              </p>
              
              <ul className="list-disc pl-5 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
