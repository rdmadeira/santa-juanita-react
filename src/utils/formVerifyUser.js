export const checkUser = ({ username, password }, users) => {
  const userLogin = users.filter(
    (item) =>
      item.username === username && password && item.password === password
  );
  userLogin ? userLogin : createUser(username, users);
};

const createUser = (username, users) => {};
