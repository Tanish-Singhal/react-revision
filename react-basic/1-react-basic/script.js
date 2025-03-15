function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  // This will not increment the count by 5 because react will change the state in batches
  // so it will increment the count by 1 only

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("p", null, `Count: ${count}`),
  //   React.createElement("button", { onClick: increment }, "Increment")
  // );
  // This is how we write jsx using html

  console.log("Count Rendered");

  // so babel is used to convert the jsx code into html
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

// Rerendering happen when
// - initial render
// - when state change

const CounterParent = () => {
  const [showMessage, setShowMessage] = React.useState(false);
  const [showMessage2, setShowMessage2] = React.useState(false);

  console.log("Parent Rendered");

  const toggleMessages = () => {
    setShowMessage(!showMessage);
    setShowMessage2(!showMessage2);
  };
  // This will didn't log the parent rendered twice because react send the changes in batches
  // that's why parent rendered and child rendered print only once

  return (
    <div>
      <p>Counter</p>
      <Counter />

      <br />

      {showMessage && <b>Now you can see me</b>}
      <button onClick={toggleMessages}>Show Message</button>

      <br />

      <Frameworks />
    </div>
  );
};

const Frameworks = () => {
  const [frameworks, setFrameworks] = React.useState([
    { name: "React", id: 1 },
    { name: "Angular", id: 2 },
  ]);

  return (
    <div>
      <h3>Framework</h3>

      {frameworks.map(({name, id}) => {   // here we are destructuring the framework object
        return <p key={id}>{name}</p>;
      })}

      <button
        onClick={() => {
          setFrameworks([{name: "Vue", id: 3}, ...frameworks]);
        }}
      >
        Add New
      </button>
      {/* now when i click on the add new button, the thing inside Framwork re-render */}
      {/* to tackle this, we need to define keys */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(CounterParent));

// difference between useState and normal variable declaration
// on rerender, the value of the useState will be preserved, while the value of the normal variable will be reset to the initial value on rerender
