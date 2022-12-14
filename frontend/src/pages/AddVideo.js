import { Upload } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UploadWidget from "../component/uploadwidget/UploadWidget";
import { createProduct } from "../redux/productSlice/productSlice";
import "../styles/addvideo.css";
import axios from "axios";
import "../styles/addvideo.css";
import { Cursor } from "mongoose";

const AddVideo = ({ ping, setPing }) => {
  const dispatch = useDispatch();
  // const [newProduct, setNewProduct] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // const [link, setLink] = useState("")

  const [showAdd, setShowAdd] = useState(true);
  const navigate = useNavigate();

  const product = useSelector((state) => state.product?.product);

  // const handleUpdate = (e) => {
  //   setNewProduct({
  //     ...newProduct,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
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
  const handleSave = () => {
    dispatch(
      createProduct({
        title,
        desc,
        video: url,
      })
    );
    setPing(!ping);
  };
  return (
    <>
      {product?.map((el) => (
        <>
          {showAdd ? (
            <div className="addvideocontainer">
              <div className="addVideo">
                <div className="headeraddvideo">
                  <h2>titleInput</h2>
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

                    <div className="inputTitle">
                      <h3 style={{ paddingLeft: "20px" }}>Title</h3>
                      <input
                        type="text"
                        placeholder="title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="inputText">
                      <h3 style={{ paddingLeft: "20px" }}>description</h3>

                      <textarea
                        type="text"
                        placeholder="desc"
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
                      <button
                        className="upload_button"
                        onClick={() => {
                          uploadImage();
                        }}
                      >
                        Save
                      </button>
                    </div>
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
                            cursor: "not-Allowed"
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
      ))}
    </>
  );
};

export default AddVideo;
