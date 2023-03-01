import uuid from "react-uuid";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: uuid(), userId: action.userId, name: action.text },
      ];
    case "DELETE_TODO":
      return [...state.filter((item) => item.id !== action.value)];
    case "EDIT_TODO":
      state.filter((food) => {
        if (food.id === action.selectedId) {
          return (food.name = action.newName);
        }
      });
      return [...state];
  }
};

export default TodoReducer;
