import { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([
    { id: 1, texto: "Tarefa 1", finalizado: false },
  ]);

  function addTask(text) {
    //recebe o text como parametro
    //criar objeto tarefa
    //set na lista de tarefa

    const newTask = { id: taskList.length + 1, texto: text, finalizado: false };
    //sempre que copiar um objeto ou array usar o sprint [...variavel]
    const newList = [...taskList];
    newList.push(newTask);
    setTaskList(newList);
  }

  return <div className="App">Inicio do To Do</div>;
}

export default App;
