import React from "react";
const todoitem = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "30px 20px 0",
  width: "70%",
  borderBottom: "1px solid #cecece",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 100,
  fontSize: 15,
  color: "#333333"
};

const checkboxStyles = {
  marginRight: "10px",
  fontSize: "30px",
  outline: 0
};
const textStyles = {
  fontFamily: "Helvetica Neue",
  fontSize: 20
};

function TodoItem(props) {
  return (
    <div>
      <div style={todoitem}>
        <input
          checked={props.todo.completed}
          type="checkbox"
          style={checkboxStyles}
          onChange={event => props.handleChange(props.todo.id)}
        />
        <p id={props.id} style={textStyles}>
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default TodoItem;
