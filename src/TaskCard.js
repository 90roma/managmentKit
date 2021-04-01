import React from "react";
import { TaskText } from "./TaskText";
import { CheckBox } from "./CheckBox";
import { Tag } from "./Tag";
import { Avatar } from "./Avatar";

const TaskCard = (props) => {
  // const task = "task-box";
  return (
    <div className="task-box">
      <div className="title-wrapper">
        <CheckBox value={props.isDone} />
        <TaskText text={props.title} />
      </div>
      <div className="department-wrapper">
        <div className="avatar__task">
          <Avatar url={props.avatarUrl} />
        </div>
        <Tag name={props.tag} />
      </div>
    </div>
  );
};

export { TaskCard };
