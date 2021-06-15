import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { IoMdTrash } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };
  if (edit.id) {
    return <TodoInput edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        {/* <RiCloseCircleLine />
  <TiEdit /> */}
        <IoMdTrash
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <FaEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
