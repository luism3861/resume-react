import React from 'react';
import Jobs from './Job';

const Card = ({ resumeObj }) => {
  const bgColors = ['rgb(35, 80, 118)', 'rgb(48, 54, 53)', '#e53935'];
  return (
    <div className='card__container'>
      <div className='card__content'>
        {resumeObj.work.map((key, index) => {
          return (
            <Jobs
              key={index}
              details={resumeObj.work[index]}
              colors={bgColors[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Card;
