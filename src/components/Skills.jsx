import React from 'react';
import Marquee from 'react-fast-marquee';

const sk=[
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
{ name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
{ name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
{ name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' }, // Fixed Tailwind Logo
{ name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
{ name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
{ name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
{ name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
{ name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
]  

const skills = [
    { 
        name: 'React', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        description: 'A JavaScript library for building UIs.',
        progressBar: 90,
        category: 'Frontend'
      },
      { 
        name: 'JavaScript', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        description: 'A programming language for web development.',
        progressBar: 85,
        category: 'Frontend'
      },
      { 
        name: 'Next.js', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        description: 'A React framework for building server-side render apps.',
        progressBar: 50,
        category: 'Frontend'
      },
      { 
        name: 'Tailwind CSS', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
        description: ' A utility-first CSS framework that allows developers to build custom designs   ',
        progressBar: 90,
        category: 'Frontend'
      }, // Fixed Tailwind Logo
      { 
        name: 'Express', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        description: 'A web application framework for Node.js.',
        progressBar: 70,
        category: 'Backend'
      },
      { 
        name: 'Node.js', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        description: 'A JavaScript runtime built on Chrome\'s V8 engine.',
        progressBar: 90,
        category: 'Backend'
      },
      { 
        name: 'MongoDB', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        description: 'A NoSQL database for modern applications.',
        progressBar: 70,
        category: 'Database'
      },
      { 
        name: 'HTML', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        description: 'The standard markup language for web pages.',
        progressBar: 95,
        category: 'Frontend'
      },
      { 
        name: 'Git', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        description: 'A distributed version control system.',
        progressBar: 90,
        category: 'Tools'
      }
      
];

const Skills = () => {
  return (
    <div id='skills' className=" py-16   flex flex-col items-center justify-center"  data-aos="fade-up"
    data-aos-duration="3000">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary hover:text-accent">My Skills</h2>
      
      {/* Marquee Section */}
      <Marquee gradient={false} speed={50} pauseOnHover>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col h-[350px] items-center justify-center text-center bg-gray-800 p-6 rounded-xl shadow-lg m-5 w-60 border border-gray-700 hover:scale-105 transition-transform duration-300"
          >
            {/* Logo Section */}
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="w-24 h-24 object-contain mb-4"
            />
            
            {/* Skill Name */}
            <h3 className="text-2xl font-semibold">{skill.name}</h3>

            {/* Category */}
            <p className="text-sm text-blue-400 mt-1">{skill.category}</p>

            {/* Description */}
            <p className="text-gray-300 text-sm mt-2">{skill.description}</p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 mt-4">
              <div 
                className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{skill.progressBar}% Proficiency</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
