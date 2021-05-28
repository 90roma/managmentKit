import React, { useState } from 'react';
import { TASKS } from './TaskList/data';
import { Task } from './Task';
import { Header } from './Header';
import { TaskList } from './TaskList';
import { Sidebar } from './Sidebar';

import './styles.css';

export default function App() {
  const [openedHeaderItem, setOpenedHeaderItem] = useState();
  const [tasks, setTasks] = useState(TASKS);

  const backlogTasks = tasks.filter((task) => task.category === 'backlog');
  const todoTasks = tasks.filter((task) => task.category === 'todo');
  const openedTask = tasks.find((task) => task.openedTask);

  console.log(tasks);
  return (
    <div className='App'>
      <Sidebar title='Projectus' />
      <div className='App__container'>
        <Header
          title='Website Redesign'
          HEADER_ITEM
          onItemClick={(item) => setOpenedHeaderItem(item)}
        />
        {openedHeaderItem && (
          <div className='App__wrapper'>
            <div className='App__task'>
              <TaskList
                tasks={backlogTasks}
                title='Backlog'
                onTaskClick={(selectedTask) => {
                  const newTasks = tasks.map((task) => {
                    if (selectedTask.id === task.id) {
                      return { ...task, openedTask: true };
                    } else {
                      return { ...task, openedTask: false };
                    }
                  });
                  setTasks(newTasks);
                }}
                openedTaskId={openedTask.id}
              />
              <TaskList
                tasks={todoTasks}
                title='To Do'
                onTaskClick={(selectedTask) => {
                  const newTasks = tasks.map((task) => {
                    if (selectedTask.id === task.id) {
                      return { ...task, openedTask: true };
                    } else {
                      return { ...task, openedTask: false };
                    }
                  });
                  setTasks(newTasks);
                }}
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
