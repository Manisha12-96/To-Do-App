import React, { useState, useEffect, useRef } from "react";

function TodoInput(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
  };

  return (
    <form className="inputField" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            value={input}
            placeholder="Update Item edit"
            className="todo-input"
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={input}
            placeholder="Add your new todo"
            className="todo-input"
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button"> Add </button>
        </>
      )}
    </form>
  );
}

export default TodoInput;
