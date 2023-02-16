export const USER_IN_USERS = 'USER_IN_USERS';
export const GET_USERS = 'GET_USERS';

export const sendUsersToStore = (usersData) => ({
  type: GET_USERS,
  payload: usersData,
});
