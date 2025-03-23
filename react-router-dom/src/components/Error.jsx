import React from "react";
import { Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.data || error.message}</p>

      <br />
      <br />

      <Link to={-1}>
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Error;
