import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { inputChangeReducer } from '../../reducers/inputChangeReducer';
import { validateInputs } from '../../utils/validateInputs';

import './SignInUp.css';

const Input = styled.input`
  height: 2.5rem;
  padding: 1vw;
`;

const Label = styled.label`
  transform: translateY(25px) scale(0.8);
  background: var(--snow);
  padding: 0 8px;
  width: fit-content;
`;

const SignInUpInput = ({
  name,
  type,
  id,
  validators,
  onInput,
  readonly,
  value,
}) => {
  const initialState = {
    value: value || '',
    isValid: null,
    onBlur: false,
  };
  const [state, dispatch] = useReducer(inputChangeReducer, initialState);
  useEffect(() => {
    onInput(id, state.value, state.isValid, state.onBlur);
  }, [state.value, state.isValid]);

  const changeHandler = (e) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: e.target.value,
      isValid: validateInputs(validators, e.target.value),
    });
  };

  return (
    <>
      <Label htmlFor={id}>{name.charAt(0).toUpperCase() + name.slice(1)}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        onChange={changeHandler}
        validators={validators}
        className={!state.isValid && state.onBlur ? 'invalid' : ''}
        value={value}
        onBlur={() =>
          dispatch({
            type: 'ONBLUR',
            isValid: validateInputs(validators, state.value),
          })
        }
        readOnly={readonly}
      />
      {!state.isValid && state.onBlur && <span>{`Invalid ${name}!`}</span>}
    </>
  );
};

export default SignInUpInput;
