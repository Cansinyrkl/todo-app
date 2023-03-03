import React from "react";
import { useUserList } from "../../hooks/useUserList";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const UserLogout = ({ disabled }) => {
  const { userList } = useUserList();
  const navigate = useNavigate();

  const btnLogout = () => {
    const loggedUserValidation = userList.find(
      (user) => user.name && user.password
    );
    if (loggedUserValidation) {
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

export default UserLogout;
