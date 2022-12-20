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
        errorText="Ingrese un email válido"
      />
      <SignInUpButton isLogin={state.isLogin} disabled={!state.isValid} />
    </Form>
  );
};

export const LoginForm = ({ state, emailInput, inputHandle, className }) => {
  // const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const goToUserPage = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_USER',
      payload: {
        inputs: state.inputs,
      },
    });
  };
  return (
    <>
      <Form className={className} onSubmit={goToUserPage}>
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
        {state.isLogin === true && (
          <SignInUpInput
            name="password"
            type="password"
            id="password"
            validators={[VALIDATE_MIN_LENGTH(8), VALIDATOR_TYPE_REQUIRE()]}
            onInput={inputHandle}
            errorText="Ingrese mínimo 8 caracteres"
          />
        )}
        <SignInUpButton isLogin={state.isLogin} disabled={!state.isValid} />
      </Form>
    </>
  );
};

export const SignUpForm = ({
  state,
  emailInput,
  inputHandle,
  className,
  setIsLogin,
}) => {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const submitNewUser = (e) => {
    e.preventDefault();
    dispatch({
      type: 'USER_IN_USERS',
      payload: {
        inputs: state.inputs,
        users: users,
      },
    });
    setIsLogin();
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
          errorText="Campo obligatório"
        />
        <SignInUpInput
          name="lastname"
          type="text"
          id="lastname"
          validators={[VALIDATOR_TYPE_REQUIRE()]}
          onInput={inputHandle}
          errorText="Campo obligatório"
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
          validators={[VALIDATE_MIN_LENGTH(8), VALIDATOR_TYPE_REQUIRE()]}
          onInput={inputHandle}
          errorText="Ingrese mínimo 8 caracteres"
        />

        <SignInUpButton isLogin={state.isLogin} disabled={!state.isValid} />
      </Form>
    </>
  );
};
