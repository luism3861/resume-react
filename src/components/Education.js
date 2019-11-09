import React from 'react';

const Education = ({education}) => {
  return (
    <div className="education__container" style={{display: 'flex'}}>
      <div className="education__modal">
        <div className="education">
          <h1 className="education__header">Education</h1>
          <div className="education__text">
            <h4 className="education__subheader">{education.institution}</h4>
            <h5 className="education__area">{education.area}</h5>
            <h5 className="education__graduated">Graduated {education.endDate}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
    
export default Education;
