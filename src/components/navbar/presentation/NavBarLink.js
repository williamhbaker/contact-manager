import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = ({
  path,
  icon,
  text,
  navLinkClick,
}) => (
  <NavLink
    to={path}
    onClick={navLinkClick}
    className='navbar-item'
    activeClassName='is-active'
  >

    <span className="icon">
      {icon}
    </span>
    <span>{text}</span>
  </NavLink>
);

export default NavBarLink;