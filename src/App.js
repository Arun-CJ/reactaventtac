import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ErrorPage from "./Components/ErrorPage";
import SampleUseeffects from "./Components/SampleUseeffects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import UserDashboard from "./Components/UserDashboard";
import { useState } from "react";
import PostList from "./Components/Posts/PostList";
import PostInfo from "./Components/Posts/PostInfo";

const App = () => {
  const date = new Date();
  const [color, setColor] = useState("red");

  return (
    <div className="container text-center">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/get-posts" element={<PostList />} />
          <Route path="/post-info/:postId" element={<PostInfo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// return (
//   <div className="container text-center">
//     <p>
//       Current date:
//       {date.toLocaleString()}
//     </p>
//     {/* <div className="row align-items-start">
//       <div className="col">One of three columns</div>
//       <div className="col">One of three columns</div>
//       <div className="col">One of three columns</div>
//     </div> */}
//     <button className="btn btn-warning" onClick={() => setColor("green")}>
//       Change color
//     </button>
//     <SampleUseeffects color={color} values="No Change" />
//   </div>
// );
