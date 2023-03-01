import { useContext, UserListContext } from "./Index";

export const useUserList = () => {
  const userList = useContext(UserListContext);
  const users = userList.users;
  const todoDispatch = userList.usersDispatch;

  return { userList, users, todoDispatch };
};
