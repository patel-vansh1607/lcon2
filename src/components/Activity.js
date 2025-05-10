import React from 'react';
import PropTypes from 'prop-types';
import './Activity.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Activity = ({ title, description, images = [], reverse }) => {
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
          {(images ?? []).map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Activity ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  reverse: PropTypes.bool,
};

export default Activity;