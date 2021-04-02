import React from "react";
import './style.css';

const Avatar = ({ url }) => {
  return <img className="avatar" src={url} alt="user avatar" />;
};

export { Avatar };
