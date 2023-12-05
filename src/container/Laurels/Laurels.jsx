import React from "react";
import "./Laurels.css";
import { data, images } from "../../constants";

const Awards = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <Awards key={award.title} award={award} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="" />
      </div>
    </div>
  );
};

export default Laurels;
