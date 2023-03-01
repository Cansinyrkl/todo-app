import uuid from "react-uuid";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MENU":
      return [
        ...state,
        { id: uuid(), userId: action.userId, name: action.text },
      ];
    case "DELETE_MENU":
      return [...state.filter((item) => item.id !== action.value)];
  }
};

export default TodoReducer;
