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
 const [upId, setUpId] = useState(id)
  return (
    <div className="all_view">
      {console.log(upId)}
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
      <div className="view_right_side">
        {product
          ?.filter((el) =>
            el.title?.toLowerCase().includes(search.toLowerCase())
          )
          .map((el) => (
            <div className="v_vid">
              <CardVideo
                onClick={()=>setUpId(id)}
                setwidth1={setwidth1}
                el={el}
                width1={width1}
                width={width}
                show={show}
                setShow={setShow}
              />
            </div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default View;
