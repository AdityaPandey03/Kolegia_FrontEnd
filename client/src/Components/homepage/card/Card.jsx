import React from 'react';
import './card.css';

const Card = ({ imgUrl, text}) => (
  <div className="feature_card3">
    <div className="feature_card-image3">
      <img src={imgUrl} alt="card_image" />
    </div>
    <div className="feature_card-content3">
      <div>
        <h3>{text}</h3>
        {/* <p>{desc}</p> */}
      </div>
    </div>
  </div>
);

export default Card;
