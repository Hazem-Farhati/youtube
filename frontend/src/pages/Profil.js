import React from "react";
import { useSelector } from "react-redux";
import "../styles/profil.css";
const Profil = () => {
  const user = useSelector((state) => state.user?.user);

  return (
    <div>
      <div className="profileHeader">
        <div className="info">
          <div className="donne1">
            <div className="photo">
              <i class="bx bx-user-circle"></i>
            </div>
            <div className="names">
              <h1>{user?.name}</h1>
              <h1>{user?.email}</h1>
            </div>
          </div>
          <div className="donne2"></div>
        </div>

        <div className="options"></div>
      </div>
      {console.log(user)}{" "}
    </div>
  );
};

export default Profil;
