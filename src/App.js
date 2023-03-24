import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";

const App = () => {
  const date = new Date();

  return (
    <div className="container text-center">
      <p>
        Current date:
        {date.toLocaleString()}
      </p>
      <div className="row align-items-start">
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
      </div>
      <Home color="red" display="false" />
    </div>
  );
};

export default App;
