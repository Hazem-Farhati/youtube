import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CardVideo from "../component/CardVideo";
import CardVideoView from "../component/CardVideoView";
import CounterUser from "../component/CounterUser";
import LikeDislike from "../component/LikeDislike";
import VideoDescription from "../component/VideoDescription";
import { updateProduct } from "../redux/productSlice/productSlice";
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
                style={{
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginLeft: "55px",
                  marginTop: "0",
                  marginBottom: "10px",
                }}
              >
                {el?.title}
              </h4>
              <div
                style={{
                  width: "95%",
                  height: "70px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: "14px",
                  marginLeft: "28px",

                  position: "relative",
                }}
              >
                <img
                  style={{
                    marginLeft: "20px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  src={el?.user_image}
                />
                <div>
                  <div>
                    <h5 style={{ fontSize: "20px", fontWeight: "500" }}>
                      {el?.name} {el?.lastname}
                    </h5>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    {users
                      ?.filter((elm) => elm?.name === el?.name)
                      .map((el) => (
                        <>
                          <p
                            style={{
                              fontSize: "13px",
                              fontWeight: "300",
                              marginTop: "8px",
                            }}
                          >
                            {el?.abonner} abonnés
                          </p>
                          <CounterUser ping={ping} setPing={setPing} el={el} />
                        </>
                      ))}
                  </div>
                </div>
                <LikeDislike el={el} ping={ping} setPing={setPing} />
                <VideoDescription el={el} />
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
