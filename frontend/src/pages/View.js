import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CardVideo from "../component/CardVideo";
import "../styles/view.css"
const View = ({
  setsearch,
  search,
  marginLeft,
  width,
  width1,
  setwidth1,
  show,
  setShow,
}) => {
    const product = useSelector((state) => state.product?.product);
      const { id } = useParams();
 
  return (

    <div className="view">
      {product
        ?.filter((el) => id == el._id)
        .map((el, i) => (
          <>
            <h4 style={{ color: "red" }}>{el?.title}</h4>
            <iframe src={el.video} frameborder="0"></iframe>
          </>
        ))
        .reverse()}
    </div>
  );
};

export default View;
