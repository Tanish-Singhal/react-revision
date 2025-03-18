import React, { useRef, useState } from "react";

const UseRef = () => {
  const ref = useRef(0);
  const [count, setCount] = useState(0);

  console.log("re render");

  const inputRef = useRef(null);
  console.log(inputRef.current);

  return (
    <div>
      <h2>UseRef Hook</h2>
      <p>
        useRef us a hook to create a mutable reference that persists across
        renders. It renders a mutable object with a current property.
      </p>

      <br />

      <p>
        <strong>Ref value:</strong> {ref.current}
      </p>
      <button
        onClick={() => {
          ref.current++;
          console.log(ref.current);
        }}
      >
        Increment Ref
      </button>
      {/* this shows, internally the value of ref changes but ref doesnot cause any re-render so that's why it does not show
      but when any re-render on the screen then the updated value of ref is shown */}

      <p>
        <strong>useState value:</strong> {count}
      </p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment Count
      </button>

      <br />
      <br />

      <h3>When would you use useref?</h3>
      <ul>
        <li>Accessing DOM element or managing focus.</li>
        <li>Storing mutable values that persist without causing re-renders.</li>
        <li>
          Caching claues to avaoid re-initialization on re-renders. (above
          example)
        </li>
      </ul>

      <br />
      <br />

      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.value = "Hello";
        }}
      >
        Set Focus and add Hello
      </button>

      <br />
      <br />

      <h3>Difference between useState and useRef?</h3>
      <p>
        useState: Manages state and triggers re-renders when its value changes,
        which reflect in the UI also.
      </p>
      <p>
        useRef: It holds a mutable value (current) that persists across
        re-renders without cauing re-render. When you update it the component
        does re-render.
      </p>
    </div>
  );
};

export default UseRef;
