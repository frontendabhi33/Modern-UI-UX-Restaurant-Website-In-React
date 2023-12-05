import React, { useRef, useState } from "react";
import "./Intro.css";
import { meal } from "../../constants";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const playVideoButton = () => {
    setPlayVideo(!playVideo);
    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        ref={videoRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={playVideoButton}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
