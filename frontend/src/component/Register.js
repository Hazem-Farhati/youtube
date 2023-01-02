import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../redux/userSlice/userSlice";
import "../styles/loginandregister.css";
const Register = () => {
  const dispatch = useDispatch();
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    password: "",
    email: "",
  });

  // selected inputs
  const [nameselected, setNameselected] = useState(false);
  const [lastnameselected, setLastnameselected] = useState(false)
  const [emailselected, setEmailselected] = useState(false);
  const [passwordselected, setPasswordselected] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="login__container">
      <div className="container" onSubmit={(e) => e.preventDefault()}>
        <div className="header">
          <div className="sign_in_logo">
            <img
              src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
              alt="yt"
            />
          </div>
          <h1>Créer un compte</h1>
        </div>
        <div className="register__content">
          <div className="register__inpt">
            {nameselected && <h5>Nom</h5>}
            <input
              type="text"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Nom")}
              placeholder="Nom"
              onChange={(e) =>
                setregister({ ...register, name: e.target.value })
              }
              onClick={() => setNameselected(true)}
            />
          </div>

          <div className="register__inpt">
            {lastnameselected && <h5>Prenom</h5>}
            <input
              type="text"
              placeholder="Prenom"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Prenom")}
              onChange={(e) =>
                setregister({ ...register, lastname: e.target.value })
              }
              onClick={() => setLastnameselected(true)}
            />
          </div>
          <div className="register__inpt">
            {emailselected && <h5>Email</h5>}

            <input
              type="text"
              placeholder="email"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Email")}
              onChange={(e) =>
                setregister({ ...register, email: e.target.value })
              }
              onClick={() => setEmailselected(true)}
            />
          </div>
          <div className="register__inpt">
            {passwordselected && <h5>Mot de passe</h5>}
            <input
              type="password"
              placeholder="Mot de passe"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Mot de passe")}
              onChange={(e) =>
                setregister({ ...register, password: e.target.value })
              }
              onClick={() => setPasswordselected(true)}
            />
          </div>
        </div>
        <div className="rg_log">
          <div className="register__footer">
            <Link to="/login">
              <button>Vous avez déjà un compte?</button>
            </Link>
            <button
              onClick={() => {
                dispatch(userRegister(register));
                setTimeout(() => {
                  navigate("/profil");
                }, 1500);
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
