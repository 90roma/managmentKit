import React from "react";

const Btn = (props) => {
  return (
    <div className="btn">
      <p className="btn-text">{props.text}</p>
    </div>
  );
};

export { Btn };
