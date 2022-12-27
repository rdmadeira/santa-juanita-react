const INITIAL_STATE = null;

export const hiddenSignUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_HIDDEN_OR_SHOW':
      return action.payload;

    default:
      return state;
  }
};
