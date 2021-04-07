import React from "react";
import './style.css';

const Picture = ({ url }) => {
  return <img className="picture" src={url} alt="this pic" />;
};

export { Picture };
