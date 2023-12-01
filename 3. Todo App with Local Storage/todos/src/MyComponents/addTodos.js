import React, { useState } from "react";

export default function AddTodos(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title OR Desprction can't be Empty!");
    }
    else {
        props.addTodos(title, description);
        setTitle("");
        setDescription("");
    }
  };
  return (
    <div className="container my-3">
      <h3>Add Todo into ToDos List</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="tile" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
            id="description"
          />
        </div>
        <button type="submit" className="btn btn-sn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
}
