export const inputChangeReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };

    default:
      return state;
  }
};
