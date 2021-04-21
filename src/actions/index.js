export const logIn = () => ({
  type: "LOG_IN"
});

export const logOut = () => ({
  type: "LOG_OUT"
});

export const formCollect = ({name, surname, city, phone, email}) => ({
  type: "COLLECT_FORM",
  name: name,
  surname: surname,
  city: city,
  phone: phone,
  email: email
});