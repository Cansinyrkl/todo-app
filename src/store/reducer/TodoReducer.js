import uuid from "react-uuid";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../../utils/constants";

const initialState = {
  todos: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: uuid(), userId: action.userId, name: action.text },
      ];
    case DELETE_TODO:
      return [...state.filter((item) => item.id !== action.value)];
    case EDIT_TODO:
      state.filter((todo) => {
        if (todo.id === action.selectedId) {
          return (todo.name = action.newName);
        }
      });
      return [...state];
  }
};

export default TodoReducer;
