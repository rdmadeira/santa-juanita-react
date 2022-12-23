// import { createNewUser } from '../../utils/form_utils/userUtils';

const INITIAL_STATE = null;

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case 'LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};
