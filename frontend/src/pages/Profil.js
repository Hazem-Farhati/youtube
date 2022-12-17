import { Link, Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/profil.css";
import { updateUser } from "../redux/userSlice/userSlice";
import axios from "axios";
const Profil = () => {
  const user = useSelector((state) => state.user?.user);
  const [show, setShow] = useState(false);
  const location = useLocation()
  const dispatch = useDispatch()


//update photo profife
const [file, setFile] = useState("");
  const [url, setUrl] = useState("");
  // dsrmckm1q
  // preset name : msa2hvog
  const uploadImage = async () => {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "msa2hvog");
    await axios
      .post("https://api.cloudinary.com/v1_1/dsrmckm1q/upload", form)
      .then((result) => {
        setUrl(result.data.secure_url);
        dispatch(
          updateUser({
          
            id: user?._id,
            user:{image:url}
          })
        );
        console.log(url, "url");
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <div className="profileHeader">
        <div className="info">
          <div className="donne1">
            <div className="photo">
              <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
              <button onClick={uploadImage}>dffd</button>

              <i class="bx bx-user-circle"></i>
        <img style={{width:"50px",height:"50px"}} src={user?.image} alt="photo"/>
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
