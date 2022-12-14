import React from "react";
import "../styles/cardvideo.css"
const CardVideo = ({ el }) => {
  return (
    <div>
      <div className="containerCard">
        <div className="video">
          <iframe src={el.video} controls="0" frameborder="0" scrolling="no" />
          <img src={el.video} alt="hey" />
        </div>
        <div className="donne">
          <div className="title">
            <h3>{el.title}</h3>
            <p>chanel name</p>
          </div>
          <div className="viewdate">
            <p>2 M vue</p>
            <h2>.</h2>
            <p>{el.date} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
