import uuid from "react-uuid";
import {
  addTodoType,
  deleteTodoType,
  editTodoType,
} from "../../utils/constants";

const initialState = {
  todos: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodoType:
      return [
        ...state,
        { id: uuid(), userId: action.userId, name: action.text },
      ];
    case deleteTodoType:
      return [...state.filter((item) => item.id !== action.value)];
    case editTodoType:
      state.filter((todo) => {
        if (todo.id === action.selectedId) {
          return (todo.name = action.newName);
        }
      });
      return [...state];
  }
};

export default TodoReducer;
