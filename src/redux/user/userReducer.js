const INITIAL_USER = {};

export const userReducer = (state = INITIAL_USER, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        user: action.payload,
      };

    default:
      break;
  }
};
