import React from 'react';

const Job = ({ details, colors }) => {
  return (
    <div className='job__container' style={{ background: colors }}>
      <div className='job'>
        <div className='job__header'>
          <h3>{details.firstCompany}</h3>
          <h4>{details.position}</h4>
        </div>
        <div className='job__date'>
          {details.current
            ? `Current Job as of ${details.startDate}`
            : `${details.startDate}  ${details.endDate}`}
        </div>
        <br />
        <h3>{details.summary}</h3>
        <ul className='job__list'>
          {details.highlights.map((key, index) => {
            return (
              <li key={index} className='job__list'>
                {details.highlights[index]}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='job__secondcontainer'>
        <div className='job'>
          <div className='job__header'>
            <h3>{details.secondCompany}</h3>
            <h4>{details.secondPosition}</h4>
          </div>
          <div>
            {details.startDateSecondJob} {details.startDateSoncd}
          </div>
          <br />
          <h3>{details.summarySecond}</h3>
          <div className='job__date'>{details.startDateSecond}</div>
          <ul className='job__list'>{details.highlightsSecond}</ul>
        </div>
      </div>
      
    </div>
  );
};

export default Job;
