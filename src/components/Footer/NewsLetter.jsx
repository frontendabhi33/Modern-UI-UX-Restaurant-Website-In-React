import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And Never Miss Latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter Your Email Address" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
