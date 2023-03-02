import React, { useContext } from "react";
import { UserListContext } from "../../store/context/useUserContext";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import "../.././App.css";
import { loginValidate } from "../../utils/helpers";

const Login = () => {
  const { users } = useContext(UserListContext);
  const navigate = useNavigate();

  const initialValues = { username: "", password: "" };

  const onSubmit = (values) => {
    const checkUser = users.find(
      ({ name, password }) =>
        values.username === name && values.password === password
    );
    if (checkUser) {
      navigate("/todo");
      sessionStorage.setItem("userInfo", JSON.stringify(checkUser.id));
    }
  };

  return (
    <div class="flex-container">
      <div class="form-container">
        <Formik
          initialValues={initialValues}
          validate={(values) => loginValidate(values, users)}
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
              <button type="submit" class="submit-btn">
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
