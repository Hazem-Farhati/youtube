import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardVideo from "../component/CardVideo";

const Home = ( {setsearch,search} ) => {
  const product = useSelector((state) => state.product?.product);
  
  return (
    <div className="allvideocard">
      
      {product
        ?.filter((el)=>el.title?.toLowerCase().includes(search.toLowerCase())).map((el) => (
          <>
            <CardVideo el={el} />
          </>
        ))
        .reverse()}
    </div>
  );
};

export default Home;
