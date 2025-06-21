import React from 'react';
import avatar from '../me.jpg';

const Hero = ({ resumeObj }) => {
  return (
    <div className='hero'>
      <img src={avatar} alt='profile' className='image__profile' />
      <h1 className='hero__header'>{resumeObj.basics.name}</h1>
      <h4 className='hero__subheader'>{resumeObj.basics.skill}</h4>
      <p className='style__summary'>I have experience in Security Software and Mobile Software</p>
      <h1 className='style__summary_owasp'>Code verification according to OWASP guidelines</h1>
      <h3 className='style__email'>{resumeObj.basics.email}</h3>
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
      </div>
    </div>
  );
};

export default Hero;
