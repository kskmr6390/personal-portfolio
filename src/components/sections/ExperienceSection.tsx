
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Backend Engineer",
      company: "Entropik Tech",
      period: "Dec 2022 - Present",
      location: "Abu Dhabi, UAE",
      description: [
        "Led the development of AI-powered Integrated Market Research Platforms, incorporating LLM-powered copilots, reducing project delivery time by 30%",
        "Optimized cloud infrastructure using AWS Lambda & Step Functions, achieving 20% cost savings on cloud expenses",
        "Ensured GDPR compliance and secure data processing across all research and survey platforms",
        "Integrated Stripe for subscription-based payments, improving transaction efficiency and financial reporting",
        "Mentored 4 junior engineers, fostering code quality, system design, and AWS best practices"
      ]
    },
    {
      title: "Senior Backend Engineer",
      company: "Entropik Tech",
      period: "May 2022 - Dec 2022",
      location: "Bangalore, India",
      description: [
        "Designed and built Qatalyst, an AI-powered marketing survey and insights platform",
        "Increased user engagement by 20% and generated $50,000 in additional revenue within the first quarter of launch",
        "Optimized backend systems for scalability and performance"
      ]
    },
    {
      title: "Backend Engineer",
      company: "Entropik Tech",
      period: "Aug 2021 - May 2022",
      location: "Bangalore, India",
      description: [
        "Developed Facial Recognition APIs for emotion insights, enhancing analytics for 10K+ enterprise users",
        "Built a multi-tenant SaaS platform supporting 10K+ concurrent transactions with SSL and data encryption",
        "Integrated AWS services (ECS, SQS, Step Functions, Lambda, Pub/Sub), reducing processing time by 95%",
        "Contributed to a $1M ARR increase by enabling third-party integrations"
      ]
    },
    {
      title: "Associate Software Development Engineer",
      company: "Teamlease",
      period: "Jul 2019 - Aug 2021",
      location: "Bangalore, India",
      description: [
        "Developed Bot APIs to automate customer service workflows, reducing email queue times by 60%",
        "Enhanced TL-Connect: DWS modules (attendance, payroll) using Java & Spring Boot",
        "Standardized codebases using OOP & SOLID principles, reducing errors by 20%"
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
          My professional journey has equipped me with expertise in backend development, cloud infrastructure, and AI-powered solutions.
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
