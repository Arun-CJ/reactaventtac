import { useState } from "react";
import { useContext } from "react";
import { NameContext } from "./Home";

const ThirdChild = ({ inputValue, setInputValue }) => {
  const name = useContext(NameContext);
  console.log(name);
  return (
    <>
      Name: {name}
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

export default ThirdChild;
