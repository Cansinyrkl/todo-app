import React, { useContext } from "react";
import { UserListContext } from "../../store/context/useUserContext";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const LogOut = ({ disabled }) => {
  const { users } = useContext(UserListContext);
  const navigate = useNavigate();

  const btnLogout = () => {
    const usersLogout = users.find((user) => user.name && user.password);
    if (usersLogout) {
      navigate("/");
      sessionStorage.clear();
    }
  };

  return (
    <button
      className="logout-btn"
      type="submit"
      onClick={btnLogout}
      disabled={disabled}
    >
      Logout
    </button>
  );
};

export default LogOut;
