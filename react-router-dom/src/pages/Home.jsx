import React from "react";
import { NavLink, Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
