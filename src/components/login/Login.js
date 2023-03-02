import React, { useContext } from "react";
import { UserListContext } from "../../store/context/useUserContext";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { users } = useContext(UserListContext);
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "username boş bırakılamaz";
          }
          if (!values.password) {
            errors.password = "password boş bırakılamaz";
          } else if (
            /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
          ) {
            errors.username = "geçersiz username ";
          }
          return errors;
        }}
        onSubmit={(values) => {
          const checkUser = users.find(
            ({ name, password }) =>
              values.username === name && values.password === password
          );
          if (checkUser) {
            navigate("/todo");
            sessionStorage.setItem("userInfo", JSON.stringify(checkUser.id));
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <h1>UserName</h1>
              <input
                className="username"
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && errors.username}
              <h1>Password</h1>
              <input
                className="password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
