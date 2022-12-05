import { createNewUser } from '../../utils/userUtils';

const INITIAL_STATE = {};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return createNewUser(action.payload.inputs);

    default:
      return state;
  }
};
