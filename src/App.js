import { Task } from "./Task";
import { TaskList } from "./TaskList";
import avatarDev from "./Avatar/avatar-dev.png";
import avatarMark from "./Avatar/avatar-mark.png";
import avatarDes from "./Avatar/avatar-des.png";
import './styles.css';

export default function App() {
  return (
    <div className="App">
        <TaskList/>
        <Task
            title="Find top 5 customer requests"
            // subtitle="Added by Kristin A. yesterday at 12:41pm"
            author="Kristin A."
            createdAt="yesterday at 12:41pm"
            asignTo="Linzell Bowman"
            deadLine="Tue, Dec 25"
            tags={["marketing"]}
            followers={[avatarDev, avatarMark, avatarDes]}
            description="Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.
"
            files={ [{fileName: "Redesign Brief 2019.pdf", fileSize: "159 KB", filePreview:"", fileType:"pdf"}] }
            discussion={ [{comment: "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes", avatar: " ", date: "Yesterday at 12:37pm", name:"Helena Brauer", position: "Designer"}] }
        />
    </div>
  );
}
