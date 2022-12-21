import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardVideo from "../component/CardVideo";

const Home = ({ setsearch, search,marginLeft,width ,width1,setwidth1,show, setShow}) => {
  const product = useSelector((state) => state.product?.product);
  


  return (
    <div style={{ width ,marginLeft}} className="allvideocard">
      {product
        ?.filter((el) => el.title?.toLowerCase().includes(search.toLowerCase()))
        .map((el) => (
          <>
            <CardVideo  setwidth1={setwidth1} el={el} width1={width1} width={width} show={show} setShow={setShow} />
          </>
        ))
        .reverse()}
    </div>
  );
};

export default Home;
