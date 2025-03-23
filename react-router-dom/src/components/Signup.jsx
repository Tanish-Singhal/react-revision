import React from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      e.target.username.value,
      e.target.email.value,
      e.target.password.value
    );
    if (
      (e.target.username.value, e.target.email.value && e.target.password.value)
    ) {
      navigate("/posts");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="email" name="email" placeholder="Enter email" />
        <input type="password" name="password" placeholder="Enter password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
