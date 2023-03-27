import { useState } from "react";
import "./App.css";
import CardAdd from "./components/CardAdd";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks, "objetos");

  //o createTask recebe a variavel text do componente CardAdd atravez do whenCreateTask={createTask}
  function createTask(text) {
    const task = { id: tasks.length + 0, text: text, finalizado: true };
    setTasks([...tasks, task]);
    console.log(task, "task");
  }

  return (
    <div className="App">
      <CardAdd whenAddTask={createTask} />
    </div>
  );
}

export default App;
