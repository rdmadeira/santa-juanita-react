import React, { useReducer, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import SignInUpInput from '../signinup/SignInUpInput.jsx';

import { SignUpForm, LoginForm, CheckUserForm } from './SignInUpForms.jsx';
/* import {
  validateInputs,
  VALIDATOR_TYPE_REQUIRE,
  VALIDATE_MIN_LENGTH,
} from '../../utils/validateInputs'; */
import { GoogleSvg, FacebookSvg, AppleSvg } from '../redes_logos/LogosSvg';
import { useSelector } from 'react-redux';
import { signinupFormReducer } from '../../reducers/signinupFormReducer';
import { checkUser, checkFormisValid } from '../../utils/formVerifyUser.js';

const SignInUpContainer = styled.section`
  width: 100vw;
  position: absolute;
  display: none;
  z-index: 10;
  background-color: #faf7f9f0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3vw;
  row-gap: 2.5vw;
  @media screen and (min-width: 1080px) {
    width: 80%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1vw;
  width: 100%;
  color: var(--twilight-lavender);
  margin-bottom: 40px;
`;

const GFADivStyled = styled(FormContainer)`
  row-gap: 3.5vw;
  padding-top: 2.5vw;
`;

export const FormSignInUp = styled.form`
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

const SpanStyled = styled.span`
  position: relative;
  display: flex;
  top: 0px;
  left: 10%;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  padding: 2px 7px 2px;
  border-radius: 5%;
  border: solid 1px var(--twilight-lavender);
  color: var(--twilight-lavender);
  font-size: max(min(2.5vw, 21px), 17px);
  width: 10%;
  cursor: pointer;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid var(--thistle);
  border-radius: 25%;
  padding: 2px 15px 8px;
  font-size: 24px;
  color: var(--pink-lavender);
  cursor: pointer;
`;

const RedesButtonsStyled = styled.div`
  display: flex;
  column-gap: 0.5vw;
  justify-content: center;
  padding: 1.2vw;
  width: 70%;
  border: solid 2px var(--twilight-lavender);
  border-radius: 3px;
`;

const SignInUp = ({ hidden, setHidden }) => {
  const users = useSelector((store) => store.users);
  const initialState = {
    inputs: { email: { value: '', isValid: false, onblur: false } },
    isValid: false,
    isLogin: null,
    user: null, //prueba!!
  };
  const [state, dispatch] = useReducer(signinupFormReducer, initialState);
  useEffect(() => {
    dispatch({
      type: 'FORM_VALIDATE',
      isValid: checkFormisValid(state.inputs),
    });
  }, [state.inputs, state.isValid]);

  //const user = useSelector((store) => store.user);

  const submitCheckEmailHandle = (e) => {
    e.preventDefault();
    state.isValid &&
      state.user &&
      dispatch({
        type: 'SUBMIT_CHECK_EMAIL',
        isLogin: true,
        inputs: {
          ...state.inputs,
          password: {
            value: '',
            isValid: null,
          },
        },
      });
    state.isValid &&
      state.user === null &&
      dispatch({
        type: 'SUBMIT_CHECK_EMAIL',
        isLogin: false,
        inputs: {
          ...state.inputs,
          password: {
            value: '',
            isValid: null,
            onBlur: false,
          },
          name: {
            value: '',
            isValid: null,
            onBlur: false,
          },
          lastname: {
            value: '',
            isValid: null,
            onBlur: false,
          },
        },
      });
  };

  const inputHandle = useCallback(
    (id, value, isValid, onBlur) => {
      if (id === 'email') {
        dispatch({ type: 'CHECK_USER', user: checkUser(value, users) });
      }
      dispatch({
        type: 'INPUT_ON_CHANGE',
        inputs: {
          ...state.inputs,
          [id]: {
            value: value,
            isValid: isValid,
            onBlur: onBlur,
          },
        },
      });
    },
    [state.inputs]
  );

  const closeHandle = () => {
    setHidden(false);
  };

  return (
    <SignInUpContainer
      className={
        hidden === false
          ? 'slide-out-top'
          : hidden === true
          ? 'bounce-in-top'
          : ''
      }>
      <CloseButton onClick={closeHandle}>x</CloseButton>
      <FormContainer>
        {state.isLogin !== null && (
          <SpanStyled
            onClick={() => {
              return dispatch({
                type: 'RETURN_CHECK_EMAIL',
                initialState: initialState,
              });
            }}
            className="fade-in-right">
            Back
          </SpanStyled>
        )}
        <h3>
          {state.isLogin === null
            ? 'INGRESÁ O CREÁ SU CUENTA'
            : state.isLogin
            ? 'INGRESÁ'
            : 'CREÁ SU CUENTA'}
        </h3>
        {state.isLogin === null && (
          <CheckUserForm
            inputHandle={inputHandle}
            state={state}
            onSubmit={submitCheckEmailHandle}
          />
        )}
        {state.isLogin === false && (
          <SignUpForm
            inputHandle={inputHandle}
            state={state}
            className={state.isLogin === false ? 'fade-in-right' : ''}
          />
        )}
        {state.isLogin === true && (
          <LoginForm state={state} inputHandle={inputHandle} />
        )}
      </FormContainer>
      <FormContainer>
        <h4> __________ O __________ </h4>
      </FormContainer>

      <FormContainer>
        <p>
          Al seguir, estás de acuerdo con nuestro{' '}
          <Link to="/" style={{ color: '#542aff', fontWeight: '500' }}>
            {' '}
            Terminos de Servicio{' '}
          </Link>{' '}
          tenés conocimiento de la{' '}
          <Link to="/" style={{ color: '#542aff', fontWeight: '500' }}>
            {' '}
            Politica de Privacidad{' '}
          </Link>
          .
        </p>
      </FormContainer>

      <GFADivStyled>
        <RedesButtonsStyled>
          <Link to="/">
            <GoogleSvg />
            Continue with Google
          </Link>
        </RedesButtonsStyled>
        <RedesButtonsStyled>
          <Link to="/">
            <FacebookSvg />
            Continue with Facebook
          </Link>
        </RedesButtonsStyled>
        <RedesButtonsStyled>
          <Link href="/">
            <AppleSvg />
            Continue with Apple
          </Link>
        </RedesButtonsStyled>
      </GFADivStyled>
    </SignInUpContainer>
  );
};

export default SignInUp;
