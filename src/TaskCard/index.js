import React,{ useState } from "react"
import "./style.css";
import { CheckBox } from "../CheckBox";
import { Tag } from "../Tag";
import { Avatar } from "../Avatar";
import {Title} from "../Title";

const TaskCard = ({checkBoxCard, header, avatarUrl, tag}) => {
    const [isState, setIsState] = useState(false)
    const [isSelect, setIsSelect] = useState(false)

    const cardClass = (isSelect) => {
        switch (isSelect) {
            case true:
                return "card card__wrapper card__wrapper_selected";
            default:
                return "card card__wrapper";
        }
    }

  return (
      <div onClick={ () => setIsSelect (!isSelect) } className={cardClass(isSelect)}>
        <div className="card__heading-wrapper">
            <div onClick={ ()=> setIsState(!isState) }>
                <CheckBox className="CheckBox" value={isState} task={checkBoxCard} />
            </div>
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
