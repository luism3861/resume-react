import React from 'react';
import Skill from './Skill';

const SkillsList = ({ resumeObj }) => {
  return (
    <div className='skills-list__container' style={{ display: 'flex' }}>
      <div className='skills-list__modal'>
        <h1 className='skills-list__header'>Skill Set</h1>
        <br />
        <ul className='skills-list'>
          {resumeObj.skills.keywords.map((key, index) => (
            <Skill key={key} details={resumeObj.skills.keywords[index]} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsList;
