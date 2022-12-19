import React, { useState } from "react";
import { useSelector } from "react-redux";
import CardVideo from "../component/CardVideo";

const Home = ( {setsearch,search} ) => {
  const product = useSelector((state) => state.product?.product);
  const divv=document.getElementsByClassName('allvideocard')
  const [containerWidth, setcontainerWidth] = useState(divv.style)

  return (
    <div style={{containerWidth}}
    className="allvideocard">
      
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
