import React, { useState } from 'react'

const CommentaireHeader = () => {
  const [trier, setTrier] = useState(false)
  console.log(trier,"trier")
  return (
    <>
      <div className="top__comm">
        <div className="comm_nbr">
          <h5>252 commentaires</h5>
        </div>
        <div className="trier__par">
          <div className="input__trier">
            <i
              class="uil uil-sort-amount-up"
            ></i>
            <input
              className="trier_title"
              onFocus={() => setTrier(true)}
              onBlur={() => setTrier(false)}
              // onClick={() => setTrier(true)}
              placeholder="Trier"
              
            />
          </div>
          {trier && (
            <div className="tree__type">
              <div className="top_comm">
                <h5>Top des commentaires</h5>
              </div>
              <div className="pluc__recent">
                <h5>Les plus récents d'abord</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CommentaireHeader