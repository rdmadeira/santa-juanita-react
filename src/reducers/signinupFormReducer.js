export const signinupFormReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_ON_CHANGE':
      return {
        ...state,
        inputs: action.inputs,
      };
    case 'CHECK_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
