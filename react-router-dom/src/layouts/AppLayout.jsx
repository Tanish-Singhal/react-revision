import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";

const AppLayout = () => {
  // usenavigation and usenavigate both are different things
  const navigation = useNavigation();
  // Go back button in comment is made by using usenavigate

  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Header />

      {isLoading && <div>...Loading</div>}

      {/* Pages */}

      {/* outlet helps use to render all the pages */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
