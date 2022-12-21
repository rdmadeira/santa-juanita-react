// import { createNewUser } from '../../utils/form_utils/userUtils';

const INITIAL_STATE = {};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;

    default:
      return state;
  }
};
