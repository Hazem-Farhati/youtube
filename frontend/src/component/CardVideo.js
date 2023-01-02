import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/cardvideo.css";
const CardVideo = ({ setwidth1, el, width1, width, show, setShow }) => {
  const user = useSelector((state) => state.user?.user);
  return (
    <>
      <Link onClick={() => setShow(false)} to={`/view/${el?._id}`}>
        <div>
          {!show ? setwidth1("350px") : setwidth1("290px")}
          <div className="containerCard" style={{ width: width1 }}>
            <div className="video">
              <video
                src={el.video}
                frameborder="0"
                scrolling="no"
                poster={el?.poster}
              />
            </div>
            <div className="donne">
              <div className="title">
                {el?.title.length > 50 ? (
                  <h3>{el?.title.slice(0, 51) + "..."}</h3>
                ) : (
                  <h3>{el?.title}</h3>
                )}
               
                <div className="chaineuser">
                  <img src={el?.user_image} />
                  <p>
                    {el?.name} {el?.lastname}{" "}
                  </p>
                </div>
              </div>
              <div className="viewdate">
                <p>2 M vue {el?.abonner}</p>
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
