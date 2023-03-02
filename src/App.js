import Login from "./components/login/Login";
import Todo from "./components/todo/Todo";
import UserListContextProvider from "./store/context/useUserContext";
import TodoListContextProvider from "./store/context/useTodoList";
import { Route, Routes } from "react-router-dom";
import EditPage from "./components/editpage/EditPage";
import NotFound from "./components/pages/NotFound";
import "./App.css";

function App() {
  return (
    <span className="App">
      <UserListContextProvider>
        <TodoListContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/todo/:id" element={<EditPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TodoListContextProvider>
      </UserListContextProvider>
    </span>
  );
}

export default App;
