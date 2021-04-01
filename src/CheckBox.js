import React from "react";

const CheckBox = (props) => {
  return (
    <div
      className={`task__check-box ${props.value && "task__check-box--active"}`}
    />
  );
};

export { CheckBox };
