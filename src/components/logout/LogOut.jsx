import React, { useContext } from "react";
import { UserListContext } from "../../store/context/useUserContext";
import { useNavigate } from "react-router-dom";
import "../../App.css";
const LogOut = () => {
  const { users } = useContext(UserListContext);
  const navigate = useNavigate();

  const btnLogout = () => {
    const usersLogout = users.find((user) => {
      return user.name && user.password;
    });
    if (usersLogout) {
      navigate("/");
      sessionStorage.clear();
    }
  };

  return (
    <button className="LogoutBtn" type="submit" onClick={btnLogout}>
      Logout
    </button>
  );
};

export default LogOut;
