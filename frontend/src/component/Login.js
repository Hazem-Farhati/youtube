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

  //password input selected
  const [passwordselected, setPasswordselected] = useState(false)

  //when i put email and click next for add password
  const [next, setNext] = useState(true);

  // get all users
  const users = useSelector((state) => state.user?.users);

  //error message if email is not definded
  const [saveemail, setSaveemail] = useState("");
  const [emailerror, setEmailerror] = useState(false);

  //show password when i click checkbox
  const [showpassword, setShowpassword] = useState(false)
  console.log(showpassword,'show pw');
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

                <h1>Connexion</h1>
                <p>Accéder à YouTube</p>
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
                    <h5>Adresse de courriel oubliée?</h5>
                  </div>
                  <p>
                    Il ne s'agit pas de votre ordinateur? Utilisez le mode
                    Invité pour vous connecter en privé.
                  </p>
                  <h5>En savoir plus</h5>
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
                            Suivant
                          </button>
                        </>
                      ) : null}
                    </>
                  ))}
                  {login?.email !== users?.email ? (
                    <>
                      {" "}
                      <button onClick={() => setEmailerror(true)}>
                        Suivant
                      </button>
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
                {users?.map((el) => (
                  <>
                    {" "}
                    {login?.email == el?.email ? (
                      <>
                        <h1>
                          {el?.name} {el?.lastname}
                        </h1>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div className="login_email_image">
                            <img
                              className="image__log"
                              src={el?.image}
                              alt=""
                            />
                            <h5>{el?.email}</h5>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </>
                ))}
              </div>
              <div className="password__input__login">
                <div className="password__input">
                  {passwordselected && <h4>Entrez votre mot de passe</h4>}
                  {showpassword ? (
                    <>
                      {" "}
                      <input
                        type="text"
                        placeholder="Mot de passe"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Mot de passe")}
                        onChange={(e) =>
                          setlogin({ ...login, password: e.target.value })
                        }
                        onClick={() => setPasswordselected(true)}
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <input
                        type="password"
                        placeholder="Mot de passe"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "Mot de passe")}
                        onChange={(e) =>
                          setlogin({ ...login, password: e.target.value })
                        }
                        onClick={() => setPasswordselected(true)}
                      />
                    </>
                  )}
                </div>
                <div className="afficher__mdp">
                  <div className="afficher__mdp__content">
                    <input
                      className="mdp_checked"
                      type="checkbox"
                      onClick={() => setShowpassword(!showpassword)}
                    />
                    <h5>Afficher le mot de passe</h5>
                  </div>
                </div>
                <div className="mdp__ob__login">
                  {" "}
                  <Link to="/register">
                    <button>Mot de passe oublié?</button>
                  </Link>
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
              <div className="footer"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
