import React from "react";

const Line = ({ status, setStatus }) => {
  let lineStyles = {
    // backgroundColor: status ? "black" : "white",
  };
  return (
    <div className="lineContainer">
      <div className="line" style={lineStyles}></div>
      {/* <h5>A</h5> */}
    </div>
  );
};

export default Line;
