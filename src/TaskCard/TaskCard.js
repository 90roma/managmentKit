import React from "react"
import "./style.css";
import { CheckBox } from "../CheckBox";
import { Tag } from "../Tag";
import { Avatar } from "../Avatar";
import {Title} from "../Title";

const TaskCard = ({selected, isDone, checkBoxCard, header, avatarUrl, tag}) => {

    const cardClass = (selected) => {
        switch (selected) {
            case true:
                return "card card__wrapper card__wrapper_selected";
            default:
                return "card card__wrapper";
        }
    }
  return (
      <div className={cardClass(selected)}>
        <div className="card__heading-wrapper">
            <CheckBox className="CheckBox" value={isDone} task={checkBoxCard} />
            <Title header={header}/>
        </div>
        <div className="card__department-wrapper">
            <Avatar url={avatarUrl}/>
            <Tag name={tag} />
        </div>
      </div>
  );
};

export { TaskCard };
