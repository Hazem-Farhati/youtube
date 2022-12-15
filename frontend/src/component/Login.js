import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userLogin } from "../redux/userSlice/userSlice";
import "../styles/loginandregister.css";
import {Link} from"react-router-dom"
const Login = () => {
    const dispatch = useDispatch();
      const navigate = useNavigate();

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="container">
      <div onSubmit={(e) => e.preventDefault()}>
      <div className="header">

        <h1>signup</h1>
        </div>
        <div className="input">

        <input
          type="text"
          placeholder="email"
          onChange={(e) => setlogin({ ...login, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"

          onChange={(e) => setlogin({ ...login, password: e.target.value })}
        />
        <Link to="/register"><button>
          Create a new account
        </button></Link>
        </div>
        <div className="footer">

        <button
          onClick={() => {
            dispatch(userLogin(login));
            setTimeout(() => {
              navigate("/profil");
            }, 1500);
          }}
        >
          Login
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
