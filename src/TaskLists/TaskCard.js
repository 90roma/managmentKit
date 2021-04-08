import React from "react"
import "./style.css";
import { CheckBox } from "../CheckBox";
import { Tag } from "./Tag";
import { Avatar } from "../Avatar";
import {Title} from "../Title";

const TaskCard = (props) => {
    const cardClass = (selected) => {
        switch (selected) {
            case true:
                return "card card__wrapper card__wrapper_selected";
            default:
                return "card card__wrapper";
        }
    }
  return (
      <div className={cardClass(props.selected)}>
        <div className="card__heading-wrapper">
            <CheckBox className="CheckBox" value={props.isDone} task={props.checkBoxCard} />
            <Title header={props.header}/>
        </div>
        <div className="card__department-wrapper">
            <Avatar url={props.avatarUrl}/>
            <Tag name={props.tag} />
        </div>
      </div>
  );
};

export { TaskCard };
