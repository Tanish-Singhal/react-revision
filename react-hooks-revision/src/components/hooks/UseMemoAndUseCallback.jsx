import React, { useMemo, useState } from "react";

const UseMemoAndUseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  // const squareValue = () => {
  //   console.log("Expensive Calculation...");

  //   return counter * counter;
  // };
  // to prevent this expensive calculation, we can use useMemo hook

  const squareValue = useMemo(() => {
    console.log("Expensive Calculation...");

    return counter * counter;
  }, [counter]); // when you want to recalculate the value

  return (
    <div>
      <h2>useMemo Hook</h2>
      <p>
        It is a hook used to memoize the result of a function and cache it,
        recalculating it only if the dependencies change.
      </p>

      <br />

      <p>Square Counter: {squareValue}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sqaure Increment
      </button>
      {/* on clicking of this button, the expensive calculation will happen */}

      <p>Counter2: {counter2}</p>
      <button
        onClick={() => {
          setCounter2(counter2 - 1);
        }}
      >
        Decrement
      </button>
      {/* but the epensive calculation also happen on clicking of this button also */}

      <br />
      <br />

      <h3>When to you use useMemo hook?</h3>
      <p>To prevent unnecessary re-computation of values across re-renders.</p>

      <br />

      <h3>useState vs useMemo</h3>
      <p>
        useMemo memoizes a computed value and returns the cached value without
        causing re-renders, while useState manages and triggers re-renders when
        the state changes.
      </p>

      <br />
      <br />
      <br />

      <h2>useCallback Hook</h2>
      <p>
        It is a hook used to memoize a provided callback function, returning the
        memoized version of the function.
      </p>
    </div>
  );
};

export default UseMemoAndUseCallback;
