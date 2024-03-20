import React from "react";

const Mode = ({ status, setStatus }) => {
  let circleStyles = {
    transform: `TranslateX(${status ? 0 : "50px"})`,
    backgroundColor: status ? "blue" : "yellowgreen",
  };

  let modeContainerStyles = {
    border: status ? "1px solid black" : "1px solid white",
  };

  return (
    <div className="modeContainer" style={modeContainerStyles}>
      <div
        className="circle"
        style={circleStyles}
        onClick={() => setStatus(!status)}
      ></div>
    </div>
  );
};

export default Mode;
