import uuid from "react-uuid";

const TodoReducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: uuid(), userId: action.userId, name: action.text },
      ];
    case "DELETE_TODO":
      return [...state.filter((item) => item.id !== action.value)];
    case "EDIT_TODO":
      state.filter((todo) => {
        if (todo.id === action.selectedId) {
          return (todo.name = action.newName);
        }
      });
      return [...state];
  }
};

export default TodoReducer;
