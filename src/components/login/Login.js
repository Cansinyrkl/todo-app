import React, { useContext } from "react";
import { GeneralButton } from "../styledComponents/StyledComponents";
import { UserListContext } from "../../store/context/useUserContext";

const Login = () => {
  const { users } = useContext(UserListContext);

  return (
    <>
      <div>
        <GeneralButton>asdasd</GeneralButton>
      </div>
    </>
  );
};

export default Login;
