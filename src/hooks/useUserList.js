import { useContext } from "react";
import { UserListContext } from "../store/context/UserListContext";

export const useUserList = () => {
  const userListContext = useContext(UserListContext);
  const userList = userListContext.users;
  const usersDispatch = userListContext.usersDispatch;

  return { userList, usersDispatch };
};
