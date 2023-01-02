import { Link, Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/profil.css";
import { updateUser } from "../redux/userSlice/userSlice";
import axios from "axios";
import CounterUser from "../component/CounterUser";
import { updateProduct } from "../redux/productSlice/productSlice";
const Profil = ({ping,setPing,setsearch}) => {
  const user = useSelector((state) => state.user?.user);
    const product = useSelector((state) => state.product?.product);
const [show, setShow] = useState(false);
  const location = useLocation()
  const dispatch = useDispatch()
const isAuth=localStorage.getItem('token')

//update photo profife
const [file, setFile] = useState("");
  const [url, setUrl] = useState("");
  const searchProduct = (search) => {
    setsearch(search);
  };
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
          ...user,user:{image:result.data.secure_url},
            id: user?._id,
           
          })
        );
             {
          product?.filter((el)=>el?.user_id == user?._id).map((el) => {
                   dispatch(
                     updateProduct({
                       ...product,
                       product: { user_image: result.data.secure_url },
                       id: el?._id,
                     })
                   );
               });
             }

        
        // console.log(url, "url");
      })
      .catch((err) => console.log(err));
      setPing(!ping);

  };


  return (
    <div>
      <div className="profileHeader">
     
        <div className="info">
          <div className="donne1">
      
            <div className="photo">
              
                <img  className="bx bx-user-circle" src={user?.image}/>     
              { file?<button onClick={uploadImage}>change</button>: < input name="hhh" style={{width:"50px"}} type="file" onChange={(e)=>setFile(e.target.files[0])}/>
              }

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
                <input placeholder="Search" type="text" onChange={(e) => searchProduct(e.target.value)}/>
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
