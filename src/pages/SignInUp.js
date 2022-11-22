import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import SignInUpInput from '../components/signinup/SignInUpInput.jsx';
import SignInUpButton from '../components/signinup/SignInUpButton.jsx';
import { VALIDATE_EMAIL } from '../utils/validateInputs';

const SignInUpContainer = styled.section`
  width: 100vw;
  background-color: var(--snow);
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
`;

const FormSignInUp = styled.form`
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

const SignInUp = () => {
  const users = useLoaderData();
  /* const initialState = {
    formIsValid: false,
    inputs: {
      email: {
        value: '',
        isValid: false,
      },
    },
    user: null,
  }; */

  /* const changeHandler = (e) => {}; */

  return (
    <SignInUpContainer className="bounce-in-top">
      <FormContainer>
        <h3>INGRESÁ O CREÁ SU CUENTA</h3>
        <FormSignInUp users={users}>
          <SignInUpInput
            name="email"
            type="email"
            id="email"
            validators={[VALIDATE_EMAIL()]}
          />
          <SignInUpButton></SignInUpButton>
        </FormSignInUp>
      </FormContainer>
    </SignInUpContainer>
  );
};

export default SignInUp;
