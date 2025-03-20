import React, { useReducer } from "react";

const UserReducer = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };

      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <h2>UseReducer Hook</h2>
      <p>
        It is hook used for managing complex state logic by utilizing a reducer
        function.
      </p>
      <p>
        Alternative to useState and provides a way to update state based on
        defined actions.
      </p>

      <br />

      <p>Count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>

      <br />
      <br />

      <h3>When to use useReducer instead of useState?</h3>
      <ul>
        <li>
          When managing complex state transitions or logic that invloves
          multiple sub-values.
        </li>
        <li>
          When state logic follow a pattern or when multiple actions need to
          update the state in predictable ways.
        </li>
      </ul>

      <br />
      <br />

      <h3>Give Example of useReducer for shopping cart state management?</h3>
      <ShoppingCart />
    </div>
  );
};

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add Product":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "Remove Product":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case "Clear Cart":
      return {
        ...state,
        cart: [],
      };

    default:
      break;
  }
};

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <h4>Cart</h4>
      {state.cart.map((product) => (
        <div key={product.id}>
          {product.name}

          <button
            onClick={() => {
              dispatch({ type: "Remove Product", payload: product });
            }}
          >
            Remove from Cart
          </button>
        </div>
      ))}

      <button
        onClick={() => {
          dispatch({ type: "Clear Cart" });
        }}
      >
        Clear Cart
      </button>

      <h4>Products</h4>
      {products.map((product) => (
        <div key={product.id}>
          {product.name}

          <button
            onClick={() => {
              dispatch({ type: "Add Product", payload: product });
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserReducer;
