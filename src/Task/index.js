import React, { useState } from "react";
import './style.css';

import {Title} from "../Title";
import {Button} from "../Button";
import avatarDev from "../Avatar/avatar-dev.png";
import avatarMark from "../Avatar/avatar-mark.png";
import avatarDes from "../Avatar/avatar-des.png";
import {CheckBox} from "../CheckBox";
import {Avatar} from "../Avatar";
import {Tag} from "../Tag";
import avatarAdd from "../Avatar/avatar-add.png";
import {File} from "../File";
import avatarPdf from "../Avatar/avatar-pdf.png";
import avatarRoad from "../Avatar/avatar-road.png";

const Task = () => {
    const [descriptionText, setDescriptionText] = useState('Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.');
    const [isEditMode, setEditMode] = useState(false);
    const handleDescriptionText = (event) => setDescriptionText(event.target.value);

    const [isState, setIsState] = useState(false)

    return (
        <div className="Task">
            <div className="Task__container">
                <div className="Task__title-wrapper">
                    <Title
                        title="Find top 5 customer requests"
                        subtitle="Added by Kristin A. yesterday at 12:41pm"
                    />
                    <div className="Task__button-wrapper">
                        <div onClick={ () => setIsState(!isState)}>
                            <CheckBox checkBoxCard={isState}/>
                        </div>

                        <Button/>
                    </div>
                </div>
                <div className="Task__title-info">
                    <div className="Task__title-info__wrapper">
                        <Title headingUppercase="Asign To"/>
                        <div className="Task__title-info__asign-wrapper">
                            <Avatar url={avatarDev} />
                            <p className="Task__title-info__text">Linzell Bowman</p>
                        </div>
                    </div>
                    <div className="Task__title-info__wrapper">
                        <Title headingUppercase = "due on"/>
                        <p className="Task__title-info__text">Tue, Dec 25</p>
                    </div>
                    <div className="Task__title-info__wrapper">
                        <Title headingUppercase = "tag"/>
                        <Tag name="marketing"/>
                    </div>
                    <div className="Task__title-info__wrapper">
                        <Title headingUppercase="followers" />
                        <div className="Task__title-info__followers-avatar">
                            <Avatar url={avatarDev} />
                            <Avatar url={avatarDes} />
                            <Avatar url={avatarMark} />
                            <button className="Task__title-info__button"><Avatar url={avatarAdd} /></button>
                        </div>
                    </div>
                </div>
                <div className="Task__text-wrapper">
                    <Title headingUppercase="description" />
                    <p className="Task__text"> { descriptionText } </p>
                    { isEditMode && <textarea value={descriptionText} onChange={(event)=> handleDescriptionText(event)}/> }
                    <button onClick={ ()=> setEditMode(!isEditMode) }> {isEditMode ? 'save' : 'edit'} </button>
                    <div className="file__wrapper">
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