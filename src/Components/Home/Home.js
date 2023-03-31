import { useState } from "react";

const Home = ({ color, display }) => {
  const [colors, setColors] = useState("Green");
  const [displayButton, setDisplayButton] = useState(true);

  return (
    <div>
      <p>This is Home page</p>
      {/* <p>The color is {color}</p>
      <p>Functional state value: {colors}</p>
      <button
        className="btn btn-warning"
        type="button"
        onClick={() => setDisplayButton(!displayButton)}
      >
        Change Button display
      </button>
      {displayButton ? (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => setColors("Blue")}
        >
          Change color
        </button>
      ) : (
        <p>Button is disabled</p>
      )}
      <p>Display {display}</p> */}
    </div>
  );
};

export default Home;
