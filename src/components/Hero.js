import React from 'react';
import logo from '../logo.svg';
import luis from '../image.png'

const Hero = ({resumeObj}) =>{  
    return (
      <div className="hero">
       <img src={luis} alt="hola" className="hero__image"/>
        <h1 className="hero__header">{resumeObj.basics.name}</h1>
        
        <h4 className="hero__subheader">
          {resumeObj.basics.location.city} <span role="img" aria-label="Sun">☀️</span>
        </h4>

        <p className="style__summary">{resumeObj.basics.summary}</p>
   
        
        <div className="hero__link-container">
          <a
            href="https://github.com/luism3861"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__link"
          >
            made with 
            <img src={logo} className="hero__logo" alt="Made With React Logo"/>
          </a>
        </div>
        <span
          role="img"
          aria-label="Arrow down"
          className="hero__arrow"
        >
          ⬇️
        </span>
      </div>
    );
}

export default Hero;
