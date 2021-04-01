import React from "react";

const Avatar = ({ url }) => {
  // console.log(url)
  return <img className="avatar" src={url} alt="user avatar" />;
};

export { Avatar };
