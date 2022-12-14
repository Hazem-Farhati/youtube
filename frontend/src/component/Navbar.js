import React, { useState } from "react";
import "../styles/navbar.css";
import "../styles/pg.css";

// import youtube from "/assets/youtubelogo.png";
import {
  UilBell,
  UilUserCircle,
  UilVideo,
  UilSearch,
} from "@iconscout/react-unicons";
import Sidebar from "./Sidebar";
import ParametreGenerale from "./ParametreGenerale";
import { Link } from "react-router-dom";
const Navbar = ({ search, setsearch }) => {
  const [show, setShow] = useState(true);
  const [parameterShow, setParameterShow] = useState(false);
  const searchProduct = (search) => {
    setsearch(search);
  };
  const isAuth = localStorage.getItem("token");

  return (
    <>
      <Sidebar show={show} setShow={setShow} />
      <ParametreGenerale
        parameterShow={parameterShow}
        setParameterShow={setParameterShow}
      />

      <div className="navbar">
        <div className="leftSide">
          <div className="menuIcon" onClick={() => setShow(!show)}>
            <i class="bx bx-list-ul"></i>
          </div>
          <Link to="/"><img src="/assets/youtubelogo.png" alt="logo" /></Link>
        </div>

        <div className="middle">
          <input
            type="search"
            placeholder="Recherche"
            onChange={(e) => searchProduct(e.target.value)}
          />
          <div className="searchLogo">
            <i className="bx bx-search "></i>
          </div>
        </div>
        <div className="rightSide">
          {!parameterShow ? (
            <>
              {" "}
              {isAuth?<Link to="/addVideo">
                <i class="bx bx-video"></i>
              </Link>:<Link to="/register">
                <i class="bx bx-video"></i>
              </Link>}
              <i class="bx bx-bell"></i>
            </>
          ) : null}

          <i
            class="bx bx-user-circle"
            onClick={() => {
              setParameterShow(!parameterShow);
            }}
          ></i>
        </div>
        <ParametreGenerale />
      </div>
    </>
  );
};

export default Navbar;
