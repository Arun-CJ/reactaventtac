import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });
  const navigate = useNavigate();

  const handleInputs = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.userName === "arunCJ" && userInfo.password === "Arun@123") {
      navigate("/dashboard");
    } else {
      alert("Username and password does not match!!!");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          value={userInfo.userName}
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={userInfo.password}
          onChange={(e) => handleInputs(e)}
        />
      </div>
      <p>
        Go <Link to="/">Home</Link>
      </p>
      <button className="mt-5 btn btn-primary">Submit</button>
    </form>
  );
};

export default Login;
