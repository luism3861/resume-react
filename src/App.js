import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import SkillsList from './components/SkillList'
import Card from './components/Card';
import Education from './components/Education';
import Contact from './components/Contact';

const App = ({resumeJson}) => {

    return (
      <Router>  
        <div className="app">
          <Hero resumeObj={resumeJson} />
          
          <Route
            exact path={'/'}
            render={({ match }) => <Card resumeObj={resumeJson} />}
          />
          <Route
            exact path={'/skills'}
            render={({ match }) => <SkillsList resumeObj={resumeJson} />}
          />
          <Route
            exact path={'/education'}
            render={({ match }) => <Education education={resumeJson.education[0]} />}
          />
          <Route
            exact path={'/basics'}
            render={({ match }) => <Contact info={resumeJson.basics} />}
          />

          <ul className="nav__container">
            <nav className="nav">
              <NavLink exact to={'/'} className="nav__btn">Experience</NavLink>
              <NavLink to={'/skills'} className="nav__btn">Skills</NavLink>
              <NavLink to={'/education'} className="nav__btn">Education</NavLink>
            </nav>
          </ul>
        </div>
      </Router>
    );
}

export default App;
