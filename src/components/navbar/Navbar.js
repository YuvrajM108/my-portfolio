import React, { useState } from 'react';

const Navbar = () => {
  const [about, setAbout] = useState(0);

  const showAbout = () => {
    if (window.scrollY >= 50) {
      setAbout(1);
    }
    if (window.scrollY >= 500) {
      setAbout(2);
    } else {
      setAbout(0);
    }
  }
};

  window.addEventListener('scroll', showAbout);

  return (
      about === 0 ? <nav className="navbar-grey">
        <p className="hiddenlink">ABOUT ME</p>
        <a href="#projects" className="navlink">PROJECTS</a>
        <a href="#contact" className="navlink">CONTACT</a>
      </nav>
      : <nav className="navbar">
      {
      about === 2 ? <a href="#bio" className="navlink">ABOUT ME</a>
        : <p className="hiddenlink">ABOUT ME</p>
      }
        <a href="#projects" className="navlink">PROJECTS</a>
        <a href="#contact" className="navlink">CONTACT</a>
      </nav>
  );

export default Navbar;
