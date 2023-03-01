import Login from "./components/login/Login";
import Todo from "./components/todo/Todo";
import UserListContextProvider from "./store/context/useUserContext";
import TodoListContextProvider from "./store/context/useTodoList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <span className="App">
      <UserListContextProvider>
        <TodoListContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </TodoListContextProvider>
      </UserListContextProvider>
    </span>
  );
}

export default App;
