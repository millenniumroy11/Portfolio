import React from 'react';
import './style.css';

export default function Projects(props) {
  return (
    <div className='projects'>
      <div className='section2'>
        <h1>Projects</h1>
      </div>
      <div className='text'>
        <p>
        <div className='subhead'>Online Complain System <br /></div>
            →  Technologies Used: Frontend built with HTML, CSS, and Bootstrap for a user-friendly interface, Backend powered
            by Django, MongoDB used for efficient data storage. <br />
            →  Ensured complaint confidentiality by restricting access to authorized personnel ("Best Man") for resolution. <br />
            →  Designed a secure and seamless complaint submission and tracking system to enhance transparency and account
            ability.<br /> <br />

            <div className='subhead'>Vehicle Rental System <br /></div>
            → Technologies Used: Frontend built with HTML, CSS, and Bootstrap for a responsive UI, Backend developed
            using Django, MySQL used for database management. <br />
            → Implemented user authentication, allowing customers and dealers to log in with role-based access control. <br />
            → Enhanced accessibility and user experience by providing a seamless booking process for vehicle rentals.
        </p>
      </div>
    </div>
  )
}
