import { useState } from "react";
import "./App.css";
import CardAdd from "./components/CardAdd";

function App() {
  const [task, setTask] = useState([]);
  
  function createTask() {}

  return (
    <div className="App">
      <CardAdd whenCreateTask={createTask} />
    </div>
  );
}

export default App;
