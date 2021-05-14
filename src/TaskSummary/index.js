import React from "react";
import "./style.css";

const TaskSummary = ({ countDescription, count }) => {
  return (
    <div className="Task-summary">
      <span className="Task-summary__count">{count}</span>
      <span className="Task-summary__description">{countDescription}</span>
    </div>
  );
};

export { TaskSummary };
