import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./redux/productSlice/productSlice";
import { useEffect, useState } from "react";
import AddVideo from "./pages/AddVideo";
import Upload from "./pages/Upload";
import Login from "./component/Login";
import Register from "./component/Register";
import Profil from "./pages/Profil";
import PrivateRoute from "./privateRoutes/PrivateRoutes";
import { getusers, userCurrent } from "./redux/userSlice/userSlice";
import ProfileAcceuil from "./component/ProfileAcceuil";
import ProfileVideo from "./component/ProfileVideo";
import View from "./pages/View";

function App() {
  const users = useSelector((state) => state.user?.users);
  console.log(users,"hellooo")
  const [ping, setPing] = useState(false);
  const isAuth = localStorage.getItem("token");
  const [width, setwidth] = useState({ width: "80%", width1: "330px" });
  const [width1, setwidth1] = useState("");
  // {console.log(width1)}
  const [show, setShow] = useState(true);

  const [marginLeft, setmarginLeft] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
    dispatch(getProduct());
    dispatch(getusers())
  }, [dispatch, ping]);
  const [search, setsearch] = useState("");


  return (
    <div className="App">
      <Navbar
      
        setwidth={setwidth}
        setwidth1={setwidth1}
        setmarginLeft={setmarginLeft}
        search={search}
        setsearch={setsearch}
        show={show}
        setShow={setShow}
      />
      <Routes>
        <Route
          path="/addVideo"
          element={<AddVideo ping={ping} setPing={setPing} />}
        />
        <Route path="/uploadVideo" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />{" "}
        <Route
          path="/"
          element={
            <Home
              setwidth1={setwidth1}
              width1={width1}
              width={width}
              marginLeft={marginLeft}
              search={search}
              setsearch={setsearch}
              show={show}
              setShow={setShow}
            />
          }
        />
        <Route element={<PrivateRoute />}>
          <Route
            path="/profil"
            element={
              <Profil ping={ping} setPing={setPing} setsearch={setsearch} />
            }
          >
            <Route
              path="profilaccueil"
              element={<ProfileAcceuil search={search} setsearch={setsearch} />}
            />
            <Route
              path="profilvideo"
              element={<ProfileVideo search={search} setsearch={setsearch} />}
            />
          </Route>
        </Route>
        <Route
          path="/view/:id"
          element={
            <View
              setwidth1={setwidth1}
              width1={width1}
              width={width}
              marginLeft={marginLeft}
              search={search}
              setsearch={setsearch}
              show={show}
              setShow={setShow}
              ping={ping} setPing={setPing}
            />
          }
        />{" "}
      </Routes>
    </div>
  );
}

export default App;
