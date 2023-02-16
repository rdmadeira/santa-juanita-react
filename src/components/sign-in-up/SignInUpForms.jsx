import React, { useRef /* , useEffect */ } from 'react';

import SignInUpInput from './SignInUpInput.jsx';
import SignInUpButton from './SignInUpButton.jsx';

import {
  VALIDATOR_TYPE_REQUIRE,
  VALIDATE_EMAIL,
  VALIDATE_MIN_LENGTH,
} from '../../utils/form_utils/validateInputs';
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

export const CheckUserForm = ({
  inputHandle,
  isLogin,
  formState,
  className,
  onSubmit,
  authWithEmailHandle,
}) => {
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
      <SignInUpButton
        isLogin={isLogin}
        disabled={!formState.isValid}
        text="SIGUIENTE"
      />
      <SignInUpButton
        onClick={authWithEmailHandle}
        text="Entre con su email"
        type="button"
      />
    </Form>
  );
};

export const LoginForm = ({
  formState,
  emailInput,
  inputHandle,
  className,
  onSubmit,
  isValidPassword,
  setIsValidPassword,
}) => {
  // const user = useSelector((store) => store.user);
  /*  const dispatch = useDispatch();

  const goToUserPage = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_USER',
      payload: {
        inputs: formState.inputs,
      },
    });
  }; */
  return (
    <>
      <Form className={className} onSubmit={onSubmit}>
        <SignInUpInput
          name="email"
          type="email"
          id="email"
          validators={[VALIDATE_EMAIL()]}
          ref={emailInput}
          onInput={inputHandle}
          value={formState.inputs.email.value}
          isValid={true}
          readonly="readonly"
        />
        <SignInUpInput
          name="password"
          type="password"
          id="password"
          validators={[VALIDATE_MIN_LENGTH(8), VALIDATOR_TYPE_REQUIRE()]}
          onInput={inputHandle}
          isValidPassword={isValidPassword}
          setIsValidPassword={setIsValidPassword}
          errorText={
            isValidPassword === false
              ? 'Contraseña incorrecta'
              : 'Ingrese mínimo 8 caracteres'
          } // Encontrar un estado para error de password
        />

        <SignInUpButton text="ENTRAR" disabled={!formState.isValid} />
      </Form>
    </>
  );
};

export const SignUpForm = ({
  formState,
  emailInput,
  inputHandle,
  className,
  onSubmit,
}) => {
  return (
    <>
      <Form className={className} onSubmit={onSubmit}>
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
          value={formState.inputs.email.value}
          isValid={formState.inputs.email.isValid}
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

        <SignInUpButton text="REGISTRESE" disabled={!formState.isValid} />
      </Form>
    </>
  );
};
