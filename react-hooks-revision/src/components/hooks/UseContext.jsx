import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");
const UserContext = createContext(null);

const UseContext = () => {
  const [theme, setTheme] = useState("light");

  const changetheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, changetheme }}>
      <UserContext.Provider value={{ isloggedIn: true }}>
        <h2>UseContext Hook</h2>
        <p>
          - used to consume values (like data or functions) from a context
          created by createContext() - It allows functional components to access
          context values without prop drilling. - In scenarios where passing
          props through multiple levels of components is impractical.
        </p>
        <br />
        <br />
        <GrandparentComponent data={"light"} /> {/* prop drilling */}
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

// Prop Drilling
const GrandparentComponent = ({ data }) => {
  return <ParentComponent data={data} />;
};

const ParentComponent = ({ data }) => {
  return <ChildComponent data={data} />;
};

const ChildComponent = ({ data }) => {
  return <GrandChildComponent data={data} />;
};

const GrandChildComponent = ({ data }) => {
  const { theme, changetheme } = useContext(ThemeContext);
  const { isloggedIn } = useContext(UserContext);

  return (
    <div>
      <p>value using prop drilling: {data}</p>
      <p>value using context: {theme}</p>
      <button
        onClick={() => {
          changetheme();
        }}
      >
        change theme
      </button>
      <p>{isloggedIn ? "user is logged in" : "User is not logged in"}</p>
    </div>
  );
};

export default UseContext;
