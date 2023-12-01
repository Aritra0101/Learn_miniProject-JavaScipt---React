import React from "react";
import TodoItem from "./todoItem";

export const todos = (props) => {
  return (
    <div className="container">
      <h2 className="text-center mb-5">Todo List</h2>
      <div className="row container mt-3 mb-7">
        <h4 className="col-2">SNO</h4>
        <h4 className="col-3">Title</h4>
        <h4 className="col-3">Description</h4>
        <h4 className="col-2">Delete</h4>
        <br /> <hr /> <br />
      </div>
      {props.todos.length > 0 ? (
        <>
          {props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })}
        </>
      ) : (
        <h2 className="text-center mt-10">No ToDo to display</h2>
      )}
    </div>
  );
};

export default todos;
