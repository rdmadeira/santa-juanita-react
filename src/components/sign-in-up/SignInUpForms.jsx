import React, { useRef /* , useEffect */ } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignInUpInput from './SignInUpInput.jsx';
import SignInUpButton from './SignInUpButton.jsx';

import {
  VALIDATOR_TYPE_REQUIRE,
  VALIDATE_EMAIL,
  VALIDATE_MIN_LENGTH,
} from '../../utils/validateInputs';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  width: 50%;
  row-gap: 15px;
  text-align: center;
  transition: all 0.5s ease;
`;

export const CheckUserForm = ({ inputHandle, state, className, onSubmit }) => {
  const emailInput = useRef();

  return (
    <Form className={className} onSubmit={onSubmit}>
      <SignInUpInput
        name="email"
        type="email"
        id="email"
        validators={[VALIDATE_EMAIL()]}
        ref={emailInput}
        onInput={inputHandle}
      />
      <SignInUpButton isLogin={state.isLogin} />
    </Form>
  );
};

export const LoginForm = ({ state, emailInput, inputHandle, className }) => {
  return (
    <>
      <Form className={className}>
        <SignInUpInput
          name="email"
          type="email"
          id="email"
          validators={[VALIDATE_EMAIL()]}
          ref={emailInput}
          onInput={inputHandle}
          value={state.inputs.email.value}
          readonly="readonly"
        />
        {state.isLogin === true ||
          (state.isLogin === false && (
            <SignInUpInput
              name="password"
              type="password"
              id="password"
              validators={[VALIDATE_MIN_LENGTH(6), VALIDATOR_TYPE_REQUIRE()]}
              onInput={inputHandle}
            />
          ))}
        <SignInUpButton isLogin={state.isLogin} />
      </Form>
    </>
  );
};

export const SignUpForm = ({ state, emailInput, inputHandle, className }) => {
  const users = useSelector((store) => store.users);
  /*const user = useSelector((store) => store.user); */
  const dispatch = useDispatch();

  const submitNewUser = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_USER',
      payload: {
        inputs: state.inputs,
      },
    });
    dispatch({
      type: 'USER_IN_USERS',
      payload: {
        inputs: state.inputs,
        users: users,
      },
    });
  };

  return (
    <>
      <Form className={className} onSubmit={submitNewUser}>
        <SignInUpInput
          name="name"
          type="text"
          id="name"
          validators={[VALIDATOR_TYPE_REQUIRE()]}
          onInput={inputHandle}
        />
        <SignInUpInput
          name="lastname"
          type="text"
          id="lastname"
          validators={[VALIDATOR_TYPE_REQUIRE()]}
          onInput={inputHandle}
        />
        <SignInUpInput
          name="email"
          type="email"
          id="email"
          validators={[VALIDATE_EMAIL()]}
          ref={emailInput}
          onInput={inputHandle}
          value={state.inputs.email.value}
          readonly="readonly"
        />
        <SignInUpInput
          name="password"
          type="password"
          id="password"
          validators={[VALIDATE_MIN_LENGTH(6), VALIDATOR_TYPE_REQUIRE()]}
          onInput={inputHandle}
        />

        <SignInUpButton isLogin={state.isLogin} />
      </Form>
    </>
  );
};
