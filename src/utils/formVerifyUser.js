export const checkUser = (email, users) => {
  const userLogin = users.find((item) => item.email === email);
  return userLogin ? userLogin : null;
};

export const checkFormisValid = (obj) => {
  const objArray = Object.values(obj);
  let formValid = true;

  objArray.map((value) => {
    formValid = formValid && value.isValid;
  });

  return formValid;
};
