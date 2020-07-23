import React, { useEffect } from 'react';

const NavBar = ({ children, menuOpen, onToggleClick }) => {
  useEffect(() => {
    document.body.classList.add('has-navbar-fixed-top');
  });

  const links = React.Children.toArray(children);

  return (
    <nav className="navbar is-primary is-fixed-top">
      <div className="navbar-brand">
        <div
          className={`navbar-burger burger ${menuOpen && 'is-active'}`}
          onClick={onToggleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar-menu ${menuOpen && 'is-active'}`}>
        <div className="navbar-start">{links.slice(1)}</div>
        <div className="navbar-end">{links[0]}</div>
      </div>
    </nav>
  );
};

export default NavBar;
