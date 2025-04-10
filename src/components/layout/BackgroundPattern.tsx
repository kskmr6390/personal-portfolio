import React from 'react';

const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/90 to-blue-100/90 z-10"></div>
      
      {/* Coder illustration */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          alt="Python"
          className="absolute top-1/4 left-1/4 w-32 h-32 animate-float"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
          alt="Java"
          className="absolute top-1/3 right-1/4 w-24 h-24 animate-float-delayed"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
          alt="AWS"
          className="absolute bottom-1/4 left-1/3 w-28 h-28 animate-float"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
          alt="Docker"
          className="absolute bottom-1/3 right-1/3 w-20 h-20 animate-float-delayed"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
          alt="Git"
          className="absolute top-1/2 left-1/2 w-16 h-16 animate-float"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-portfolio-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-portfolio-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default BackgroundPattern; 