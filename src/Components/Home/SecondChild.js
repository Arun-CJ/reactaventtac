import { useContext, useState } from "react";
import ThirdChild from "./ThirdChild";
import { NameContext } from "./Home";

const SecondChild = ({ inputValue, setInputValue }) => {
  const name = useContext(NameContext);
  return (
    <>
      Name value in Second component : {name}
      <br />
      <ThirdChild inputValue={inputValue} setInputValue={setInputValue} />
    </>
  );
};

export default SecondChild;
