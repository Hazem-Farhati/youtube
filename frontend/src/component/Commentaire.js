import React from 'react'
import "../styles/commentaire.css"
import AddCommentaire from './AddCommentaire';
import CommentaireHeader from './CommentaireHeader';
const Commentaire = ({id}) => {
  return (
    <div className="commentaire">
      <div className="commentaire__container">
              <CommentaireHeader />
              <AddCommentaire id={id} />
      </div>
    </div>
  );
}

export default Commentaire