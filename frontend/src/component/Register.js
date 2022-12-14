import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/userSlice/userSlice";
import '../styles/loginandregister.css'
const Register = () => {
    const dispatch=useDispatch()
    const [register, setregister] = useState({name:"",lastname:"",password:"",email:""})
  return (
    <div className="container" onSubmit={(e) => e.preventDefault()}>
      <div className="header">
        <h1>Register</h1>
      </div >
      <div className="input">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setregister({ ...register, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={(e) =>
            setregister({ ...register, lastname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setregister({ ...register, email: e.target.value })}
        />
        <input
          type="passport"
          placeholder="password"
          onChange={(e) =>
            setregister({ ...register, password: e.target.value })
          }
        />
      </div>
      <div className="footer">
        <button
          onClick={() => {
            dispatch(userRegister(register));
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
