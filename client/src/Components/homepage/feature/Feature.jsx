import React from 'react';
import Card from '../../homepage/card/Card';
import lost_found from '../../../assests/lost_found.png';
import buy_sell from '../../../assests/buy_sell.png';
import requirement from '../../../assests/requirement.png';

import './feature.css';

const Feature = () => (
  <div className="feature3 section__padding" id="feature">
    <div className="feature-heading3">
      <h1>Features</h1>
    </div>
    <div className="feature-container3">
      <div className="feature-container_cards3">
        <Card imgUrl={lost_found} text="Lost/Found" />
        <Card imgUrl={buy_sell} text="Buy/Sell" />
        <Card imgUrl={requirement} text="Requirement" />
      </div>
    </div>
  </div>
);
export default Feature;
