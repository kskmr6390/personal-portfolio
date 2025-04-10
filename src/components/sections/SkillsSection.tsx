import React from 'react';
import { Code2, Cloud, Database, Shield, Cpu, GitBranch, Server, Lock } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code2 className="text-portfolio-primary" size={24} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "FastAPI", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-portfolio-primary" size={24} />,
      skills: [
        { name: "AWS (EC2, Lambda)", level: 90 },
        { name: "AWS (SQS, ECS)", level: 85 },
        { name: "Docker", level: 85 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "CloudWatch", level: 85 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="text-portfolio-primary" size={24} />,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "DynamoDB", level: 80 },
        { name: "Git", level: 90 },
        { name: "Jira", level: 85 }
      ]
    }
  ];

  const additionalSkills = [
    { name: "GDPR Compliance", icon: <Shield size={20} /> },
    { name: "Secure Coding", icon: <Lock size={20} /> },
    { name: "Data Encryption", icon: <Lock size={20} /> },
    { name: "Agile/Scrum", icon: <GitBranch size={20} /> },
    { name: "Stripe Integration", icon: <Server size={20} /> },
    { name: "API Design", icon: <Code2 size={20} /> },
    { name: "LLM Copilots", icon: <Cpu size={20} /> },
    { name: "AWS Infrastructure", icon: <Cloud size={20} /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-40 w-72 h-72 bg-portfolio-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-72 h-72 bg-portfolio-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">Skills</span>
        </h2>
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          I've developed a diverse set of skills throughout my career, focusing on backend technologies, cloud solutions, and secure coding practices.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-portfolio-dark ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-portfolio-dark font-medium group-hover:text-portfolio-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm group-hover:text-portfolio-primary transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary h-2.5 rounded-full transition-all duration-500 ease-out group-hover:opacity-90"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalSkills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white py-4 px-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3 group"
            >
              <div className="text-portfolio-primary group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <span className="text-portfolio-dark font-medium group-hover:text-portfolio-primary transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
