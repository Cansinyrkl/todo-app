import uuid from "react-uuid";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MENU":
      return [
        ...state,
        { id: uuid(), userId: action.userId, name: action.text },
      ];
  }
};

export default TodoReducer;
