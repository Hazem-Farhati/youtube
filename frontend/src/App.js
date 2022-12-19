import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { useDispatch } from "react-redux";
import { getProduct } from "./redux/productSlice/productSlice";
import { useEffect, useState } from "react";
import AddVideo from "./pages/AddVideo";
import Upload from "./pages/Upload";
import Login from "./component/Login";
import Register from "./component/Register";
import Profil from "./pages/Profil";
import PrivateRoute from "./privateRoutes/PrivateRoutes";
import { userCurrent } from "./redux/userSlice/userSlice";
import ProfileAcceuil from "./component/ProfileAcceuil";
import ProfileVideo from "./component/ProfileVideo";

function App() {
  const [ping, setPing] = useState(false);
  const isAuth = localStorage.getItem("token");

  const dispatch = useDispatch();
  useEffect(() => {
 if(isAuth){
  dispatch(userCurrent());
 }
 dispatch(getProduct());

  }, [dispatch, ping]);
  const [search, setsearch] = useState("");

  return (
    <div className="App">
      <Navbar search={search} setsearch={setsearch} />
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
          element={<Home search={search} setsearch={setsearch} />}
        />
        <Route element={<PrivateRoute />}>
          <Route
            path="/profil"
            element={<Profil ping={ping} setPing={setPing} setsearch={setsearch} />}
          >
            <Route
              path="profilaccueil"
              element={<ProfileAcceuil search={search} setsearch={setsearch}  />}
            />
            <Route
              path="profilvideo"
              element={<ProfileVideo  search={search} setsearch={setsearch}/>}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
