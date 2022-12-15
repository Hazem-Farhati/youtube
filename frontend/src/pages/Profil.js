import { Link, Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/profil.css";
const Profil = () => {
  const user = useSelector((state) => state.user?.user);
  const [show, setShow] = useState(false);
  const location = useLocation()

  return (
    <div>
      <div className="profileHeader">
        <div className="info">
          <div className="donne1">
            <div className="photo">
              <i class="bx bx-user-circle"></i>
            </div>
            <div className="names">
              <h2>{user?.name}</h2>
              <p>{user?.email}</p>
              <p>num subscribers</p>
            </div>
          </div>
          <div className="donne2">
            {location.pathname.includes("/profilaccueil") ? (
              <button style={{ borderBottom: "2px solid black" }}>
                Accueil
              </button>
            ) : (
              <Link to="/profil/profilaccueil">
                <button >
                  Accueil
                </button>
              </Link>
            )}

{location.pathname.includes("/profilvideo") ? (
              <button style={{ borderBottom: "2px solid black" }}>
                Video
              </button>
            ) : (
              <Link to="/profil/profilvideo">
                <button >
                  Video
                </button>
              </Link>
            )}
         
            <button>Playlist</button>
            <button>Chaine</button>
            <button>A propos</button>
            <i onClick={() => setShow(!show)} className="bx bx-search "></i>
            {show && (
              <>
                <input placeholder="Search" type="text" />
              </>
            )}
          </div>
        </div>
        {/* <hr style={{width:"100%"}}/> */}
        <div className="options">
          <button>Update channel</button>
          <button>Video Management</button>
        </div>
      </div>
      {console.log(user)} <Outlet />
    </div>
  );
};

export default Profil;
