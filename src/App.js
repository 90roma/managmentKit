import { Task } from "./Task";
import { TaskList } from "./TaskList";
import './styles.css';

export default function App() {
  return (
    <div className="App">
        <TaskList/>
        <Task
            title= "Find top 5 customer requests"
            subtitle="subtitle"
        />
    </div>
  );
}
