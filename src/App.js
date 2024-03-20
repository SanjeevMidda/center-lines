import "./index.css";
import Line from "./components/Line";
import Mode from "./components/Mode";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(true);

  let noOfLines = [];

  for (let index = 0; index < 100; index++) {
    noOfLines.push(<Line status={status} setStatus={setStatus} />);
  }

  let basicStyles = {
    color: status ? "black" : "white",
    backgroundColor: status ? "white" : "black",
  };
  return (
    <div className="App" style={basicStyles}>
      <header>
        <h4>.</h4>
        <Mode status={status} setStatus={setStatus} />
      </header>

      <div className="centerContainer">{noOfLines}</div>
      <h1>SANTORINI</h1>
    </div>
  );
}

export default App;
