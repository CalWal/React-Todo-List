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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const TodoComponent = this.state.todos.map(todo => (
      <TodoItem
        handleChange={this.handleChange}
        todo={todo}
        key={todo.id}
        text={todo.text}
      />
    ));
    return <div>{TodoComponent}</div>;
  }
}
export default App;
