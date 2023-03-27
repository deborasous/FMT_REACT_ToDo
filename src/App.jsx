import "./App.css";
import CardAdd from "./components/CardAdd";

function App() {
  function createTask() {}

  return (
    <div className="App">
      <CardAdd whenCreateTask={createTask} />
    </div>
  );
}

export default App;
