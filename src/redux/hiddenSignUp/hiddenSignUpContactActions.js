export const SET_HIDDEN_OR_SHOW = 'SET_HIDDEN_OR_SHOW';

export const hiddenSignUpAction = (boolean) => {
  return {
    type: SET_HIDDEN_OR_SHOW,
    payload: boolean,
  };
};
