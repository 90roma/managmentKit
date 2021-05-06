import React from 'react';
import {Title} from "../Title";
import {Button} from "../Button";
import {TaskCard} from "../TaskCard";
import './style.css';

const TaskList = ({tasks, onTaskClick, title, openedTaskId}) => {
    return (
        <div className="Task-list">
            <div className="Task-list__title-wrapper">
                <Title title={title}/>
                <Button
                    text="+ Add task"
                    type="success"
                />
            </div>
            {tasks.map((task, index) =>
                <div onClick={() => onTaskClick(task)} key={`${task.title}_${index}`}>
                    <TaskCard
                        header={task.title}
                        tag={task.tags[0]}
                        avatarUrl={task.avatar}
                        isSelect={openedTaskId === task.id}
                    />
                </div>
            )}
        </div>
    )
}

export {TaskList}

