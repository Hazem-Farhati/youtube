import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ParametreGenerale = ({ setParameterShow, parameterShow }) => {
    const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);

  return (
    <>
      {parameterShow && (
        <div
          onMouseLeave={() => setParameterShow(false)}
          className="pgcontainer"
        >
          <div className="firstContent">
            <div className="avatar" onClick={() => navigate("/profil/profilaccueil")}>
              <i class="bx bx-user-circle"></i>
            </div>
            <div className="pgdonne">
              <h4>{user?.name} {user?.lastname}</h4>
              <h5>{user?.email}</h5>
              <h5 style={{ color: "blue" }}>gerer votre conte google</h5>
            </div>
          </div>
          <hr style={{ width: "100%" }} />
          <div className="secondContent">
            <div className="options">
              <i class="bx bx-user"></i>
              <h5>Créer une chaine</h5>
            </div>
            <div className="options">
              <i class="bx bx-play"></i>
              <h5>YouTube Studio</h5>
            </div>
            <div className="options">
              <i class="bx bx-arrows-h-alt"></i> <h5>Changer du compte</h5>
            </div>
            <div className="options">
              <i class="bx bx-user"></i>
              <h5>Se deconnecter</h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
{
  /* <i class="bx bx-user-plus"></i> */
}

export default ParametreGenerale;
