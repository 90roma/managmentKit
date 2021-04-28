import React from "react";
import './style.css';

const Avatar = ({url, users=[]}) => {
  return (
    <div>
        {Boolean(url) && <img className="card__avatar" src={url} alt="user avatar" />}
        {Boolean(users.length) && (
          <div className="Header__users">{users.map((user) => <img className="Header__user" src={user} alt="user avatar"/>)}</div>)}
    </div>
)};

export { Avatar };
