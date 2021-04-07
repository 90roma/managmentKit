import "./styles.css";
import { TaskCard } from "./TaskLists/TaskCard";
import { Title } from "./TaskLists/Title";
import { Button } from "./Button";
import { BtnMore } from "./Button/BtnMore";
import { CheckBox } from "./CheckBox";
import { HeaderUp } from "./TaskLists/HeaderUp";
import { TaskText } from "./TaskLists/TaskText";
import { Tag } from "./TaskLists/Tag";

import { Avatar } from "./Avatar";
import { Picture } from "./Picture/Picture";
import avatarAdd from "./Avatar/avatar-add.png";
import avatarDev from "./Avatar/avatar-dev.png";
import avatarDes from "./Avatar/avatar-des.png";
import avatarDes2 from "./Avatar/avatar-des2.png";
import avatarDes3 from "./Avatar/avatar-des3.png";
import avatarMark from "./Avatar/avatar-mark.png";
import avatarMark2 from "./Avatar/avatar-mark2.png";
import avatarPdf from "./Avatar/avatar-pdf.png";
import avatarRoad from "./Avatar/avatar-road.png";

export default function App() {
  return (
    <div className="App">
      <div className="task-list__container">
        <div className="task-list__wrapper task-list__wrapper__title-position">
          <Title title="Backlog" />
          <Button
              text="+ Add task"
              type="success"
          />
        </div>
        <div className="task-list__wrapper">
          <TaskCard
            title="E-mail after registration so that I can confirm my address"
            tag="development"
            avatarUrl={avatarDev}
            isDone
            checkBoxCard
          />
        </div>
        <div className="task-list__wrapper">
          <TaskCard
            title="Find top 5 customers and get reviews from them"
            tag="marketing"
            avatarUrl={avatarMark}
            isDone={false}
            checkBoxCard
          />
        </div>
        <div className="task-list__wrapper">
          <TaskCard
            title="Two-factor authentication to make my private data more secure "
            tag="design"
            avatarUrl={avatarDes}
            isDone={false}
            checkBoxCard
          />
        </div>
        <div className="task-list__wrapper task-list__wrapper__todo-position">
          <Title title="To Do" />
          <Button text="+ Add task" type="success"/>
        </div>
        <div className="task-list__wrapper">
          <TaskCard
            title="An option to search in current projects or in all projects"
            tag="design"
            avatarUrl={avatarDes2}
            isDone={false}
            checkBoxCard

          />
        </div>
        <div className="task-list__wrapper">
          <TaskCard
            title="Account for teams and personal in bottom style"
            tag="marketing"
            avatarUrl={avatarMark2}
            isDone={false}
            checkBoxCard
          />
        </div>
        <div className="task-list__wrapper">
          <TaskCard
            title="Listing on Product Hunt so that we can reach as many potential users"
            tag="design"
            avatarUrl={avatarDes3}
            isDone={false}
            checkBoxCard
          />
        </div>
      </div>
      <div className="task-list-opened__container">
        <div className="task-list-opened__wrapper">
          <div className="task-list-opened__header">
            <Title
              title="Find top 5 customer requests"
              subtitle="Added by Kristin A. yesterday at 12:41pm"
            />
            <div className="list-opened__btn-position">
              <CheckBox
                  checkBoxCard={false}
                  isDone={false}
              />
              <BtnMore />
            </div>
          </div>
          <div className="task-list-opened__assign-wrapper task-list-opened__assign-wrapper_position">
            <div className="task-opened-box asign-to">
              <HeaderUp title="asign to" />
              <div className="task-opened-box__asign">
                <div className="asign-avatar_position">
                  <Avatar url={avatarDev} />
                </div>
                <div className="task-opened-box_text">
                  <TaskText textAsign="Linzell Bowman" />
                </div>
              </div>
            </div>
            <div className="task-opened-box due-on">
              <HeaderUp title="due on" />
              <div className="task-opened-box_text">
                <TaskText textAsign="Tue, Dec 25" />
              </div>
            </div>
            <div className="task-opened-box tag">
              <HeaderUp title="tag" />
              <Tag name="marketing" />
            </div>
            <div className="task-opened-box followers">
              <HeaderUp title="followers" />
              <div className="followers-avatar">
                <Avatar url={avatarDev} />
                <Avatar url={avatarDes} />
                <Avatar url={avatarMark} />
                <Avatar url={avatarAdd} />
              </div>
            </div>
          </div>
          <div className="task-list-opened__description-wrapper task-list-opened__description-wrapper_position">
            <HeaderUp title="description" />
            <div className="description-text_position">
              <div className="task__text-asign">
                <TaskText
                  textAsign="Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.
  "
                />
              </div>
            </div>
            <div className="description-picture__container">
              <div className="description-picture__wrapper description-picture__wrapper_position">
                <div className="description-picture_position">
                  <Picture url={avatarPdf} />
                </div>
                <div className="description-picture_text-position">
                  <div className="description-picture_text-header">
                    <TaskText textAsign="Redesign Brief 2019.pdf" />
                  </div>
                  <div className="description_text-body">
                    <div className="description_text-size-picture description_text-size-picture_position">
                      <TaskText textAsign="159 KB" />
                    </div>
                    <div className="description_text-delete-picture">
                      <TaskText textAsign="Delete" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-picture__wrapper description-picture__wrapper_position">
                <div className="description-picture_position">
                  <Picture url={avatarRoad} />
                </div>
                <div className="description-picture_text-position">
                  <div className="description-picture_text-header">
                    <TaskText textAsign="Header.png" />
                  </div>
                  <div className="description_text-body">
                    <div className="description_text-size-picture description_text-size-picture_position">
                      <TaskText textAsign="129 KB" />
                    </div>
                    <div className="description_text-delete-picture">
                      <TaskText textAsign="Delete" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
