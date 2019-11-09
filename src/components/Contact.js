/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";

const Contact = ({ info }) => {
  const layout = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  return (
    <div className="contact__container" style={{ display: "flex" }}>
      <div className="contact__modal">
        <CSSTransitionGroup
          style={layout}
          component="div"
          transitionName="slide"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}
        >
          <h1 className="contact__header">Contact</h1>

          <h3>
            <a style={{ textDecoration: "none" }}>{info.email}</a>
          </h3>

          <h3 className="contact__container">
            <a
              href="https://www.linkedin.com/in/luism3861/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {info.website}
            </a>
          </h3>
        </CSSTransitionGroup>
      </div>
    </div>
  );
};

export default Contact;
