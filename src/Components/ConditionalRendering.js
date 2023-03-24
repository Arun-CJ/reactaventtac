import { useState } from "react";

const ConditionalRendering = (props) => {
  const [display, setDisplay] = useState(true);
  const DisplayRed = () => {
    return <p>This is red component</p>;
  };

  const DisplayGreen = () => {
    return <p>This is Green component</p>;
  };

  //   if (props.color === "red") {
  //     return <DisplayRed />;
  //   } else {
  //     return <DisplayGreen />;
  //   }
  //   return props.color === "red" && <DisplayRed />;
  console.log(display);
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setDisplay(!display)}
      >
        Show green component only if display value is true
      </button>
      {display === true ? <DisplayGreen /> : <DisplayRed />}
    </div>
  );
};

export default ConditionalRendering;
