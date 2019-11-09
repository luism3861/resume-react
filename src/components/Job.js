import React from 'react';

const Job = ({details,colors})  =>{
    return (
      <div className="job__container" style={{background: colors}}>
          <div className="job">
            <div className="job__header">
              <h3>{details.company}</h3>
              <h4>{details.position}</h4>
            </div>
          
            <div className="job__date">
              {
                details.current ? 
                `Current Job as of ${details.startDate}` : 
                `${details.startDate} - ${details.endDate}`
              }
            </div>
            <br/>
          
            <ul className="job__list">
              {
                details.highlights.map((key, index) => {
                  return <li key={index} classNam="job__list__style" >{details.highlights[index]}</li>
                })
              }
            </ul>
          </div>
      </div>
    );
}

export default Job;
