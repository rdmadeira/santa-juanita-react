export const checkUser = ({ username, password }, users) => {
  const userLogin = users.find(
    (item) =>
      item.username === username && password && item.password === password
  );
  userLogin ? userLogin : null;
};
