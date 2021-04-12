import "./styles.css";
import { TaskCard } from "./TaskLists/TaskCard";
import { Title } from "./Title";
import { Button } from "./Button";
import { CheckBox } from "./CheckBox";
import { Tag } from "./Tag";

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
      <div className="task-list task-list__container">
        <div className="title-wrapper">
          <Title title="Backlog" />
          <Button
              text="+ Add task"
              type="success"
          />
        </div>
          <TaskCard
            header="E-mail after registration so that I can confirm my address"
            tag="development"
            avatarUrl={avatarDev}
            isDone
            checkBoxCard
            selected={false}
          />
          <TaskCard
            header="Find top 5 customers and get reviews from them"
            tag="marketing"
            avatarUrl={avatarMark}
            isDone={false}
            checkBoxCard
            selected
          />
          <TaskCard
            header="Two-factor authentication to make my private data more secure "
            tag="design"
            avatarUrl={avatarDes}
            isDone={false}
            checkBoxCard
            selected={false}
          />
        <div className="title-wrapper">
          <Title title="To Do" />
          <Button text="+ Add task" type="success"/>
        </div>
          <TaskCard
            header="An option to search in current projects or in all projects"
            tag="design"
            avatarUrl={avatarDes2}
            isDone={false}
            checkBoxCard
            selected={false}
          />
          <TaskCard
            header="Account for teams and personal in bottom style"
            tag="marketing"
            avatarUrl={avatarMark2}
            isDone={false}
            checkBoxCard
            selected={false}
          />
          <TaskCard
            header="Listing on Product Hunt so that we can reach as many potential users"
            tag="design"
            avatarUrl={avatarDes3}
            isDone={false}
            checkBoxCard
            selected={false}
          />
      </div>
      <div className="task-list-opened task-list-opened__container">
        <div className="task-list-opened__wrapper">
          <div className="task-list-opened__header-wrapper">
            <Title
              title="Find top 5 customer requests"
              subtitle="Added by Kristin A. yesterday at 12:41pm"
            />
            <div className="task-list-opened__btn-position">
              <CheckBox
                  checkBoxCard={false}
                  isDone={false}
              />
              <Button/>
            </div>
          </div>
          <div className="block-info task-list-opened__block-info">
            <div className="block-info__group">
              <Title headingUppercase="Asign To"/>
              <div className="block-info__asign">
                  <Avatar url={avatarDev} />
                  <p className="text block-info__text">Linzell Bowman</p>
              </div>
            </div>
            <div className="block-info__group">
              <Title headingUppercase = "due on"/>
                <p className="text block-info__text">Tue, Dec 25</p>
            </div>
            <div className="block-info__group">
              <Title headingUppercase = "tag"/>
              <Tag name="marketing" />
            </div>
            <div className="block-info__group">
              <Title headingUppercase="followers" />
              <div className="block-info__followers-avatar">
                <Avatar url={avatarDev} />
                <Avatar url={avatarDes} />
                <Avatar url={avatarMark} />
                <Avatar url={avatarAdd} />
              </div>
            </div>
          </div>
          <div className="task-list-opened__description-wrapper task-list-opened__description-wrapper_position">
            <Title headingUppercase="description" />
            <div className="description-text_position">
              <div className="task-list-opened__text">
                <p >Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.</p>
              </div>
            </div>
            <div className="document-info__container">
              <div className="document-info document-info__wrapper">
                <div className="document-info__picture">
                  <Picture url={avatarPdf} />
                </div>
                <div className="description-picture_text-position">
                  <div className="description-picture_text-header">
                    <p>Redesign Brief 2019.pdf</p>
                  </div>
                  <div className="description_text-body">
                    <div className="description_text-size-picture description_text-size-picture_position">
                      <p>159 KB</p>
                    </div>
                    <div className="description_text-delete-picture">
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="document-info document-info__wrapper">
                <div className="document-info__picture">
                  <Picture url={avatarRoad} />
                </div>
                <div className="description-picture_text-position">
                  <div className="description-picture_text-header">
                    <p>Header.png</p>
                  </div>
                  <div className="description_text-body">
                    <div className="description_text-size-picture description_text-size-picture_position">
                      <p>129 KB</p>
                    </div>
                    <div className="description_text-delete-picture">
                      <p>Delete</p>
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
