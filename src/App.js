import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import SampleUseeffects from "./Components/SampleUseeffects";
import { useState } from "react";

const App = () => {
  const date = new Date();
  const [color, setColor] = useState("red");

  return (
    <div className="container text-center">
      <p>
        Current date:
        {date.toLocaleString()}
      </p>
      {/* <div className="row align-items-start">
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
      </div> */}
      <button className="btn btn-warning" onClick={() => setColor("green")}>
        Change color
      </button>
      <SampleUseeffects color={color} values="No Change" />
    </div>
  );
};

export default App;
