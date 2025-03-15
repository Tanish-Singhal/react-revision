function App() {
  return (
    <div>
      <h2>Most Asked Interview Questions</h2>

      <h4>
        1. How do you define and use state in a react functional component? How
        are they different from normal variables?
      </h4>
      <Ques1 />

      <h4>2. How do you define and use state in a React class component?</h4>
      <Ques2 />

      <h4>3. What are PropTypes?</h4>
      <p>
        To define the type of prop we have to pass to the component like string,
        etc.
      </p>
      {/* 
        count.propTypes = {
          count: PropTypes.number,
        };
      */}

      <h4>4. How to pass props in a class based components?</h4>
      <p>see the question 2 output for this</p>

      <h4>5. What is Virtual DOM?</h4>
      <p>
        It is a logical representation of the actual DOM in the form of React
        Elements.
      </p>

      <h4>6. Reconciliation vs Rendering</h4>
      <p>
        - Reconciliation: The process of comparing the difference between two
        Virtual DOM.
      </p>
      <p>
        - Rendering: The actual updation of the information in the rendering
        environment.
      </p>

      <h4>7. What is the Diffing Algorithm?</h4>
      <p>
        Whenever the state or props get updated, an updated Virtual DOM tree is
        generated.
      </p>
      <p>
        Diffing Algorithm calculates the difference between the 2 Virtual DOM
        (previous DOM and the updated DOM).
      </p>
      <p>
        After calculating the difference only the actual DOM is updated. This
        means React capable of doing fast DOM manipulation.
      </p>
    </div>
  );
}

const Ques1 = () => {
  // const [count, setCount] = React.useState(0);
  let count = 0;

  return (
    <div>
      <p>count: {count}</p>

      <button
        onClick={() => {
          // setCount(count + 1);
          count(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

class Ques2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        {/* <p>count: {this.state.count}</p> */}
        <Ques3 countProp={this.state.count} />

        <button
          onClick={() => {
            this.incrementCount();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

class Ques3 extends React.Component {
  render() {
    return (
      <div>
        <p>count: {this.props.countProp}</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
