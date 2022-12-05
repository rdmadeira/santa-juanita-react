import { v4 as uuidv4 } from 'uuid';

export const createNewUser = (newUserInputs) => {
  let newUser = {};
  newUser.id = uuidv4();
  newUser.name = newUserInputs.name.value;
  newUser.lastname = newUserInputs.lastname.value;
  newUser.email = newUserInputs.email.value;
  newUser.password = newUserInputs.password.value;
  newUser.myCart = [];

  return newUser;
};

export const setNewUser = (inputs, users) => {
  let newUser = createNewUser(inputs);

  return [...users, newUser];
};
