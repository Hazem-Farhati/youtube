import "../styles/cardvideoprofile.css";
import React from "react";
import { useSelector } from "react-redux";
const CardVideoProfile = ({ el }) => {
  const user = useSelector((state) => state.user?.user);
  const isAuth = localStorage.getItem("token");

  return (
    <div>
      <div className="containerCard_p">
        <div className="video_p">
          <iframe src={el?.video} controls="0" frameborder="0" scrolling="no" />
        </div>
        <div className="donne_p">
          <div className="title_p">
            <h3>{el?.title}</h3>
            <div className="chaineuser_p">
              <img src={el?.user_image} />
              <p>
                {el?.name} {el?.lastname}
              </p>
            </div>
          </div>
          <div className="viewdate_p">
            <p>2 M vue</p>
            <h2>.</h2>
            <p>
              {el?.date
                .split("T")
                .map((el) => el)
                .slice(0, 1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVideoProfile;
