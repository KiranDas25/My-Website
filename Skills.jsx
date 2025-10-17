import React from 'react';

const Skills = () => {
  const skills = ['Python', 'Machine Learning', 'Deep Learning', 'SQL', 'Pandas', 'Numpy', 'HTML5', 'CSS3', 'Javascript'];
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
};

export default Skills;
