import React, { useState } from "react";
import { TASKS } from "./TaskList/data";
import { Task } from "./Task";
import { Header } from "./Header";
import { TaskList } from "./TaskList";
import { Sidebar } from "./Sidebar";

import "./styles.css";

export default function App() {
  const [openedTask, setOpenedTask] = useState(TASKS[0]);
  const [openedHeaderItem, setOpenedHeaderItem] = useState();

  return (
    <div className="App">
      <Sidebar title="Projectus" />
      <div className="App__container">
        <Header
          title="Website Redesign"
          HEADER_ITEM
          onItemClick={(item) => setOpenedHeaderItem(item)}
        />
        {openedHeaderItem && (
          <div className="App__wrapper">
            <div className="App__task">
              <TaskList
                tasks={TASKS}
                title="Backlog"
                onTaskClick={(task) => setOpenedTask(task)}
                openedTaskId={openedTask.id}
              />
              <TaskList
                tasks={TASKS}
                title="To Do"
                onTaskClick={(task) => setOpenedTask(task)}
                openedTaskId={openedTask.id}
              />
            </div>
            {openedTask && (
              <Task
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
            )}
          </div>
        )}
      </div>
    </div>
  );
}
