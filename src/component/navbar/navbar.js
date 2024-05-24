import React from 'react';
import './navbar.css';

const NavBar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // Adjust for fixed navbar height
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="nav">
      <ul className="navElements">
        <li className="link">
          <a onClick={() => handleScroll('home')}>Home</a>
        </li>
        <li className="link">
          <a onClick={() => handleScroll('projects')}>Projects</a>
        </li>
        <li className="link">
          <a onClick={() => handleScroll('experience')}>Experience</a>
        </li>
        <li className="link">
          <a onClick={() => handleScroll('contact')}>Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;