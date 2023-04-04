import SecondChild from "./SecondChild";

const FirstChild = ({ inputValue, setInputValue }) => {
  return (
    <>
      <SecondChild inputValue={inputValue} setInputValue={setInputValue} />
      <br />
      Entered Value : {inputValue}
    </>
  );
};

export default FirstChild;
