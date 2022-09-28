import React, { useState } from 'react';

const Navbar = () => {
  const [about, setAbout] =useState(false);

  const showAbout = () => {
    if(window.scrollY >= 100) {
      setAbout(true);
    } else {
      setAbout(false);
    }
  };

  window.addEventListener('scroll', showAbout);

  return (
    <nav className="navbar">
      <a href="#bio" className={about ? "navlink" : "hiddenlink"}>ABOUT ME</a>
      <a href="#projects" className="navlink">PROJECTS</a>
      <a href="#contact" className="navlink">CONTACT</a>
    </nav>
  )
};

export default Navbar;
