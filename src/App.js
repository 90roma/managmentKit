import { Task } from "./Task";
import { TaskList } from "./TaskList";
import './styles.css';

export default function App() {
  return (
    <div className="App">
        <TaskList/>
        <Task/>
    </div>
  );
}
