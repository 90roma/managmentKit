import React from "react";

const Tag = (props) => {
  const depName =
    props.name === "development"
      ? "task dev-name"
      : props.name === "marketing"
      ? "task mark-name"
      : "task des-name";
  return (
    <div className={depName}>
      <p>{props.name}</p>
    </div>
  );
};

export { Tag };
