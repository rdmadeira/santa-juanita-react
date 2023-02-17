export const checkUser = (email, users) => {
  const userLogin = users.find(
    (item) => item.email === email && item.method.includes('password')
  );
  return userLogin ? userLogin : null;
};

// No se usa más con el hook useForm:
/* export const checkFormisValid = (obj) => {
  const objArray = Object.values(obj);
  let formValid = true;

  objArray.map((value) => {
    formValid = formValid && value.isValid;
  });

  return formValid;
};
 */
