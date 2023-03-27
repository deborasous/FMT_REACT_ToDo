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
    <div>
      <input
        className="px-3 py-2 rounded-3"
        placeholder="Criar a tarefa"
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn py-2 m-lg-3 btn-outline-success text-light"
        onClick={handleAddTask}
      >
        Criar Tarefa
      </button>
      <p>{text}</p>
    </div>
  );
};

export default CardAdd;
