
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 85 },
        { name: "HTML/CSS", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "Django", level: 80 },
        { name: "React", level: 75 },
        { name: "Angular", level: 70 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "MongoDB", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-dark mb-8">
          My <span className="text-portfolio-primary">Skills</span>
        </h2>
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          I've developed a diverse set of skills throughout my career, focusing on both frontend and backend technologies.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-portfolio-primary mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-portfolio-dark font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-portfolio-primary h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["Problem Solving", "Team Collaboration", "Agile Methodology", "Code Review", 
            "System Design", "Unit Testing", "Clean Code", "Documentation"].map((skill, index) => (
            <div 
              key={index} 
              className="bg-blue-50 py-3 px-4 rounded-lg border border-blue-100 text-portfolio-dark font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
