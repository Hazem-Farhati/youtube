import { spacing } from "@mui/system";
import React, { useState } from "react";
import "../styles/videodescription.css";
const VideoDescription = ({ el }) => {
    const [showDesc, setShowDesc] = useState(false);
    const [unshowDesc, setUnShowDesc] = useState(true);
    console.log(showDesc,'showwdesc');
  return (
    <div
      style={!showDesc ? { cursor: "pointer" } : null}
      className="VideoDescription"
    >
      <div className="vue__date">
        <h3>372480 vues </h3>

        <h3>
          {el?.date
            .split("T")
            .map((el) => el)
            .slice(0, 1)}
        </h3>
      </div>
      <div className="vd_desc_content" onClick={() => setShowDesc(true)}>
        {showDesc ? (
          <>{el?.desc}</>
        ) : (
          <>
            {el?.desc.length > 200 && (
              <>
                {" "}
                <div>{el?.desc.slice(0, 200) + " ..Plus"}</div>
              </>
            )}
          </>
        )}{" "}
      </div>
      {showDesc && (
        <h3
          onClick={() => {
            setShowDesc(false);
          }}
          style={{
            marginTop: "10px",
            cursor: "pointer",
              zIndex: "999999999999999999",
            //   backgroundColor: 'red',
            width:"70px"
          }}
        >
          Moins
        </h3>
      )}
    </div>
  );
};

export default VideoDescription;
