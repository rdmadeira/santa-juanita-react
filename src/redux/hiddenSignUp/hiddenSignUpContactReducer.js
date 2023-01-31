import { SET_HIDDEN_OR_SHOW } from './hiddenSignUpContactActions';

const INITIAL_STATE = { signInUpHidden: null };

export const hiddenSignUpContactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_HIDDEN_OR_SHOW:
      return { ...state, signInUpHidden: action.payload };

    default:
      return state;
  }
};
