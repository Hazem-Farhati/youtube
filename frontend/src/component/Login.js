import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userLogin } from "../redux/userSlice/userSlice";

const Login = () => {
    const dispatch = useDispatch();
      const navigate = useNavigate();

  const [login, setlogin] = useState({
    email: "",

    password: "",
  });

  return (
    <div>
      <div onSubmit={(e) => e.preventDefault()}>
        <h1>signup</h1>
        <input
          type="text"
          onChange={(e) => setlogin({ ...login, email: e.target.value })}
        />
        <input
          type="password"
          onChange={(e) => setlogin({ ...login, password: e.target.value })}
        />
        <button
          onClick={() => {
            dispatch(userLogin(login));
            setTimeout(() => {
              navigate("/profile");
            }, 1500);
          }}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default Login;
