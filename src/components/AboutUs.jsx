import React from 'react';
import './AboutUs.css'; // Optional if you have a separate CSS file

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Paradise Nursery</h1>
      <p className="about-description">
        Welcome to Paradise Nursery, your ultimate destination for bringing nature closer to your living space. 
        We believe that greenery has the power to transform environments, uplift moods, and promote a healthier, happier lifestyle.
      </p>
      
      <div className="about-sections">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to curate the finest selection of indoor and outdoor houseplants, making plant parenting accessible, enjoyable, and rewarding for everyone from beginners to seasoned botanists.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Handpicked, healthy houseplants sourced sustainably.</li>
            <li>Detailed care guides and expert tips for every plant.</li>
            <li>Secure packaging and eco-friendly delivery right to your doorstep.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
