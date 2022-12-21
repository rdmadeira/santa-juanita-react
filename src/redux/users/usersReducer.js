import { setNewUser } from '../../utils/form_utils/userUtils';
const INITIAL_STATE = [];

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_IN_USERS':
      return setNewUser(action.payload.inputs, action.payload.users);

    default:
      return state;
  }
};
