import React from "react";
import "../styles/commentaireView.css";
const CommentaireView = ({ el }) => {
  return (
    <>
      <div className="commentaire__view">
        <div className="comm__view__img">
          <img src={el?.user_img} alt="" />
        </div>
        <div className="comm__view__allcontent">
          <div className="comm__view__date__name">
            <h3>
              @{el?.name}
              {el?.lastname}
            </h3>
            <p>
              {el?.date
                .split("T")
                .map((el) => el)
                .slice(0, 1)}
            </p>
          </div>
          <div className="comm__view__content">
            <p>{el?.content}</p>
          </div>
          <div className="like_dis_rep">
            <div className="comm__like_numb">
              <i class="uil uil-thumbs-up"> </i>
              <span style={{ fontSize: "15px", color: "gray" }}>141</span>
            </div>
            <i class="uil uil-thumbs-down"></i>
            <h5>Répondre</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentaireView;
