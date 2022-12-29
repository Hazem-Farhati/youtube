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
  // const [newProduct, setNewProduct] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // const [link, setLink] = useState("")

  const [showAdd, setShowAdd] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);
  const product = useSelector((state) => state.product?.product);
  const [titledetails, setTitledetails] = useState(false)
  const [descdetails, setDescdetails] = useState(false)
  // const handleUpdate = (e) => {
  //   setNewProduct({
  //     ...newProduct,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const [file, setFile] = useState("");
  const [filePoster, setFilePoster] = useState("");

  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const [poster, setPoster] = useState("");

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

  return (
    <>
      <>
        {showAdd ? (
          <div className="addvideocontainer">
            <div className="addVideo">
              <div className="headeraddvideo">
                <h2>{title}</h2>
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
                        ? { border: "1px solid red" }
                        : { border: "1px solid black" }
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
                    />
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
                      description{" "}
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

                  <div>
                    {!show ? (
                      <>
                        <h5>video</h5>
                        <input
                          className="choose_file"
                          type="file"
                          accept="file_extension|audio/*|video/*|image/*|media_type"
                          // value={""}
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </>
                    ) : null}

                    <br />
                  </div>
                  <h5>photo</h5>
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
                  <button
                    className="upload_button"
                    onClick={() => {
                      uploadImage();
                      uploadPoster();
                    }}
                  >
                    Save
                  </button>
                </div>
                <div className="videouploaded">
                  <iframe src={url} controls="0" frameborder="0" />
                </div>
              </div>
              <div className="confirmaddvideo">
                <div className="telechergement"></div>
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
