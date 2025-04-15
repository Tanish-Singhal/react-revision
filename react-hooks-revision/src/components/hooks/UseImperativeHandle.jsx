import React, { forwardRef, useImperativeHandle, useRef } from "react";

const UseImperativeHandle = () => {
  const childRef = useRef(null);

  return (
    <div>
      <h2>UseImperativeHandle Hook</h2>

      <br />

      <h4>
        How do you call a function of child component from parent component?
      </h4>
      <button
        onClick={() => {
          childRef.current.focusInput();
        }}
      >
        Focus on Input
      </button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focusInput,
    };
  });

  return <input type="text" ref={inputRef} />;
});

export default UseImperativeHandle;
