import React, {useState} from 'react';
import {TASKS} from "./TaskList/data";
import {Task} from "./Task";
import {TaskList} from "./TaskList";
import './styles.css';

export default function App() {
    const [openedTask, setOpenedTask] = useState()

    return (
        <div className="App">
            <TaskList
                tasks={TASKS}
                onTaskClick={(task) => setOpenedTask(task)}
            />
            {openedTask && <Task
                title={openedTask.title}
                author={openedTask.author}
                createdAt={openedTask.createdAt}
                asignTo={openedTask.asignTo}
                avatar={openedTask.avatar}
                deadLine={openedTask.deadLine}
                tags={openedTask.tags}
                followers={openedTask.followers}
                description={openedTask.description}
                files={openedTask.files}
                discussion={openedTask.discussion}
            />
            }
        </div>
    );
}
