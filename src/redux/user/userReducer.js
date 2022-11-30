import { checkUser } from '../../utils/formVerifyUser';

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        user: checkUser(action.payload),
      };

    default:
      return state;
  }
};
