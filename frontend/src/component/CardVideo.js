import React from "react";
import { useSelector } from "react-redux";
import "../styles/cardvideo.css"
const CardVideo = ({ el }) => {
  const user = useSelector((state) => state.user?.user);
  return (
    <div>
      <div className="containerCard">
        <div className="video">
          <iframe src={el.video} controls="0" frameborder="0" scrolling="no" />
        </div>
        <div className="donne">
          <div className="title">
            <h3>{el.title}</h3>
            <div className="chaineuser">
            <p>channel </p>
            </div>
          </div>
          <div className="viewdate">
            <p>2 M vue</p>
            <h2>.</h2>
            <p>{el?.date.split("T").map((el)=>el).slice(0,1)} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
