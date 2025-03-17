import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleIncrement() {
    setCount((prev) => prev + 3);
    setCount((prev) => prev + 3);
    setCount((prev) => prev + 3);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div>
      <h2>UseState Hook</h2>
      <p>
        usestate states refers to the data that changes over time and affects
        how a components is rendered and how a component behaves
      </p>
      <p>
        useStates is like a memory which helps the components to keeps the track
        of information
      </p>

      <br />
      <br />

      <p>
        You clicked <u>{count} times</u>.
      </p>

      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        Increment by 3
      </button>

      <button onClick={handleIncrement}>Increment by 9</button>

      <br />
      <br />
      <br />

      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <p>
        Your text: <strong>{inputValue}</strong>
      </p>

      <br />
      <br />

      <h3>Challenge</h3>
      <p>
        Build a form containing First name, Last name and Email. Use only one
        state to manage all fields.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleFormChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UseState;
