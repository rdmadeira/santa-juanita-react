import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import SignInUpInput from '../components/signinup/SignInUpInput.jsx';
import SignInUpButton from '../components/signinup/SignInUpButton.jsx';
import { VALIDATE_EMAIL } from '../utils/validateInputs';
import {
  GoogleSvg,
  FacebookSvg,
  AppleSvg,
} from '../components/redes_logos/LogosSvg';

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
  margin-bottom: 40px;
`;

const GFADivStyled = styled(FormContainer)`
  row-gap: 3.5vw;
  padding-top: 2.5vw;
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

const SpanStyled = styled.span`
  position: relative;
  top: 0px;
  left: 0px;
  padding: 2px 7px 7px;
  border-radius: 5%;
  border: solid 1px var(--twilight-lavender);
  color: var(--twilight-lavender);
  font-size: max(min(2.5vw, 21px), 17px);
  width: 25%;
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

  const closeHandle = () => {
    location.href = '/';
  };

  return (
    <SignInUpContainer className="bounce-in-top">
      <CloseButton onClick={closeHandle}>x</CloseButton>
      <FormContainer>
        <FormSignInUp users={users}>
          <SpanStyled>Back</SpanStyled>
          <h3>INGRESÁ O CREÁ SU CUENTA</h3>
          <SignInUpInput
            name="email"
            type="email"
            id="email"
            validators={[VALIDATE_EMAIL()]}
          />
          <SignInUpButton />
        </FormSignInUp>
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
