import "./App.css";
import UseState from "./components/hooks/UseState";
import UseEffect from "./components/hooks/UseEffect";
import UseRef from "./components/hooks/UseRef";
import UseContext from "./components/hooks/UseContext";
import { ThemeProvider } from "./components/hooks/machine-ques/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <UseRef /> */}
        {/* <UseContext /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
