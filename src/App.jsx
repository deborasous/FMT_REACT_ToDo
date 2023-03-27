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
    console.log(text, "textttt");
  }

  return (
    <div className="App">
      <CardAdd whenAddTask={createTask} />
      {tasks.map((task) => (
        <ListItem key={task.id} task={(tasks, task)} />
      ))}
    </div>
  );
}

export default App;
