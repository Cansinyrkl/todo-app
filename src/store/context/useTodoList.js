import React, { createContext, useReducer } from "react";
import uuid from "react-uuid";
import TodoReducer from "../reducer/TodoReducer";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const initialState = [
    { id: uuid(), userId: 1, name: "todo admin " },
    { id: uuid(), userId: 1, name: "todo admin " },
    { id: uuid(), userId: 1, name: "todo admin " },
    { id: uuid(), userId: 2, name: "todo user " },
    { id: uuid(), userId: 2, name: "todo user " },
    { id: uuid(), userId: 2, name: "todo user " },
  ];
  const [todo, todoDispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoListContext.Provider value={{ todo, todoDispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
