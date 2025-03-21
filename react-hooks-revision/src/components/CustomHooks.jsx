import React from "react";
import CustomCounter from "./CustomCounter";

const CustomHooks = () => {
  return (
    <div>
      <h2>Custom Hooks</h2>
      <p>Custom Hooks are functions that allow you to extract and </p>

      <br />

      <h4>Why we need custom hooks?</h4>
      <ul>
        <li>Access to lifecycle</li>
        <li>Avoid Prop drilling</li>
        <li>Preserving States during renders</li>
        <li>Hooks Rules</li>
      </ul>

      <br />
      <br />

      <h3>1. Build a custom hook to manage and update a counter.</h3>
      <CustomCounter />
    </div>
  );
};

export default CustomHooks;
