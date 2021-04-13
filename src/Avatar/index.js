import React from "react";
import './style.css';

const Avatar = ({url}) => {
  return <img className="avatar card__avatar" src={url} alt="user avatar" />;
};

export { Avatar };
