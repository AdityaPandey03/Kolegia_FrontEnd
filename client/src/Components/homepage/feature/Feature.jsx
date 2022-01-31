import React from 'react';
import Card from '../../homepage/card/Card';
import lost_found from '../../assets/lost_found.png';
import buy_sell from '../../assets/buy_sell.png';
import requirement from '../../assets/requirement.png';

import './feature.css';

const Feature = () => (
  <div className="feature section__padding" id="blog">
    <div className="feature-heading">
      <h1>Features</h1>
    </div>
    <div className="feature-container">
      <div className="feature-container_cards">
        <Card imgUrl={lost_found} text="Lost/Found" />
        <Card imgUrl={buy_sell} text="Buy/Sell" />
        <Card imgUrl={requirement} text="Requirement" />
      </div>
    </div>
  </div>
);
export default Feature;
