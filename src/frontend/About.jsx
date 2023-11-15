import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
// src/App.js


// src/App.js



const About = () => {
  return (
    <div className="about-container">
        <nav className="navbar">
        <ul>
          <li><Link to="/homepage">Homepage</Link></li>
          <li><Link to="/creat-meal">Create Meal</Link></li>
          
          <li><Link to="/Contact">Customer Service</Link></li>
        </ul>
      </nav>
      <h2>About Us</h2>
      <p>
      "At Culinary Cache, our mission is to combat food waste and create a more sustainable future. We believe that every meal counts and that no good food should go to waste. Our platform connects individuals, businesses, and communities to rescue surplus food that would otherwise be discarded.

We are committed to fostering a world where every meal contributes to nourishing people rather than landfills. By leveraging technology, we empower users to make a positive impact on the environment and support local businesses. Through our app, users can discover and rescue delicious, perfectly edible meals from nearby restaurants, cafes, and grocery stores at a fraction of the original price.

At the heart of Culinary Cache is the belief that small actions can lead to significant change. Together, we strive to build a community dedicated to reducing food waste, promoting sustainability, and making a tangible difference in the lives of individuals and the health of our planet.

Join us on our journey to make every meal count, and let's create a world where good food is cherished, not wasted."
      </p>
      <img
        src="https://natashaskitchen.com/wp-content/uploads/2019/02/Greek-Salad.jpg"
        alt="Delicious Salad"
        className="salad-image"
      />
    </div>
  );
};

export default About;

