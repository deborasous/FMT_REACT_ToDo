import React, { useState } from "react";

const CardAdd = (props) => {
  const [text, setText] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    if (text != "") {
      setText("");
      props.whenAddTask(text);
    } else {
      alert("crie uma tarefa");
    }
  }

  return (
    <div className="input-group flex-nowrap mb-3">
      <input
        className="form-control "
        placeholder="Criar a tarefa"
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn py-2 m-0 btn-outline-success text-light"
        onClick={handleAddTask}
      >
        Criar Tarefa
      </button>
    </div>
  );
};

export default CardAdd;
