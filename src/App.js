import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  const changeColor = () => {
    if (buttonColor === "red") {
      setButtonColor("blue");
    } else {
      setButtonColor("red");
    }
  };

  return (
    <div className="App">
      <button style={{ backgroundColor: buttonColor }} onClick={changeColor}>
        {buttonColor === "red" ? "change to blue" : "change to red"}
      </button>
      <input type={"checkbox"} />
    </div>
  );
}

export default App;
