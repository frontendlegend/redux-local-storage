export const logIn = () => ({
  type: "LOG_IN"
});

export const logOut = () => ({
  type: "LOG_OUT"
});

export const formCollect = (email) => ({
  type: "COLLECT_FORM",
  email: email
});