import { Upload } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import UploadWidget from "../component/uploadwidget/UploadWidget";
import { createProduct } from "../redux/productSlice/productSlice";
import "../styles/addvideo.css";
import axios from "axios";
import { border, height } from "@mui/system";
// import "../styles/addvideo.css";

const AddVideo = ({ ping, setPing }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [showAdd, setShowAdd] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);
  const product = useSelector((state) => state.product?.product);
  const [titledetails, setTitledetails] = useState(false);
  const [descdetails, setDescdetails] = useState(false);
  const [misenligne, setMisenligne] = useState(false);
  const [traitemetvideo, setTraitemetvideo] = useState(false);
  const [verification, setVerification] = useState(false);
  const [visibilité, setVisibilité] = useState(false);
  const [file, setFile] = useState("");
  const [filePoster, setFilePoster] = useState("");
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const [poster, setPoster] = useState("");

  //copy link
  const [copySuccess, setCopySuccess] = useState("");
  //calcule nombre de mots
  const [calctitle, setCalctitle] = useState(0);

  //loading upload state 
  const [loading, setLoading] = useState(false)
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

        console.log(url, "url");
      })
      .catch((err) => console.log(err));
  };

  const uploadPoster = async () => {
    const form = new FormData();
    form.append("file", filePoster);
    form.append("upload_preset", "msa2hvog");
    await axios
      .post("https://api.cloudinary.com/v1_1/dsrmckm1q/upload", form)
      .then((result) => {
        setPoster(result.data.secure_url);

        console.log(poster, "poster");
      })
      .catch((err) => console.log(err));
  };

  const handleSave = () => {
    dispatch(
      createProduct({
        title,
        desc,
        user_image: user?.image,
        name: user?.name,
        lastname: user?.lastname,
        video: url,
        user_id: user?._id,
        poster: poster,
        date: new Date(),
      })
    );
    setPing(!ping);
  };
  // function to coppy link
  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("done!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <>
      <>
        {showAdd ? (
          <div className="addvideocontainer">
            <div className="addVideo">
              <div className="headeraddvideo">
                {title.length > 50 ? (
                  <h2>{title.slice(0, 51) + "..."}</h2>
                ) : (
                  <h2>{title}</h2>
                )}

                <Link to="/">
                  <h4
                    onClick={() => {
                      setShowAdd(false);
                    }}
                  >
                    X
                  </h4>
                </Link>
              </div>

              <div className="etpadeaddvideo">
                {title == "" ? (
                  <>
                    <div className="first__details">
                      <h4>Details</h4>
                      <i class="uil uil-exclamation-circle notdone"></i>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="first__details">
                      <h4>Details</h4>
                      <i class="uil uil-circle done"></i>
                    </div>
                  </>
                )}
                {url == "" ? (
                  <>
                    {" "}
                    <div className="element__video">
                      <h4>Elements video</h4>
                      <i class="uil uil-exclamation-circle notdone"></i>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="element__video">
                      <h4>Elements video</h4>
                      <i class="uil uil-circle done"></i>
                    </div>
                  </>
                )}

                {url == "" || title == "" ? (
                  <>
                    {" "}
                    <div className="verif">
                      <h4>Verification</h4>
                      <i class="uil uil-exclamation-circle notdone"></i>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="verif">
                      <h4>Verification </h4>
                      <i class="uil uil-check-circle done"></i>
                    </div>
                  </>
                )}

                {!visibilité ? (
                  <>
                    {" "}
                    <div className="visivilté">
                      <h4>Visiviltéé</h4>
                      <i class="uil uil-circle notdone"></i>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="visivilté">
                      <h4>Visivilté </h4>
                      <i class="uil uil-check-circle done"></i>
                    </div>
                  </>
                )}
                <hr />
              </div>
              <div className="detailsaddvideo">
                <div className="addInput">
                  <h2 style={{ marginBottom: "20px" }}>Détails</h2>
                  {titledetails && (
                    <div className="title__details">
                      <p>
                        {" "}
                        Un titre accrocheur peut vous permettre de capter
                        l'attention des internautes. Lorsque vous créez un titre
                        de vidéo, nous vous conseillons d'inclure des mots clés
                        que les spectateurs sont susceptibles d'utiliser pour
                        rechercher des contenus comme les vôtres.
                      </p>
                    </div>
                  )}

                  <div
                    className="inputTitle"
                    style={
                      title == ""
                        ? { border: "1px solid red", position: "relative" }
                        : { border: "1px solid black", position: "relative" }
                    }
                  >
                    <h3
                      style={
                        title == ""
                          ? { color: "red", paddingLeft: "20px" }
                          : { clor: "black", paddingLeft: "20px" }
                      }
                    >
                      Titre (obligatoir){" "}
                      <span>
                        <i
                          class="uil uil-question-circle"
                          onMouseEnter={() => setTitledetails(true)}
                          onMouseLeave={() => setTitledetails(false)}
                        ></i>
                      </span>
                    </h3>
                    <textarea
                      type="text"
                      placeholder="Ajouter un titre pour décrire votre video "
                      name="title"
                      maxLength={100}
                      onChange={(e) => setTitle(e.target.value)}
                      // onKeyDown={whenKeyPressed}
                    />

                    {console.log(title?.length, "calcull")}
                    <h4
                      style={{
                        width: "60px",
                        position: "absolute",
                        left: "390px",
                        top: "70px",
                        fontWeight: "400",
                      }}
                    >
                      {title?.length}/100{" "}
                    </h4>
                  </div>
                  {descdetails && (
                    <div className="desc__details">
                      <p>
                        Pour aider les spectateurs à trouver plus facilement vos
                        vidéos, rédigez des descriptions contenant des mots
                        clés. Vous pouvez présenter votre vidéo et placer les
                        mots clés au début de la description.
                      </p>
                    </div>
                  )}

                  <div className="inputText">
                    <h3 style={{ paddingLeft: "20px" }}>
                      Description{" "}
                      <span>
                        <i
                          class="uil uil-question-circle"
                          onMouseEnter={() => setDescdetails(true)}
                          onMouseLeave={() => setDescdetails(false)}
                        ></i>
                      </span>
                    </h3>

                    <textarea
                      type="text"
                      placeholder="Présentez votre video a vos spectateurs"
                      name="desc"
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>
                  {/* <input
                      type="text"
                      placeholder="link"
                      name="video"
                      onChange={(e) =>setLink(e.target.value)}
                    /> */}
                  {/* // widget /// */}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "20px",
                    }}
                  >
                    {!show ? (
                      <>
                        <h4>Ajouter votre video</h4>
                        <div style={{ width: "50%" }}>
                          <input
                            className="choose_file"
                            type="file"
                            accept="file_extension|audio/*|video/*|image/*|media_type"
                            // value={""}
                            onChange={(e) => setFile(e.target.files[0])}
                          />
                          {console.log(file?.name)}
                        </div>
                      </>
                    ) : null}

                    <br />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "65px",
                    }}
                  >
                    <h4>Ajouter votre poster</h4>
                    <div
                      style={{
                        width: "70%",
                        height: "100px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input
                        className="choose_file"
                        type="file"
                        // value={""}
                        onChange={(e) => setFilePoster(e.target.files[0])}
                      />
                      <div
                        style={{
                          width: "170px",
                          height: "80px",
                          backgroundColor: "transparent",
                          border: "0.5px solid black",
                        }}
                      >
                        <img
                          style={{ width: "100%", height: "100%" }}
                          alt="photo"
                          src={poster}
                        />
                      </div>
                    </div>
                  </div>
                  {file == "" ? (
                    <>
                      {" "}
                      <button
                        style={{ backgroundColor: "gray" }}
                        className="upload_button"
                        onClick={() => {
                          uploadImage();
                          uploadPoster();
                          setLoading(true);
                        }}
                        disabled={file === ""}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <button
                        className="upload_button"
                        onClick={() => {
                          uploadImage();
                          uploadPoster();
                          setLoading(true);
                        }}
                      >
                        Save
                      </button>
                    </>
                  )}
                </div>
                <div className="videouploaded">
                  <iframe src={url} controls="0" frameborder="0" />
                  {/* ----------upload loading --------------------- */}
                  {loading && url == "" && (
                    <div className="upload__loader">
                      <div className="loader">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                    </div>
                  )}

                  {/* ---------------end upload loading------------------------- */}
                  <div style={{ overflow: "hidden", width: "95%" }}>
                    {" "}
                    <div className="vd_up_details">
                      {" "}
                      <h5>Lien vidéo</h5>
                      {url !== "" && (
                        <div
                          style={{
                            color: "#0760d4",
                            cursor: "pointer",
                          }}
                        >
                          <div>{url}</div>
                          <div
                            style={{
                              display: "flex",
                              position: "absolute",
                              left: "280px",
                              top: "20px",
                            }}
                          >
                            <i
                              class="uil uil-copy"
                              onClick={() => copyToClipBoard(url)}
                            ></i>
                            <div
                              style={{
                                position: "absolute",
                                left: "10px",
                                top: "40px",
                                color: "green",
                              }}
                            >
                              {" "}
                              {copySuccess}
                            </div>
                          </div>
                        </div>
                      )}
                      <div style={{ paddingTop: "5px" }}>
                        <h5>Nom du fichier</h5>

                        {file?.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="confirmaddvideo">
                <div className="telechergement">
                  {misenligne && (
                    <div className="mis__enligne">
                      <p>Mise en ligne de la vidéo terminée</p>
                    </div>
                  )}

                  <i
                    class="uil uil-arrow-up"
                    onMouseEnter={() => setMisenligne(true)}
                    onMouseLeave={() => setMisenligne(false)}
                  ></i>
                  {traitemetvideo && (
                    <div className="traitement__video">
                      <p>
                        Traitement de la vidéo <br /> Traitement terminé
                      </p>
                    </div>
                  )}

                  <i
                    class="uil uil-usd-square"
                    onMouseEnter={() => setTraitemetvideo(true)}
                    onMouseLeave={() => setTraitemetvideo(false)}
                  ></i>
                  {verification && (
                    <div className="verification">
                      <h4> Vérification des droits d'auteur terminée</h4>
                      <p>Aucun problème détecté</p>
                    </div>
                  )}

                  <i
                    class="uil uil-comment-verify"
                    onMouseEnter={() => setVerification(true)}
                    onMouseLeave={() => setVerification(false)}
                  ></i>
                  <h4>Vérifications terminées. Aucun problème détecté.</h4>
                </div>
                {url === "" || !title ? (
                  <div>
                    {" "}
                    <Link to="/">
                      <button
                        style={{
                          backgroundColor: "gray",
                          cursor: "not-Allowed",
                        }}
                        disabled={!title || !desc || url === ""}
                      >
                        Suivant
                      </button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setVisibilité(true);
                        handleSave();
                        setTimeout(() => {
                          navigate("/");
                        }, 1500);
                      }}
                      disabled={!title || !desc || !file}
                    >
                      Suivant
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </>
    </>
  );
};

export default AddVideo;
