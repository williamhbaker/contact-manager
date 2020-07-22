import React, { useState} from 'react';

import NavBarLink from './NavBarLink';
import NavBar from './NavBar';

import paths from './paths';

const NavControl = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <NavBar
      menuOpen={menuOpen}
      onToggleClick={toggleMenu}
      onCloseClick={closeMenu}
    >
      {paths.map(path => (
        <NavBarLink
          key={path.path}
          onClick={closeMenu}
          {...path}
        />
      ))}
    </NavBar>
  );
};

export default NavControl;