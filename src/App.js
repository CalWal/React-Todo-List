import React from "react";

import NavBar from "/components/NavBar";
import MainContent from "/components/MainContent";
import Footer from "/components/Footer";
import TodoItem from "/components/TodoItem";
import TodoData from "./TodoData.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData
    };
  }
  render() {
    const TodoComponent = this.state.todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} text={todo.text} />
    ));
    return <div>{TodoComponent}</div>;
  }
}
export default App;
