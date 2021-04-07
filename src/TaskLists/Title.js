import React from "react";

const Title = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p className="subtitle">{props.subtitle}</p>
    </div>
  );
};

export { Title };
