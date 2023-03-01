export const getUserFromSession = (users, loginUser) => {
  return users.find((user) => user.id === loginUser);
};
export function getSession() {
  return JSON.parse(sessionStorage.getItem("userInfo"));
}
