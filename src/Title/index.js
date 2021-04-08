import React from "react";
import './style.css';

const Title = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <h3 className="text header-uppercase">{props.headingUppercase}</h3>
        <p className="text subtitle">{props.subtitle}</p>
        <h3 className="text card-header">{props.header}</h3>
    </div>
  );
};

export { Title };
