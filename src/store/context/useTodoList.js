import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import TodoReducer from "../reducer/TodoReducer";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const initialState = [
    { id: uuid(), userId: 1, name: "admin " },
    { id: uuid(), userId: 1, name: "admin " },
    { id: uuid(), userId: 1, name: "admin " },
    { id: uuid(), userId: 2, name: " user " },
    { id: uuid(), userId: 2, name: " user " },
    { id: uuid(), userId: 2, name: " user " },
  ];
  const [todo, todoDispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoListContext.Provider value={{ todo, todoDispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
