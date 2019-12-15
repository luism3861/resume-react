import React from "react";
import logo from "../logo.svg";
import wicho from "../wicho.jpg";

const Hero = ({ resumeObj }) => {
  return (
    <div className="hero">
      <img src={wicho} alt="hola" className="image__profile" />
      <h1 className="hero__header">{resumeObj.basics.name}</h1>

      <h4 className="hero__subheader">{resumeObj.basics.location.city}</h4>

      <p className="style__summary">{resumeObj.basics.summary}</p>
      {resumeObj.basics.pdf ? (
        <p className="hero__text">
          <a
            href={resumeObj.basics.pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF version
          </a>{" "}
          of the resume.
        </p>
      ) : (
        ""
      )}
      <h3 className="style__phone">{resumeObj.basics.email}</h3>
      <h3 className="style__phone">{resumeObj.basics.phone}</h3>
      <div className="hero__link-container">
        made with
        <img src={logo} className="hero__logo" alt="Made With React Logo" />
      </div>
      <div className="logo__container">
        <a
          href="https://github.com/luism3861"
          className="github__logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://linkedin.com/in/luism3861"
          className="github__logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
