import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementLike,
  incrementLike,
  selectCountLike,
} from "../redux/likeSlice/likeSlice";
import { updateProduct } from "../redux/productSlice/productSlice";

const LikeDislike = ({ el, ping, setPing }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(el?.like);
  const [isLiked, setIsLiked] = useState(el?.isLiked);
  console.log(isLiked, "isLiked");
  const countLike = useSelector(selectCountLike);

  const product = useSelector((state) => state.product?.product);

  console.log(countLike, "countlike");
  return (
    <div className="like__dis_patr">
      <div className="video__likes_dis">
        {countLike == "0" && isLiked == false && (
          <>
            {" "}
            <div
              className="like"
              onClick={() => {
                setIsLiked(true);
                dispatch(incrementLike());
                setTimeout(() => {
                  dispatch(
                    updateProduct({
                      ...product,
                      id: el._id,
                      product: { like: el?.like + 1, isLiked: true },
                    })
                  );
                  setPing(!ping);
                }, 1500);
              }}
            >
              <i class="uil uil-thumbs-up "></i>
              <p>{el?.like}</p>
            </div>
          </>
        )}
        {countLike == "1" && isLiked == true && (
          <div
            className="like"
            onClick={() => {
              dispatch(decrementLike());
              dispatch(
                updateProduct({
                  ...product,
                  id: el._id,
                  product: { like: el?.like - 1, isLiked: false },
                })
              );
              setIsLiked(false);
              console.log(countLike, "incriment");

              setPing(!ping);
            }}
          >
            <i class="uil uil-thumbs-up liked"></i>
            <p>{el?.like}</p>
          </div>
        )}

        {countLike == "0" && isLiked == true && (
          <div
            className="like"
            onClick={() => {
              dispatch(decrementLike());
              dispatch(
                updateProduct({
                  ...product,
                  id: el._id,
                  product: { like: el?.like - 1, isLiked: false },
                })
              );
              setIsLiked(false);
              console.log(countLike, "incriment");

              setPing(!ping);
            }}
          >
            <i class="uil uil-thumbs-up liked"></i>
            <p>{el?.like}</p>
          </div>
        )}

        {countLike == "-1" && isLiked == false && (
          <div
            className="like"
            onClick={() => {
              dispatch(incrementLike());
              dispatch(
                updateProduct({
                  ...product,
                  id: el._id,
                  product: { like: el?.like + 1, isLiked: true },
                })
              );
              setIsLiked(false);
              console.log(countLike, "incriment");

              setPing(!ping);
            }}
          >
            <i class="uil uil-thumbs-up "></i>
            <p>{el?.like}</p>
          </div>
        )}
        <div className="dislike">
          <i class="uil uil-thumbs-down"></i>
        </div>
      </div>
      <div className="partage__btn">
        <i class="uil uil-share"></i>
        <button>Partager</button>
      </div>
      <div className="threepoint__btn">
        <button>...</button>
      </div>
    </div>
  );
};

export default LikeDislike;
