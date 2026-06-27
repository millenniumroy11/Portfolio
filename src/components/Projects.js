import React from 'react';
import './style.css';

const projects = [
  {
    title: 'Chatterbox',
    subtitle: 'Real-time Chat Application',
    points: [
      'Built a real-time chat application with instant messaging between users.',
    ],
    tags: ['React', 'JavaScript'],
  },
  {
    title: 'House Price Prediction',
    points: [
      'Predicts house prices using a machine learning model trained on housing data.',
    ],
    tags: ['HTML', 'Python', 'Django', 'AI'],
  },
  {
    title: 'Object Detection System',
    points: [
      'Detects and classifies objects in real time using a trained AI model.',
    ],
    tags: ['Kotlin', 'Python', 'AI'],
  },
  {
    title: 'Online Complain System',
    points: [
      'Frontend built with HTML, CSS, and Bootstrap for a user-friendly interface, Backend powered by Django, MongoDB used for efficient data storage.',
      'Ensured complaint confidentiality by restricting access to authorized personnel ("Best Man") for resolution.',
      'Designed a secure and seamless complaint submission and tracking system to enhance transparency and accountability.',
    ],
    tags: ['HTML', 'CSS', 'Bootstrap', 'Django', 'MongoDB'],
  },
  {
    title: 'Vehicle Rental System',
    points: [
      'Frontend built with HTML, CSS, and Bootstrap for a responsive UI, Backend developed using Django, MySQL used for database management.',
      'Implemented user authentication, allowing customers and dealers to log in with role-based access control.',
      'Enhanced accessibility and user experience by providing a seamless booking process for vehicle rentals.',
    ],
    tags: ['HTML', 'CSS', 'Bootstrap', 'Django', 'MySQL'],
  },
];

export default function Projects(props) {
  return (
    <div className='projects'>
      <div className='section2'>
        <h1>Projects</h1>
      </div>
      <div className="card-grid">
        {projects.map((proj, idx) => (
          <div className="info-card" style={{ animationDelay: `${idx * 0.1}s` }} key={proj.title}>
            <div className="card-title">{proj.title}</div>
            {proj.subtitle && <div className="card-subtitle">{proj.subtitle}</div>}
            <ul className="card-body-text">
              {proj.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="tech-tags">
              {proj.tags.map((tag) => (
                <span className="tech-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
