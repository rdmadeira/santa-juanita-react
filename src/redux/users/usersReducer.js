import { setNewUser } from '../../utils/form_utils/userUtils';
import { USER_IN_USERS, GET_USERS } from './usersActions';
const INITIAL_STATE = [];

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_IN_USERS:
      return setNewUser(action.payload.inputs, action.payload.users);
    case GET_USERS:
      return [...action.payload];
    default:
      return state;
  }
};
