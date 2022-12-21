import React, { useReducer, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { inputChangeReducer } from './reducers/inputChangeReducer';
import { validateInputs } from '../../utils/form_utils/validateInputs';

import './SignInUp.css';

const Input = styled.input`
  height: 2.5rem;
  padding: 1vw;
  ${({ state }) =>
    !state.isValid &&
    state.onBlur &&
    css`
      background-color: #fac5c5;
    `}
`;

const Label = styled.label`
  transform: translateY(25px) scale(0.8);
  background: var(--snow);
  padding: 0 8px;
  width: fit-content;
  ${({ state }) =>
    !state.isValid &&
    state.onBlur &&
    css`
      color: red;
    `}
`;

const SignInUpInput = ({
  name,
  type,
  id,
  validators,
  onInput,
  readonly,
  value,
  isValid,
  isValidPassword,
  setIsValidPassword,
  errorText,
}) => {
  const initialState = {
    value: value || '',
    isValid: isValid || false,
    onBlur: false,
  };
  const [state, dispatch] = useReducer(inputChangeReducer, initialState);
  useEffect(() => {
    onInput(id, state.value, state.isValid);
  }, [state.value, state.isValid]);

  useEffect(() => {
    isValidPassword === false && dispatch({ type: 'RESET_PASSWORD' });
  }, [isValidPassword]);

  const changeHandler = (e) => {
    setIsValidPassword && setIsValidPassword(null);
    dispatch({
      type: 'INPUT_CHANGE',
      value: e.target.value,
      isValid: validateInputs(validators, e.target.value),
    });
  };

  return (
    <>
      <Label htmlFor={id} state={state}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Label>
      <Input
        name={name}
        id={id}
        type={type}
        onChange={changeHandler}
        validators={validators}
        value={value || state.value}
        onBlur={() =>
          dispatch({
            type: 'ONBLUR',
            isValid: validateInputs(validators, state.value),
          })
        }
        state={state}
        readOnly={readonly}
      />
      {((!state.isValid && state.onBlur) || isValidPassword === false) && (
        <span>{errorText}</span>
      )}
    </>
  );
};

export default SignInUpInput;
