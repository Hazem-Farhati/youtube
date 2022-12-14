import React from "react";
import "../styles/sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
const Sidebar = ({ show, setShow }) => {
  return (
    <>
      {show && (
        <div className="sideBar">
          <div className="firstSide">
            <Link to="/"><div className="option">
                <i className="bx bx-home sideBarIcon"></i>
                <h4>Accueil</h4>
                
            </div></Link>
            <div className="option">
              <i class="bx bx-caret-right sideBarIcon"></i>
              <h4>Shorts</h4>
            </div>
            <div className="option">
              <i className="bx bx-play-circle sideBarIcon"></i>
              <h4>Abonnements</h4>
            </div>
          </div>
          <hr className="hr_sidebar" />

          <div className="secondeSide">
            <div className="option">
              <i className="bx bx-play-circle sideBarIcon"></i>
              <h4>Bibliothéque</h4>
            </div>
            <div className="option">
              <i className="bx bx-play-circle sideBarIcon"></i>
              <h4>Historique</h4>
            </div>
            <div className="option">
              <i className="bx bx-play-circle sideBarIcon"></i>
              <h4> A regarder plus tard</h4>
            </div>

            <div className="option">
              <i className="bx bx-play-circle sideBarIcon"></i>
              <h4>Videos "j'aime"</h4>
            </div>
            <hr className="hr_sidebar" />
          </div>
          <div className="thirdSide">
            <div className="option">
              <h4>Abonnements</h4>
            </div>
            <div className="option">
              <i className="bx bx-user-circle sideBarIcon"></i>
              <h4>firas bs</h4>
            </div>
            <div className="option">
              <i className="bx bx-user-circle sideBarIcon"></i>
              <h4>firas bs</h4>
            </div>
            <div className="option">
              <i className="bx bx-user-circle sideBarIcon"></i>
              <h4>firas bs</h4>
            </div>
            <div className="option">
              <i className="bx bx-user-circle sideBarIcon"></i>
              <h4>firas bs</h4>
            </div>
            <div className="option">
              <i className="bx bx-user-circle sideBarIcon"></i>
              <h4>firas bs</h4>
            </div>
            <div className="option">
              <i className="bx bx-user-circle sideBarIcon"></i>
              <h4>firas bs</h4>
            </div>
            <div className="option">
              <i className="bx bx-user-circle sideBarIcon"></i>
              <h4>firas bs</h4>
            </div>{" "}
            <div className="option">
              <i className="bx bx-user-circle sideBarIcon"></i>
              <h4>firas bs</h4>
            </div>{" "}
            <div className="option">
              <i className="bx bx-user-circle sideBarIcon"></i>
              <h4>firas bs</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
