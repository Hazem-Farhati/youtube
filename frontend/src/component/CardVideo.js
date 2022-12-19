import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/cardvideo.css";
const CardVideo = ({ setwidth1, el, width1, width, show, setShow }) => {
  const user = useSelector((state) => state.user?.user);
  return (
    <>
    <Link to={`/view/${el?._id}`}>
    <div>
        {!show ?setwidth1("350px") :setwidth1("290px")}
      <div className="containerCard" style={{width:width1}} >
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
            <p>
              {el?.date
                .split("T")
                .map((el) => el)
                .slice(0, 1)}{" "}
            </p>
          </div>

        </div>

      </div>
      {console.log(width1)}
    </div>
    </Link>
    </>
  );
};

export default CardVideo;
