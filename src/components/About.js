import React, { useState, useEffect } from 'react';
import './style.css';
import meImg from '../assets/me.jpg';

export default function About() {
  const [typedText, setTypedText] = useState(['', '']);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const linesToType = ["Hi!! It's me 👋", " Millennium Roy"];

    const interval = setInterval(() => {
      if (lineIndex < linesToType.length) {
        const currentLine = linesToType[lineIndex];
        if (charIndex < currentLine.length) {
          setTypedText(prev => {
            const updated = [...prev];
            updated[lineIndex] += currentLine[charIndex];
            return updated;
          });
          setCharIndex(prev => prev + 1);
        } else {
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
        }
      } else {
        setTimeout(() => {
          setTypedText(['', '']);
          setLineIndex(0);
          setCharIndex(0);
        }, 1000);
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [charIndex, lineIndex]);

  return (
    <div className="about">
      <table className="about-table">
        <tbody>
          <tr>
            <td className="text-section">
              <h1>{typedText[0]}</h1>
              <h1>{typedText[1]}</h1>
              <div className="social-icons">
    <a
      href="https://github.com/millenniumroy11"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-link"
    >
      <i className="bi bi-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/millennium-roy-2652a0208/"
      target="_blank"
      rel="noopener noreferrer"
      className="icon-link"
    >
      <i className="bi bi-linkedin"></i>
    </a>
  </div>
            </td>
           
            <td className="image-cell">
              <img src={meImg} alt="Myself" className="about-img" />
            </td>
          </tr>
          
        </tbody>
      </table>

      <div className="section">
        <h1>About Me</h1>
      </div>

      <div className='about-text'>
        <p>
        A passionate and enthusiastic developer with a strong
          interest in AI and backend development. I have a solid understanding
          of full-stack web development and am skilled in building robust,
          scalable applications. My expertise includes working with React.js for
          frontend development, Django for backend logic, and MySQL for database
          management. I am a quick learner, always eager to explore new
          technologies and enhance my skill set. I enjoy solving problems,
          whether it's optimizing backend performance or creating seamless,
          user-friendly interfaces. My approach to development is focused on
          writing clean, efficient code that delivers real-world value. With my
          knowledge of AI and backend systems, I aim to create innovative
          solutions that improve user experience and streamline business
          processes. I am always looking for new opportunities to grow and
          contribute to impactful projects.
        </p>
      </div>
    </div>
  );
}
