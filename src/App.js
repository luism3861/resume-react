import React from 'react';
import './css/App.css';
import Hero from './components/Hero';

const App = ({ resumeJson }) => {
  return (
      <div className='app'>
        <Hero resumeObj={resumeJson}  />
      </div>
  );
};

export default App;
