import React from 'react';
import './style.css';

const certifications = [
  { title: 'Coursera (Google)', points: ['Crash Course on Python'] },
  { title: 'Coursera (Stanford)', points: ['Unsupervised Learning, Recommenders, Reinforcement Learning'] },
  { title: 'NPTEL (IIT Kharagpur)', points: ['Software Testing'] },
  { title: 'Guvi', points: ['Python Programming'] },
  { title: 'Yuva', points: ['Website Designing Workshop'] },
  { title: 'Ai4 India', points: ['Animation and Game Designing Workshop'] },
];

export default function Certifications(props) {
  return (
    <div className='certifications'>
      <div className='section2'>
        <h1>Certifications & Workshops</h1>
      </div>
      <div className="card-grid">
        {certifications.map((cert, idx) => (
          <div className="info-card" style={{ animationDelay: `${idx * 0.1}s` }} key={cert.title}>
            <div className="card-title">{cert.title}</div>
            <ul className="card-body-text">
              {cert.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
