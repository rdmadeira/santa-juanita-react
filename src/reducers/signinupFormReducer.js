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
    case 'FORM_VALIDATE':
      return {
        ...state,
        isValid: action.isValid,
      };
    case 'SUBMIT_CHECK_EMAIL':
      return {
        ...state,
        isLogin: action.isLogin,
        inputs: action.inputs,
      };
    case 'RETURN_CHECK_EMAIL':
      return action.state;

    default:
      return state;
  }
};
