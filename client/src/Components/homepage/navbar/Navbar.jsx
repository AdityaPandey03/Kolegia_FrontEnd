import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <p><a href="#home">KOLEGIA</a></p>
        </div>
        <div className="navbar-links_container">
          <p><a href="#feature">Features</a></p>
          <p><a href="#motive">Motive</a></p>
          <p><a href="#review">Reviews</a></p>
          <p><a href="#blog">Contact Us</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <button type="button" name='signin'>Sign in</button>
        <button type="button" name='signup'>Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#feature">Features</a></p>
            <p><a href="#motive">Motive</a></p>
            <p><a href="#review">Reviews</a></p>
            <p><a href="#blog">Contact Us</a></p>
          </div>
          <div className="navbar_menu_container_sign">
            <p><a href="#">Sign in</a></p>
            <p><a href="#">Sign up</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
