import React from 'react';
import './style.css';

export default function Contact(props) {
  return (
    <div className='contact'>
      <div className='section2'>
        <h1>Contact</h1>
      </div>
      <div className='text' style={{ textAlign: 'center' }}>
        <div className="contact-card">
          <a className="contact-row" href="mailto:millenniumroy112001@gmail.com">
            <i className="bi bi-envelope-fill"></i> millenniumroy112001@gmail.com
          </a>
          <a className="contact-row" href="tel:+917061228610">
            <i className="bi bi-telephone-fill"></i> +91 7061228610
          </a>
        </div>
      </div>
    </div>
  )
}
