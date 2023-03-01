import React, { useContext } from "react";
import {
  GeneralButton,
  Container,
  FormContainer,
} from "../styledComponents/StyledComponents";
import { UserListContext } from "../../store/context/useUserContext";
import { Formik } from "formik";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { users } = useContext(UserListContext);
  const navigate = useContext(Navigate);

  return (
    <Container>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "please enter a username";
          }
          if (!values.password) {
            errors.password = "please enter a password";
          } else if (
            /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
          ) {
            errors.username = "undefined symbol  ";
          }
          return errors;
        }}
      ></Formik>
    </Container>
  );
};

export default Login;
