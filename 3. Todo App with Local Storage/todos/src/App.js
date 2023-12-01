import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./MyComponents/header";
import ToDoS from "./MyComponents/todos";
import Footer from "./MyComponents/footer";
import AddTodos from "./MyComponents/addTodos";
import About from "./MyComponents/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let todo;
  if (localStorage.getItem("todos") === null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(todo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodos = (title, description) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    };
    setTodos([...todos, myTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Routes>

          <Route
            path="/about"
            element={
              <>
                <About />
                <br /> <br /> <hr /> <br /> <br />
                <Footer />
              </>
            }
          ></Route>

          <Route
            exact
            path="/"
            element={
              <>
                <AddTodos addTodos={addTodos} />
                <ToDoS todos={todos} onDelete={onDelete} />
              </>
            }
          ></Route>

        </Routes>
        
      </Router>
    </>
  );
}

export default App;
