import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CommentaireHeader = ({ trierPar, settrierPar, id }) => {
  const [trier, setTrier] = useState(false);

  //comm use selector
  const commentaire = useSelector((state) => state.commentaire?.commentaire);
  const product = useSelector((state) => state.product?.product);



  //test


  //detect click outside
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setTrier(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  //detect click outside

  return (
    <>
      <div className="top__comm">
        <div className="trier__par">
          {product
            ?.filter((el) => id == el?._id)
            .map((el) => (
              <>
                {el?.commNumber == 0 ? (
                  <>
                    <h3 style={{ fontWeight: "400" }}>
                      {el?.commNumber} {""}Commentaire
                    </h3>
                  </>
                ) : (
                  <>
                    <h3 style={{ fontWeight: "400" }}>
                      {el?.commNumber} {""}Commentaires
                    </h3>
                  </>
                )}
              </>
            ))}
          <div className="input__trier" onClick={() => setTrier(true)}>
            <i class="uil uil-sort-amount-up"></i>

            <h3 className="trier_title"> Trier</h3>
          </div>
          {trier && (
            <div className="tree__type" ref={wrapperRef}>
              <div
                className="top_comm"
                onClick={() => {
                  settrierPar(true);
                  setTrier(false);
                }}
              >
                <h5>Top des commentaires</h5>
              </div>
              <div
                className="pluc__recent"
                onClick={() => {
                  settrierPar(false);
                  setTrier(false);
                }}
              >
                <h5>Les plus récents d'abord</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentaireHeader;
