import React from "react";
import useLocalStorage from "./hooks/custom-hooks/useLocalStorage";

const CustomLocalStorage = () => {
  const [value, set, remove] = useLocalStorage("username", undefined);

  const handleLogout = () => {
    remove();
    set("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => {
          set(e.target.value);
        }}
      />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default CustomLocalStorage;
