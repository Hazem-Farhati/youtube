import React, { useState } from "react";
import "../styles/navbar.css";
import "../styles/pg.css";

// import youtube from "/assets/youtubelogo.png";

import Sidebar from "./Sidebar";
import ParametreGenerale from "./ParametreGenerale";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = ({setwidth,setmarginLeft, search, setsearch,show, setShow }) => {
  const [parameterShow, setParameterShow] = useState(false);
  const searchProduct = (search) => {
    setsearch(search);
  };
  const isAuth = localStorage.getItem("token");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);

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
          <Link to="/">
            <img src="/assets/youtubelogo.png" alt="logo" />
          </Link>
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
        {isAuth ? (
          <div className="rightSide">
            {!parameterShow ? (
              <>
                {" "}
                {isAuth ? (
                  <Link to="/addVideo">
                    <i class="bx bx-video"></i>
                  </Link>
                ) : (
                  <Link to="/register">
                    <i class="bx bx-video"></i>
                  </Link>
                )}
                <i class="bx bx-bell"></i>
              </>
            ) : null}

            {isAuth?<img className="imgNavbar" onClick={() => {
                setParameterShow(!parameterShow);}}   src={user?.image} alt='photo'/>:<i
              class="bx bx-user-circle"
              onClick={() => {
                setParameterShow(!parameterShow);
              }}
            ></i>}
          </div>
        ) : (
          <div onClick={() => navigate("/register")} className="signyoutube">
            {" "}
            <i class="bx bx-user-circle"></i>
            <button >Sign In</button>
          </div>
        )}
        <ParametreGenerale />
        {(show)?setwidth("80%"):setwidth('100%')}
        {(show)?setmarginLeft("290px"):setmarginLeft('30px')}

      </div>
    </>
  );
};

export default Navbar;
