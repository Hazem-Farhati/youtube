import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { userLogin } from "../redux/userSlice/userSlice";
import "../styles/loginandregister.css";
import { Link } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();

  // email input selected
  const [emailselected, setEmailselected] = useState(false);

  //when i put email and click next for add password
  const [next, setNext] = useState(true);

  // get all users
  const users = useSelector((state) => state.user?.users);

  //error message if email is not definded
  const [saveemail, setSaveemail] = useState("");
  const [emailerror, setEmailerror] = useState(false);
  return (
    <>
      {next ? (
        <div className="login__container">
          <div className="container">
            <div onSubmit={(e) => e.preventDefault()}>
              <div className="header">
                <div className="sign_in_logo">
                  <img
                    src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
                    alt="yt"
                  />
                </div>

                <h1>Sign in</h1>
                <p>to continue to YouTube</p>
              </div>
              <div className="input">
                <div className="email__input">
                  {emailselected && <h4>Email</h4>}
                  <input
                    type="text"
                    placeholder="email"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Email")}
                    onChange={(e) => {
                      setlogin({ ...login, email: e.target.value });
                      setSaveemail(e.target.value);
                    }}
                    onClick={() => setEmailselected(true)}
                  />
                  <div>
                    {" "}
                    {emailerror && (
                      <h6 style={{ color: "red" }}>
                        Impossible de trouver votre compte Youtube{" "}
                      </h6>
                    )}
                    <h5>Forgot email?</h5>
                  </div>
                  <p>Not your computer? Use Guest mode to sign in privately.</p>
                  <h5>Learn more</h5>
                </div>

                {/* <input
              type="password"
              placeholder="password"
              onChange={(e) => setlogin({ ...login, password: e.target.value })}
            /> */}
                <div className="getemail__next">
                  {" "}
                  <Link to="/register">
                    <button>Créer un compt</button>
                  </Link>
                  {users?.map((el) => (
                    <>
                      {" "}
                      {login?.email == el?.email ? (
                        <>
                          {" "}
                          <button
                            // style={{ backgroundColor: "red" }}
                            className="next_btn_true"
                            onClick={() => setNext(false)}
                          >
                            Next
                          </button>
                        </>
                      ) : null}
                    </>
                  ))}
                  {login?.email !== users?.email ? (
                    <>
                      {" "}
                      <button onClick={() => setEmailerror(true)}>Next</button>
                    </>
                  ) : null}
                </div>
              </div>
              {/* <div className="footer">
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
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="login__container">
          <div className="container">
            <div onSubmit={(e) => e.preventDefault()}>
              <div className="header">
                <div className="sign_in_logo">
                  <img
                    src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
                    alt="yt"
                  />
                </div>

                <h1>Sign in</h1>
                <p>to continue to YouTube</p>
              </div>
              <div className="input">
                {/* <div className="email__input">
                  {emailselected && <h4>Email</h4>}
                  <input
                    type="text"
                    placeholder="email"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Email")}
                    onChange={(e) =>
                      setlogin({ ...login, email: e.target.value })
                    }
                    onClick={() => setEmailselected(true)}
                  />
                  <h5>Forgot email?</h5>
                  <p>Not your computer? Use Guest mode to sign in privately.</p>
                  <h5>Learn more</h5>
                </div> */}

                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) =>
                    setlogin({ ...login, password: e.target.value })
                  }
                />
                <div className="getemail__next">
                  {" "}
                  <Link to="/register">
                    <button>Créer un compt</button>
                  </Link>
                  <button>Next</button>
                </div>
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
        </div>
      )}
    </>
  );
};

export default Login;
