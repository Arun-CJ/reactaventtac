import { useState } from "react";

const SampleText = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [userClass, setUserClass] = useState("");
  const [userDetails, setUserDetails] = useState({});

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleAgeInput = (e) => {
    setAge(e.target.value);
  };
  const handleClassInput = (e) => {
    setUserClass(e.target.value);
  };

  const handleInputs = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  return (
    <div className="row align-items-start">
      <div className="col">
        Name:
        <input
          name="name"
          type="text"
          value={name}
          onChange={(event) => handleNameInput(event)}
        />
      </div>
      <div className="col">
        Age:
        <input
          name="age"
          type="text"
          value={age}
          onChange={(event) => handleAgeInput(event)}
        />
      </div>
      <div className="col">
        Class:
        <input
          name="class"
          type="text"
          value={userClass}
          onChange={(event) => handleClassInput(event)}
        />
      </div>
      Entered Inputs:
      <p>{name}</p>
      <p>{age}</p>
      <p>{userClass}</p>
      <p>Second method</p>
      <div className="col">
        Name:
        <input
          name="name"
          type="text"
          value={userDetails.name}
          onChange={(event) => handleInputs(event)}
        />
      </div>
      <div className="col">
        Age:
        <input
          name="age"
          type="text"
          value={userDetails.age}
          onChange={(event) => handleInputs(event)}
        />
      </div>
      <div className="col">
        Class:
        <input
          name="class"
          type="text"
          value={userDetails.userClass}
          onChange={(event) => handleInputs(event)}
        />
      </div>
      Entered Inputs:
      <p>{userDetails.name}</p>
      <p>{userDetails.age}</p>
      <p>{userDetails.userClass}</p>
    </div>
  );
};

export default SampleText;
