import React from 'react';
import './style.css';

const experiences = [
  {
    company: 'Innodata',
    role: 'AI Analyst',
    duration: 'Jan 2026 - Present',
    points: [
      'Working on AI/ML data analysis and model evaluation tasks.',
    ],
  },
  {
    company: 'Vaidik Edu Services',
    role: 'SME (Subject Matter Expert)',
    duration: 'May 2025 - Jul 2025',
    points: [
      'Contributed subject matter expertise to support content and learning initiatives.',
    ],
  },
  {
    company: 'Bharat Intern',
    role: 'Machine Learning Intern',
    duration: '1 Month',
    points: [
      'Used HTML and CSS for frontend development.',
      'Worked on a "House Price Prediction" project using linear regression to predict house prices, helping users connect effectively with sellers.',
    ],
  },
];

export default function Experience(props) {
  return (
    <div className="experience">
      <div className='section2'>
        <h1>Experience</h1>
      </div>
      <div className="card-grid">
        {experiences.map((exp, idx) => (
          <div className="info-card" style={{ animationDelay: `${idx * 0.1}s` }} key={exp.company}>
            <div className="card-title">{exp.role}</div>
            <div className="card-subtitle">{exp.company}</div>
            <div className="card-meta">{exp.duration}</div>
            <ul className="card-body-text">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
