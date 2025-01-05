import React from 'react';
import AnimatedWave from '../animatedwave ';

const Skills = () => {
  const skills = [
    { name: 'Frontend Development', skillsList: ['React.js', 'Next.js', 'Angular', 'HTML & CSS'] },
    { name: 'Backend Development', skillsList: ['Node.js', 'Express.js', 'Spring Boot', 'MongoDB'] },
    { name: 'Mobile Development', skillsList: ['Flutter', 'React Native', 'Android'] },
  ];

  return (
    <section className="relative w-full min-h-screen py-20  bg-gradient-to-b from-primary via-primary to-secondary">
      {/* Background */}
      <div className="absolute -top-20 left-0 w-full h-full">
        <AnimatedWave />
      </div>

      {/* Skills Content */}
      <div className="relative z-10 w-full flex items-center justify-center flex-col">
        <p className=" tracking-widest font-bold mb-4 mt-32 text-center text-white text-xl">
          SKILLS
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase text-white font-bold text-center relative z-10">
            Expertise & Proficiency
            <span className="ml-1 border-l-4 border-primary animate-ping"></span>
        </h1>

        <p className="text-white mt-2 text-center text-lg md:text-2xl max-w-xl mx-auto">
          I specialize in a wide range of technologies, from frontend to backend development and mobile solutions.
        </p>

        {/* Skill List */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((category, index) => (
            <div key={index} className="text-center bg-secondary bg-opacity-50 p-8 rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-xl duration-300">
              <h2 className="text-3xl font-semibold text-white mb-4">{category.name}</h2>
              <ul className="space-y-3 text-md text-mediumGray">
                {category.skillsList.map((skill, idx) => (
                  <li key={idx} className="text-lg text-initial">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;