import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      {/* Laoding */}
      {/* Pages */}

      {/* outlet helps use to render all the pages */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
