import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  const { completed, id, title } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
        </button>
        <span className={completed ? styles.completed : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
