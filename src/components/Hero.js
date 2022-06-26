import React from 'react';
import logo from '../logo.svg';
import avatar from '../me.jpg';

const Hero = ({ resumeObj }) => {
  return (
    <div className='hero'>
      <img src={avatar} alt='profile' className='image__profile' />
      <h1 className='hero__header'>{resumeObj.basics.name}</h1>
      <h4 className='hero__subheader'>{resumeObj.basics.skill}</h4>
      <p className='style__summary'>Hello, I'm Luis. I do cross-platform mobile app development using <span style={{color:'#06bcee',fontWeight: 'bold'}}>React Native</span>  that means mostly JavaScript, Java and Objective-C/Swift. I'm passionate contribute to open source. </p>
      <h3 className='style__email'>{resumeObj.basics.email}</h3>
      <div className='hero__link-container'>
        made with
        <img src={logo} className='hero__logo' alt='Made With React Logo' />
      </div>
      <div className='logo__container'>
       
        <a
          href='https://linkedin.com/in/luism3861'
          className='linkedin__logo'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in fa-3x'></i>
        </a>
        <a
          href='https://github.com/luism3861'
          className='github__logo'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github fa-3x'></i>
        </a>
        <a
          href='https://twitter.com/luism3861'
          className='twitter__logo'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-twitter fa-3x'></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
