import React from "react";

import NavBar from "/components/NavBar";
import MainContent from "/components/MainContent";
import Footer from "/components/Footer";
import Todo from "/components/Todo";
import TodoItem from "/components/TodoItem";
import TodoData from "./TodoData.js";

const App = () => {
  const TodoComponent = TodoData.map(todo => (
    <TodoItem
      todo={todo}
      key={todo.id}
      text={todo.text}
      completed={todo.completed}
    />
  ));
  return <div>{TodoComponent}</div>;
};

export default App;
