import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/App.css';
import Hero from './components/Hero';

const App = ({ resumeJson }) => {
  return (
    <Router>
      <div className='app'>
        <Hero resumeObj={resumeJson} />
      </div>
    </Router>
  );
};

export default App;
