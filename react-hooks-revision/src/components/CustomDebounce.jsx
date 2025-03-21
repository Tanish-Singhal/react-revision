import React, { useState } from "react";
import useDebounce from "./hooks/custom-hooks/useDebounce";

const CustomDebounce = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const debouncedValue = useDebounce(inputText, 1000, () => {
    console.log("Debounced Value function call");
  });

  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="Type Something..."
        onChange={handleInputChange}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

export default CustomDebounce;
