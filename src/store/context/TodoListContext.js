import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import TodoReducer from "../reducer/TodoReducer";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const initialState = [
    { id: uuid(), userId: 1, name: "Admin " },
    { id: uuid(), userId: 2, name: "User " },
    { id: uuid(), userId: 2, name: "User " },
  ];
  const [todo, todoDispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoListContext.Provider value={{ todo, todoDispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
