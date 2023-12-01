import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 11,
            todo: "ASC",
            isCompleted: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
})

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext)
}

