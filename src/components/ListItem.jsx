import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const ListItem = ({ task }) => {
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
        <li className="listTask list-group-item mb-2 rounded-3 d-flex justify-content-between align-items-center">
          {task.text}
          {checked == true ? (
            <button className=" btn btn-primary" onClick={handleChecked}>
              <AiOutlineCheck />
            </button>
          ) : (
            <button className=" btn btn-success" onClick={handleChecked}>
              <AiOutlineCheck />
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ListItem;
