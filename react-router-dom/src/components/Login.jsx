import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.email.value, e.target.password.value);
    if (e.target.email.value && e.target.password.value) {
      localStorage.setItem("login", true);
      navigate("/posts");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter email" />
        <input type="password" name="password" placeholder="Enter password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
