import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

export default props => {
  return (
    // Pass on our props

    <Menu {...props}>
      <Link to='/home'>
        <a className="menu-item" href="/">
          Home
        </a>
      </Link>

      <Link to='/about'>
        <a className="menu-item" href="/about">
          About
        </a>
      </Link>

      <Link to='/contact'>
        <a className="menu-item" href="/services">
          Contact
        </a>
      </Link>



    </Menu>
  );
};
