import React from "react";
import { useSearchParams } from "react-router";

const Product = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = (newParams) => {
    const paramObject = Object.fromEntries(searchParams.entries());
    const mergedParams = { ...paramObject, ...newParams };
    setSearchParams(mergedParams);
  };

  return (
    <div>
      <h4>Colors</h4>
      <button
        onClick={() => {
          updateSearchParams({ color: "red" });
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          updateSearchParams({ color: "blue" });
        }}
      >
        Blue
      </button>
      <button
        onClick={() => {
          updateSearchParams({ color: "green" });
        }}
      >
        Green
      </button>

      <h4>Sizes</h4>
      <button
        onClick={() => {
          updateSearchParams({ size: 8 });
        }}
      >
        8
      </button>
      <button
        onClick={() => {
          updateSearchParams({ size: 9 });
        }}
      >
        9
      </button>
      <button
        onClick={() => {
          updateSearchParams({ size: 10 });
        }}
      >
        10{" "}
      </button>
    </div>
  );
};

export default Product;
