import React from "react";

const TaskText = (props) => {
  return (
    <div>
      <h2 className="task__text">{props.text}</h2>
      <p>{props.textAsign}</p>
    </div>
  );
};
export { TaskText };
