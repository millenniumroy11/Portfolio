import React from 'react';
import './style.css';

const skillGroups = [
  { category: 'Programming Languages', skills: ['C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript'] },
  { category: 'AI/ML', skills: ['Machine Learning', 'Deep Learning', 'AI Model Evaluation'] },
  { category: 'Framework', skills: ['Bootstrap', 'Django', 'ReactJS', 'NodeJS'] },
  { category: 'Database', skills: ['MySQL', 'MongoDB'] },
  { category: 'Developer Tools', skills: ['VS Code', 'Xampp Server', 'Github'] },
];

export default function Skils(props) {
  return (
    <div className='skils'>
      <div className='section2'>
        <h1>Skills</h1>
      </div>
      <div className="card-grid">
        {skillGroups.map((group, idx) => (
          <div className="info-card skill-category" style={{ animationDelay: `${idx * 0.1}s` }} key={group.category}>
            <div className="card-title">{group.category}</div>
            <div className="skill-badges">
              {group.skills.map((skill) => (
                <span className="skill-badge" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
