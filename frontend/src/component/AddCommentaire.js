import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentaire } from "../redux/commentaireSlice/commentaireSlice";
import InputEmoji from "react-input-emoji";

const AddCommentaire = ({ id }) => {
  const product = useSelector((state) => state.product?.product);
  const user = useSelector((state) => state.user?.user);
  const [commentaireContent, setCommentaireContent] = useState("");
  function handleOnEnter(commentaireContent) {
    console.log("enter", commentaireContent);
  }
  const [showaddBtn, setShowaddBtn] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className="add_commentaire">
        <img src={user?.image} alt="" />
        <div className="add__com_input">
          {/* <textarea
            cols="30"
            rows="10"
            type="text"
            placeholder="Ajoutez un commentaire..."
            onChange={(e) => setCommentaireContent(e.target.value)}
            onClick={() => setShowaddBtn(true)}
          /> */}

          <InputEmoji
            maxLength={100}
            height={10}
            onResize
            // fontSize={50}
            value={commentaireContent}
            onClick={() => setShowaddBtn(true)}
            onChange={setCommentaireContent}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />

          {console.log(commentaireContent.length, "hell")}
          {showaddBtn && (
            <div className="emoj__anull__confir">
              {/* <i class="uil uil-grin-tongue-wink-alt"></i> */}

              <div className="anuul__conf__btn">
                <button
                  className="annuler__btn"
                  onClick={() => setShowaddBtn(false)}
                >
                  Annuler
                </button>
                {commentaireContent === "" ? (
                  <button
                    style={{
                      backgroundColor: "#e5e3e53c",
                      color: "black",
                      cursor: "not-allowed",
                    }}
                    className="confirme__btn"
                                      onClick={() => {
                  
                      {
                        product
                          ?.filter((el) => id == el._id)
                          .map((el) =>
                            dispatch(
                              createCommentaire({
                                content: commentaireContent,
                                user_id: user?._id,
                                product_id: el?._id,
                                name: user?.name,
                                lastname: user?.lastname,
                                user_img: user?.image,
                                date: new Date(),
                              })
                            )
                          );
                        };
                     
                    }}
                    disabled={commentaireContent === ""}
                  >
                    Ajouter un commentaire
                  </button>
                ) : (
                  <button
                    className="confirme__btn"
                    onClick={() => {
                      {
                        product
                          ?.filter((el) => id == el._id)
                          .map((el) =>
                            dispatch(
                              createCommentaire({
                                content: commentaireContent,
                                user_id: user?._id,
                                product_id: el?._id,
                                name: user?.name,
                                lastname: user?.lastname,
                                user_img: user?.image,
                                date: new Date(),
                              })
                            )
                          );
                        };
                           {
                             setCommentaireContent("");
                           }
                    }}
                  >
                    Ajouter un commentaire
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddCommentaire;
