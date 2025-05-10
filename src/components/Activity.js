// src/components/Activity.js
import React from 'react';
import PropTypes from 'prop-types'; // Add PropTypes for validation
import './Activity.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Activity = ({ title, description, images, reverse }) => {
  // Fallback UI if images array is empty or undefined
  if (!images || images.length === 0) {
    return <div className="activity">No images available for this activity</div>;
  }

  return (
    <div className={`activity ${reverse ? 'reverse' : ''}`}>
      <div className="activity-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="activity-carousel">
        <Carousel 
          showThumbs={false} 
          infiniteLoop 
          autoPlay 
          showStatus={false} 
          interval={4000}
          transitionTime={800}
        >
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Activity ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

// Prop validation using PropTypes
Activity.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.bool,
};

export default Activity;
