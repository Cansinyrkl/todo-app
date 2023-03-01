export function getSession() {
  return JSON.parse(sessionStorage.getItem("userInfo"));
}
