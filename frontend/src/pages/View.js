import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CardVideo from "../component/CardVideo";
import CardVideoView from "../component/CardVideoView";
import CounterUser from "../component/CounterUser";
import "../styles/view.css";
const View = ({
  setsearch,
  search,
  marginLeft,
  width,
  width1,
  setwidth1,
  show,
  setShow,
  ping,
  setPing,
}) => {
  const product = useSelector((state) => state.product?.product);
  const { id } = useParams();
  const [upId, setUpId] = useState(id);
  const user = useSelector((state) => state.user?.user);
  useEffect(() => {
    // window.document=setShow(false);
    setShow(false);
  }, [window]);
  const users = useSelector((state) => state.user?.users);

  return (
    <div className="all_view">
      {console.log(upId)}

      <div className="view">
        {product
          ?.filter((el) => id == el._id)
          .map((el, i) => (
            <>
              <div className="mainVideo">
                <video src={el.video} controls></video>
              </div>
              <h4
                style={{ color: "black", fontSize: "18px", fontWeight: "500" }}
              >
                {el?.title}
              </h4>
              <div
                style={{
                  width: "80%",
                  height: "70px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  style={{
                    marginLeft: "20px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                  src={el?.user_image}
                />
                <div>
                  <h5 style={{ fontSize: "18px", fontWeight: "500" }}>
                    {el?.name} {el?.lastname}
                  </h5>
                  <p style={{ fontSize: "13px", fontWeight: "400" }}>
                    nbr d'abonnerr
                    {el?.abonner}
                  </p>
                </div>
                {users
                  ?.filter((elm) => elm?.name === el?.name)
                  .map((el) => (
                    <>
                      <h5>{el?.abonner}</h5>
                      <CounterUser ping={ping} setPing={setPing} el={el} />
                    </>
                  ))}
              </div>
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
              <CardVideoView
                onClick={() => setUpId(id)}
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
//kkkk

export default View;
