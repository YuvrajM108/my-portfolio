import React, { useState } from 'react';

const Navbar = () => {
  const [about, setAbout] = useState(false);

  const showAbout = () => {
    if (window.scrollY >= 500) {
      setAbout(true);
    } else {
      setAbout(false);
    }
  };

  window.addEventListener('scroll', showAbout);

  return (
    <nav className="navbar">
      {
      about ? <a href="#bio" className="navlink">ABOUT ME</a>
        : <p> </p>
      }
      <a href="#projects" className="navlink">PROJECTS</a>
      <a href="#contact" className="navlink">CONTACT</a>
    </nav>
  );
};

export default Navbar;
