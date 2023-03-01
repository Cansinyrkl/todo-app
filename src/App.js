import Login from "./components/login/Login";
import UserListContextProvider from "./store/context/useUserContext";
import TodoListContextProvider from "./store/context/useTodoList";

function App() {
  return (
    <div className="App">
      <UserListContextProvider>
        <TodoListContextProvider>
          <Login />
        </TodoListContextProvider>
      </UserListContextProvider>
    </div>
  );
}

export default App;
