import React from 'react'

const CommentaireHeader = () => {
  return (
    <>
      <div className="top__comm">
        <div className="comm_nbr">
          <h5>252 commentaires</h5>
        </div>
        <div className="trier__par">
          <i class="uil uil-sort-amount-up"></i>
          <h4>Trier par</h4>
        </div>
      </div>
    </>
  );
}

export default CommentaireHeader