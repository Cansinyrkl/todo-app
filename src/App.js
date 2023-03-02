import Login from "./components/login/Login";
import Todo from "./components/todo/Todo";
import UserListContextProvider from "./store/context/useUserContext";
import TodoListContextProvider from "./store/context/useTodoList";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Theme from "./theme/Theme";
import EditPage from "./components/editpage/EditPage";

function App() {
  return (
    <span className="App">
      <Theme />
      <UserListContextProvider>
        <TodoListContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/todo/:id" element={<EditPage />} />
          </Routes>
        </TodoListContextProvider>
      </UserListContextProvider>
    </span>
  );
}

export default App;
