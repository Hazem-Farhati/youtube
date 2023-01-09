import React, { useState } from "react";
import "../styles/commentaireView.css";
const CommentaireView = ({ el }) => {
  //time stamp



  console.log(date1, "date1");
  var date1 = new Date(el?.date);
  // var date2 = new Date("07/30/2019");

  // To calculate the time difference of two dates
  var Difference_In_Time = new Date().getTime() - date1.getTime();
console.log(new Date(),"new date");
  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  //To display the final no. of days (result)
  console.log(
    "Total number of days between dates  <br>" +
      date1 +
      "<br> and <br>" +
      new Date() +
      " is: <br> " +
      Difference_In_Days
  );
  console.log(Difference_In_Time)
  return (
    <>
      <div className="commentaire__view">
        <div className="comm__view__img">
          <img src={el?.user_img} alt="" />
        </div>
        <div className="comm__view__allcontent">
          <div className="comm__view__date__name">
            <h3>
              @{el?.name}
              {el?.lastname}
            </h3>
            {Difference_In_Days.toString()
              .split(".")
              .map((el) => el)
              .slice(0, 1) == 1 ? (
              <p>
                {/* {{formatDate(el?.date)}  {"/"} {Difference_In_Time} */}
                il y'a{" "}
                {Difference_In_Days.toString()
                  .split(".")
                  .map((el) => el)
                  .slice(0, 1)}{" "}
                {""}
                jour
              </p>
            ) : Difference_In_Days.toString()
                .split(".")
                .map((el) => el)
                .slice(0, 1) == 0 ? (
              <p>
                {/* {{formatDate(el?.date)}  {"/"} {Difference_In_Time} */}
                Aujourd'hui
              </p>
            ) : Difference_In_Days.toString()
                .split(".")
                .map((el) => el)
                .slice(0, 1) > 365 ? (
              <p>
                {/* {{formatDate(el?.date)}  {"/"} {Difference_In_Time} */}
                Il y' un an
              </p>
            ) : Difference_In_Days.toString()
                .split(".")
                .map((el) => el)
                .slice(0, 1) > 730 ? (
              <p>
                {/* {{formatDate(el?.date)}  {"/"} {Difference_In_Time} */}
                Il y' deux ans
              </p> 
            ) : (
              <p>
                {/* {{formatDate(el?.date)}  {"/"} {Difference_In_Time} */}
                il y'a{" "}
                {Difference_In_Days.toString()
                  .split(".")
                  .map((el) => el)
                  .slice(0, 1)}{" "}
                {""}
                jours
              </p>
            )}
          </div>
          <div className="comm__view__content">
            <p>{el?.content}</p>
          </div>
          <div className="like_dis_rep">
            <div className="comm__like_numb">
              <i class="uil uil-thumbs-up"> </i>
              <span style={{ fontSize: "15px", color: "gray" }}>141</span>
            </div>
            <i class="uil uil-thumbs-down"></i>
            <h5>Répondre</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentaireView;
