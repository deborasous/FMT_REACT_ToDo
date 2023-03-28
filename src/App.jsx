import { useState } from "react";
import "./App.css";
import CardAdd from "./components/CardAdd";
import ListItem from "./components/ListItem";

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks, "objetos App");

  //o createTask recebe a variavel text do componente CardAdd atravez do whenCreateTask={createTask}
  function createTask(text) {
    const task = { id: tasks.length + 0, text: text, checked: false };
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    let tempTask = tasks.filter((task) => task.id !== id);
    setTasks(tempTask);
  }

  return (
    <div className="App">
      <CardAdd whenAddTask={createTask} />
      {tasks.map((task) => (
        <ListItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default App;
