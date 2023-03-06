export const getUserFromSession = (users, loginUser) => {
  return users.find((user) => user.id === loginUser);
};

export function getUserLoginInfo() {
  return JSON.parse(sessionStorage.getItem("userInfo"));
}
export const loginValidate = (values, users) => {
  const errors = {};
  const checkUser = users.find(
    ({ name, password }) =>
      values.username === name && values.password === password
  );

  if (!values.username) {
    errors.username = "User name cannot be left blank";
  }
  if (!values.password) {
    errors.password = "Password cannot be left blank";
  }

  if (!checkUser) {
    errors.checkUser = "User name or password is incorrect.";
  }
  return errors;
};
