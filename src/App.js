import "./styles.css";
import React from "react";
// import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="wrapper">
      <header>Todo App</header>
      {/* <TodoInput /> */}
      <TodoList />
      {/* <ul className="todoList"></ul>
      <div className="footer">
        <span>
          You have <span className="pendingNumb"></span> pending tasks
        </span>
        <button>Clear All</button>
      </div> */}
    </div>
  );
}
