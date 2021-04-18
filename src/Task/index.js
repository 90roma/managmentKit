import React, { useState } from "react";
import './style.css';

import {Title} from "../Title";
import {Button} from "../Button";
import avatarDev from "../Avatar/avatar-dev.png";
import {CheckBox} from "../CheckBox";
import {Avatar} from "../Avatar";
import {Tag} from "../Tag";
import avatarAdd from "../Avatar/avatar-add.png";
import {File} from "../File";
import avatarPdf from "../Avatar/avatar-pdf.png";
import avatarRoad from "../Avatar/avatar-road.png";

const Task = ({title, author, createdAt, asignTo, deadLine, tags, followers, description}) => {
    return (
        <div className="Task">
            <div className="Task__container">
                <div className="Task__title-wrapper">
                    <div>
                        <h2>{title}</h2>
                        <p className="text subtitle">{`Added by ${author} ${createdAt}`}</p>
                    </div>
                    <div className="Task__button-wrapper">
                        <div>
                            <CheckBox checkBoxCard={false}/>
                        </div>
                        <Button/>
                    </div>
                </div>
                <div className="Task__title-info">
                    <div className="Task__title-info__wrapper">
                        <Title headingUppercase="Asign To"/>
                        <div className="Task__title-info__asign-wrapper">
                            <Avatar url={avatarDev} />
                            <p className="Task__title-info__text">{asignTo}</p>
                        </div>
                    </div>
                    <div className="Task__title-info__wrapper">
                        <Title headingUppercase = "due on"/>
                        <p className="Task__title-info__text">{deadLine}</p>
                    </div>
                    <div className="Task__title-info__wrapper">
                        <Title headingUppercase = "tag"/>
                        {tags.map((tag)=> <Tag name={tag}/>)}
                    </div>
                    <div className="Task__title-info__wrapper">
                        <Title headingUppercase="followers" />
                        <div className="Task__title-info__followers-avatar">
                            { followers.map((follower)=> <Avatar url={follower} />) }
                            <button className="Task__title-info__button"><Avatar url={avatarAdd} /></button>
                        </div>
                    </div>
                </div>
                <div className="Task__text-wrapper">
                    <Title headingUppercase="description" />
                    <p className="Task__text"> { description } </p>
                    <div className="File__wrapper">
                        <File
                            url={avatarPdf}
                            fileName="Redesign Brief 2019.pdf"
                            size="159 KB"
                        />
                        <File
                            url={avatarRoad}
                            fileName="Header.png"
                            size="129 KB"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Task };