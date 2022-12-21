export const inputChangeReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        onBlur: false,
      };
    case 'ONBLUR':
      return {
        ...state,
        onBlur: true,
        isValid: action.isValid,
      };
    case 'RESET_PASSWORD':
      return {
        ...state,
        value: '',
        isValid: false,
      };
    default:
      return state;
  }
};
