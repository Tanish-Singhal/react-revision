import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        to="/"
        // className={({ isActive, isPending, isTransitioning }) =>
        //   [
        //     isActive ? "activeLink" : "",
        //     isPending ? "pendingLink" : "",
        //     isTransitioning ? "transitioningLoader" : "",
        //   ].join(" ")
        // }

        // style={({ isActive, isPending, isTransitioning }) => {
        //   return {
        //     color: isActive ? "green" : "blue",
        //     fontWeight: isActive ? "bold" : "normal",
        //     textDecoration: isPending ? "underline" : "none",
        //     fontStyle: isTransitioning ? "italic" : "normal",
        //   };
        // }}
      >
        Home
      </NavLink>
      <NavLink to="/posts">Post</NavLink>
    </div>
  );
};

export default Header;
