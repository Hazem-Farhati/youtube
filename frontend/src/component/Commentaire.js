import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/commentaire.css";
import AddCommentaire from "./AddCommentaire";
import CommentaireHeader from "./CommentaireHeader";
import CommentaireView from "./CommentaireView";
import CommNumber from "./CommNumber";
const Commentaire = ({ id, ping, setPing }) => {
  const commentaire = useSelector((state) => state.commentaire?.commentaire);
  const [trierPar, settrierPar] = useState(true);
  //calcule comm number
  const product = useSelector((state) => state.product?.product);
 

  return (
    <div className="commentaire">
      <div className="commentaire__container">
        <CommentaireHeader
          trierPar={trierPar}
          settrierPar={settrierPar}
          id={id}
        />
      
          <CommNumber id={id}/>
     
        <AddCommentaire id={id} ping={ping} setPing={setPing} />

        {trierPar ? (
          <>
            {commentaire
              ?.filter((el) => id == el?.product_id)
              .map((el) => <CommentaireView el={el} />)
              .reverse()}
          </>
        ) : (
          <>
            {commentaire
              ?.filter((el) => id == el?.product_id)
              .map((el) => (
                <CommentaireView el={el} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Commentaire;
