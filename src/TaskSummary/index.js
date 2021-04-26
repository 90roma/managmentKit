import React from "react";
import "./style.css";

const TaskSummary = ({countDescription, count}) => {
    return (
        <div className="Task-summary">
            <p className="Task-summary__count">{count}</p>
            <p className="Task-summary__description">{countDescription}</p>
        </div>
    )
};

export {TaskSummary}