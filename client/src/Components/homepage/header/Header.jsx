import React from 'react';
import image from '../../../assests/main_image.png';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-image">
      <img src={image} />
    </div>
    <div className="header-content">
      <h1>Hey, I am your College Mate!</h1>
      <p>In such a big college, it's so difficult to find your pendrive if you forget it somewhere. Or, if you want to buy some old laptop because of lack of money, especially for freshers. Isn't it?</p>
      <p>Don't worry, you are at right place where you can report if you have lost something or if you want to buy/sell something.</p>
      <div className="header-content_input">
      <a href="#feature"><p>Know More</p></a>
      </div>

    </div>
  </div>
);

export default Header;
