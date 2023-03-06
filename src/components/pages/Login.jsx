import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginValidate } from "../../utils/helpers/orhers";
import { useUserList } from "../../hooks/useUserList";
import "../.././App.css";

const Login = () => {
  const { userList } = useUserList();
  const navigate = useNavigate();

  const initialValues = { username: "", password: "" };

  const onSubmit = (values) => {
    const checkUser = userList.find(
      ({ name, password }) =>
        values.username === name && values.password === password
    );
    if (checkUser) {
      navigate("/todo");
      sessionStorage.setItem("userInfo", JSON.stringify(checkUser.id));
    }
  };

  return (
    <div className="flex-container">
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validate={(values) => loginValidate(values, userList)}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} className="LoginContainer">
              <h2>User Name</h2>
              <div className="input-group">
                <input
                  className="username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <div className="error-style">
                  {errors.username && touched.username && errors.username}
                </div>
              </div>
              <h2>Password</h2>
              <div className="input-group">
                <input
                  className="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <div className="error-style">
                  {errors.password && touched.password && errors.password}
                </div>
              </div>
              <div className="input-group">
                <div className="error-style">
                  {errors.checkUser && errors.checkUser}
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
