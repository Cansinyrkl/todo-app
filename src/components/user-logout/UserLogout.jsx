import React, { useContext } from "react";
import { UserListContext } from "../../store/context/UserListContext";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const UserLogout = ({ disabled }) => {
  const { users } = useContext(UserListContext);
  const navigate = useNavigate();

  const btnLogout = () => {
    const loggedUserValidation = users.find(
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
