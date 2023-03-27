import { useState, useEffect } from "react";

const SampleUseeffects = ({ color, values }) => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(true);
  const [value, setValue] = useState(values);
  useEffect(() => {
    console.log("called inside useeffect");
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  //   useEffect(() => {
  //     setValue("Value Changed");
  //     console.log("changed the value state");
  //   }, [display]);

  return (
    <>
      <div>useEffect Methods</div>
      <p>
        {value} - {count}
      </p>
      {display && <p>Displaying....{color}</p>}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setDisplay(!display)}
      >
        Change display
      </button>
    </>
  );
};

export default SampleUseeffects;
