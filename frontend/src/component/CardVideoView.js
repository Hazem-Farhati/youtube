import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/cardvideoview.css";
const CardVideoView = ({ setwidth1, el, width1, width, show, setShow }) => {
  const user = useSelector((state) => state.user?.user);
  return (
    <>
      <Link to={`/view/${el?._id}`}>
        <div>
          {/* {!show ?setwidth1("350px") :setwidth1("290px")} */}
          <div className="containerCard_v">
            <div className="video_v">
              <iframe
                src={el.video}
                controls="0"
                frameborder="0"
                scrolling="no"
              />
            </div>
            <div className="donne_v">
              <div className="title_v">
                {el?.title.length > 50 ? (
                  <h3>{el?.title.slice(0, 51) + "..."}</h3>
                ) : (
                  <h3>{el?.title}</h3>
                )}
                <div className="chaineuser_v">
                  <img src={el.user_image} />
                  <p>
                    {el?.name} {el?.lastname}{" "}
                  </p>
                </div>
              </div>
              <div className="viewdate_v">
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

export default CardVideoView;
