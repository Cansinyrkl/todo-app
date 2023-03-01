export const getUserFromSession = (users, loginUser) => {
  return users.find((user) => user.id === loginUser);
};
