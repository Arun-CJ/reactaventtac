import { useState } from "react";

const SampleForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", name, age, userClass);
    const data = {
      userName: name,
      userAge: age,
      userClass: userClass,
    };
    setUserDetails(data);
    console.log(data);
  };

  return (
    <div>
      <form className="row align-items-start" onSubmit={(e) => handleSubmit(e)}>
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
        <button>Submit Details</button>
      </form>
      Entered Inputs:
      <p>{userDetails.userName}</p>
      <p>{userDetails.userAge}</p>
      <p>{userDetails.userClass}</p>
    </div>
  );
};

export default SampleForm;
