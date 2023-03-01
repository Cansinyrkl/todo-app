import React, { createContext, useState } from "react";

export const UserListContext = createContext();

const UserListContextProvider = ({ children }) => {
  const [users, usersDispatch] = useState([
    { id: 1, admin: true, name: "admin", password: "123" },
    { id: 2, admin: false, name: "user", password: "123" },
  ]);

  return (
    <UserListContext.Provider value={{ users, usersDispatch }}>
      {children}
    </UserListContext.Provider>
  );
};

export default UserListContextProvider;
