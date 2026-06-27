import React from 'react';
import './style.css';

const education = [
  {
    title: 'Bachelor Of Technology (B.Tech)',
    points: [
      'Branch : Computer Science And Engineering',
      'Institute : Sagar Institute Of Science And Technology (SISTec)',
      'Overall GPA : 8.21',
    ],
  },
  {
    title: 'Intermediate',
    points: [
      'Branch : Science (Math)',
      'School : Thakur OM Prakash UMV',
      'Percentage : 64.80',
    ],
  },
  {
    title: 'Matriculation',
    points: [
      'Branch : Basic',
      "School : St Karen's High School",
      'Percentage : 84.00',
    ],
  },
];

export default function Education(props) {
  return (
    <div className='education'>
      <div className='section2'>
        <h1>Education</h1>
      </div>
      <div className="card-grid">
        {education.map((edu, idx) => (
          <div className="info-card" style={{ animationDelay: `${idx * 0.1}s` }} key={edu.title}>
            <div className="card-title">{edu.title}</div>
            <ul className="card-body-text">
              {edu.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
