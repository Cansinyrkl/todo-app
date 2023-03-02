import { Route, Routes } from "react-router-dom";
import Todo from "./components/pages/Todo";
import Login from "./components/pages/Login";
import EditPage from "./components/pages/EditPage";
import NotFound from "./components/pages/NotFound";
import TodoListContextProvider from "./store/context/useTodoList";
import UserListContextProvider from "./store/context/useUserContext";
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
