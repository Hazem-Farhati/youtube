import React from "react";

const ParametreGenerale = ({ setParameterShow, parameterShow }) => {
  return (
    <>
      {parameterShow && (
        <div onMouseLeave={()=>setParameterShow(false)} className="pgcontainer">
          <div className="firstContent">
            <div className="avatar">
              <i class="bx bx-user-circle"></i>
            </div>
            <div className="pgdonne">
              <h4>user name</h4>
              <h5>email@gmail.com</h5>
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
            <i class="bx bx-arrows-h-alt"></i>             <h5>Changer du compte</h5>
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
