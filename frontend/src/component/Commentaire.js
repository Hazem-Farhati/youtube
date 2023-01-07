import React from "react";
import { useSelector } from "react-redux";
import "../styles/commentaire.css";
import AddCommentaire from "./AddCommentaire";
import CommentaireHeader from "./CommentaireHeader";
import CommentaireView from "./CommentaireView";
const Commentaire = ({ id, ping, setPing }) => {
  const commentaire = useSelector((state) => state.commentaire?.commentaire);
  return (
    <div className="commentaire">
      <div className="commentaire__container">
        <CommentaireHeader />
        <AddCommentaire id={id} ping={ping} setPing={setPing} />
        {commentaire
          ?.filter((el) => id == el?.product_id)
          .map((el) => (
            <CommentaireView el={el} />
          )).reverse()}
      </div>
    </div>
  );
};

export default Commentaire;
