import React from 'react';
import './style.css';

import {Title} from "../Title";
import {Button} from "../Button";
import {TaskCard} from "../TaskCard";
import avatarDev from "../Avatar/avatar-dev.png";
import avatarMark from "../Avatar/avatar-mark.png";
import avatarDes from "../Avatar/avatar-des.png";
import avatarDes2 from "../Avatar/avatar-des2.png";
import avatarMark2 from "../Avatar/avatar-mark2.png";
import avatarDes3 from "../Avatar/avatar-des3.png";

const TaskList = () => {

    return (
        <div className="Task-list">
            <div className="Task-list__title-wrapper">
                <Title title="BackLog"/>
                <Button
                    text="+ Add task"
                    type="success"
                />
            </div>
            <TaskCard
                header="E-mail after registration so that I can confirm my address"
                tag="development"
                avatarUrl={avatarDev}
                hide
            />
            <TaskCard
                header="Find top 5 customers and get reviews from them"
                tag="marketing"
                avatarUrl={avatarMark}
                hide={false}
            />
            <TaskCard
                header="Two-factor authentication to make my private data more secure "
                tag="design"
                avatarUrl={avatarDes}
            />
            <div className="Task-list__title-wrapper">
                <Title title="To Do" />
                <Button text="+ Add task" type="success"/>
            </div>
            <TaskCard
                header="An option to search in current projects or in all projects"
                tag="design"
                avatarUrl={avatarDes2}
            />
            <TaskCard
                header="Account for teams and personal in bottom style"
                tag="marketing"
                avatarUrl={avatarMark2}
            />
            <TaskCard
                header="Listing on Product Hunt so that we can reach as many potential users"
                tag="design"
                avatarUrl={avatarDes3}
            />
        </div>
    )
}

export { TaskList }

