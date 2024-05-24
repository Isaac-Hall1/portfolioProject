import React from 'react';
import './home.css';
import profileImage from '../../assets/profileImage.jpg';

const Home = () => {
  return(
    <div id = "home" className = "home">
      <div className="image">
        <img src={profileImage} alt="profile picture"></img>
      </div>
      <div className="info">
        <div className="name">
          Isaac Hall
        </div>
        <div className="aboutSection">
          Junior in CS at the University Of Utah
        </div>
      </div>
    </div>
  )
}
export default Home;