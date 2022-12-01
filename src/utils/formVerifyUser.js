export const checkUser = (email, users) => {
  const userLogin = users.find((item) => item.email === email);
  return userLogin ? userLogin : null;
};
