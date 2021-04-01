import React from "react";
import './style.css'

const Button = (props) => {
  return (
    <div className="btn">
      <p className="btn-text">{props.text}</p>
    </div>
  );
};

export { Button };
