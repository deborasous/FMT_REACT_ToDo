import React, { useState } from "react";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";

const ListItem = ({ task, deleteTask }) => {
  const [checked, setChecked] = useState(task.checked);

  function handleChecked(id, checked) {
    if ((task) => task.id === id) {
      const newTask = (task.checked = !checked);
      setChecked(newTask);
    }
  }

  return (
    <div>
      <ul className="list-group">
        {checked != true ? (
          <li className="bg-light rounded-3 py-1 px-3 mb-2 d-flex justify-content-between align-items-center">
            {task.text}
            <div className=" d-flex justify-item-end align-items-center">
              <button className="btn py-1 px-2" onClick={handleChecked}>
                <AiOutlineCheck className="text-success" />
              </button>
              <button
                className="btn btn-danger py-1 px-2"
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </li>
        ) : (
          <li className=" bg-success rounded-3 mb-2 py-1 px-3 d-flex justify-content-between align-items-center">
            {task.text}
            <div className=" d-flex justify-item-end align-items-center">
              <button className="btn py-1 px-2" onClick={handleChecked}>
                <AiOutlineCheck className="text-light" />
              </button>
              <button
                className="btn btn-success py-1 px-2"
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ListItem;

// deleteTask ==== está sendo passado como parametro para o componente dentro do App.js
// O evento onclick do botão de deletar ====() => {deleteTask(task.id)};  ==== quando clicado, indica o id do elemento clicado
