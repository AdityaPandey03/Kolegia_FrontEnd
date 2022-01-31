import React from 'react';
import './card.css';

const Card = ({ imgUrl, text}) => (
  <div className="feature_card">
    <div className="feature_card-image">
      <img src={imgUrl} alt="card_image" />
    </div>
    <div className="feature_card-content">
      <div>
        <h3>{text}</h3>
        {/* <p>{desc}</p> */}
      </div>
    </div>
  </div>
);

export default Card;
