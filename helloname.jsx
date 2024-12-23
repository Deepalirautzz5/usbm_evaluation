import React from "react";

const Greeting = ({ name }) => {
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
};

export default Greeting;
import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <Greeting name={"Dee"} />
    </>
  );
}

export default App;