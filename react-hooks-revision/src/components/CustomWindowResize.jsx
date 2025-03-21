import React from "react";
import useWindowSize from "./hooks/custom-hooks/useWindowSize";

const CustomWindowResize = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  );
};

export default CustomWindowResize;
