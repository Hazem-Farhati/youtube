import React from "react";
import "../styles/navbar.css";

const Recherche = ({search,setsearch}) => {

    const searchVideo = (search) => {
        setsearch(search);
      };
  return (
    <div>
      {/* <div className="middle">
        <input
          type="search"
          placeholder="Recherche"
          onChange={(e) => e.target.value}
        />
        <div className="searchLogo">
          <i className="bx bx-search "></i>
        </div>
      </div> */}
    </div>
  );
};

export default Recherche;
