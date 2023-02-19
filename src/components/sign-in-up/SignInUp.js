import React, {
  useState,
  useEffect /* , useReducer, useCallback, useEffect */,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import SignInUpInput from '../signinup/SignInUpInput.jsx';
import useForm from '../../hooks/useForm.js';
import { SignUpForm, LoginForm, CheckUserForm } from './SignInUpForms.jsx';
/* import {
  validateInputs,
  VALIDATOR_TYPE_REQUIRE,
  VALIDATE_MIN_LENGTH,
} from '../../utils/validateInputs'; */
import { GoogleSvg, FacebookSvg, EmailSvg } from '../redes_logos/LogosSvg';
import { useSelector, useDispatch } from 'react-redux';
// import { signinupFormReducer } from '../../reducers/signinupFormReducer';
import { checkUser } from '../../utils/form_utils/formVerifyUser.js';
import {
  signUpWithEmail,
  SignInWithGoogle,
  createNewUserWithEmailandPassword,
  LoginWithEmailAndPassword,
  checkUserEmailAccounts,
} from '../../firebase/firebase_auth/auth_utils';
import { hiddenSignUpAction } from '../../redux/hiddenSignUp/hiddenSignUpContactActions';

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
  cursor: pointer;
`;

const SignInUp = ({ signInUpHidden }) => {
  const users = useSelector((store) => store.users);
  // const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);
  const [isEmailLinkUser, setIsEmailLinkUser] = useState(false);

  /* const initialState = {
    isLogin: null,
    user: null, //prueba!!
  
  }; */
  const initialInputs = {
    email: { value: '', isValid: false, onblur: false },
  };

  const [formState, inputHandle, setFormData] = useForm(initialInputs, false);
  /*   console.log(formState);
   */ // const [state, dispatch] = useReducer(signinupFormReducer, initialState);

  useEffect(() => {
    dispatch(hiddenSignUpAction(null));
  }, []);

  useEffect(() => {
    if (isEmailLinkUser) {
      setFormData(
        {
          email: {
            value: formState.inputs.email.value,
            isValid: true,
            onBlur: true,
          },
        },
        true
      );
    }
  }, [isEmailLinkUser]);

  const authWithEmailHandle = (e) => {
    e.preventDefault();
    const email = formState.inputs.email.value;

    signUpWithEmail(email);
  };

  const submitCheckEmailHandler = async (e) => {
    e.preventDefault();
    let checkedUser = checkUser(formState.inputs.email.value, users);
    checkUserEmailAccounts(formState.inputs, setIsEmailLinkUser);
    // console.log(checkedUser);

    if (checkedUser === null) {
      setIsLogin(false);
      setFormData(
        {
          ...formState.inputs,

          name: {
            value: '',
            isValid: false,
            onBlur: false,
          },
          lastname: {
            value: '',
            isValid: false,
            onBlur: false,
          },
          password: {
            value: '',
            isValid: false,
            onBlur: false,
          },
        },
        false
      );
      return;
    }
    if (checkedUser && !isEmailLinkUser) {
      setIsLogin(true);
      setFormData(
        {
          ...formState.inputs,
          password: {
            value: '',
            isValid: false,
            onBlur: false,
          },
        },
        false
      );
      return;
    }
  };

  const loginHandle = (e) => {
    e.preventDefault();
    !isEmailLinkUser
      ? LoginWithEmailAndPassword(formState.inputs, setIsEmailLinkUser)
      : signUpWithEmail(formState.inputs.email.value);
    navigate(`/productos`);
    /* dispatch(hiddenSignUpAction(null)); */

    /* setIsValidPassword(false); */
  };

  const closeHandle = () => {
    dispatch(hiddenSignUpAction(false));
    setTimeout(() => {
      setIsLogin(null);
      setFormData(initialInputs, false);
    }, 2000);
  };

  const signUpWithGoogleHandle = () => {
    SignInWithGoogle();
  };

  const submitNewUser = (e) => {
    e.preventDefault();
    createNewUserWithEmailandPassword(formState.inputs);
    setIsLogin(true);
    navigate('/productos');
  };

  return (
    <SignInUpContainer
      className={
        signInUpHidden === false
          ? 'slide-out-top'
          : signInUpHidden === true
          ? 'bounce-in-top'
          : ''
      }>
      <CloseButton onClick={closeHandle}>x</CloseButton>
      <FormContainer>
        {isLogin !== null && (
          <SpanStyled
            onClick={() => {
              setFormData(initialInputs, false);
              setIsLogin(null);
            }}
            className="fade-in-right">
            Back
          </SpanStyled>
        )}
        <h3>
          {isLogin === null
            ? 'INGRESÁ O CREÁ SU CUENTA'
            : isLogin
            ? 'INGRESÁ'
            : 'CREÁ SU CUENTA'}
        </h3>
        {isLogin === null && (
          <CheckUserForm
            inputHandle={inputHandle}
            setFormData={setFormData}
            isLogin={isLogin}
            formState={formState}
            authWithEmailHandle={authWithEmailHandle}
            onSubmit={submitCheckEmailHandler}
          />
        )}
        {isLogin === false && (
          <SignUpForm
            inputHandle={inputHandle}
            className={isLogin === false ? 'fade-in-right' : ''}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            formState={formState}
            onSubmit={submitNewUser}
          />
        )}
        {isLogin === true && (
          <LoginForm
            inputHandle={inputHandle}
            formState={formState}
            onSubmit={loginHandle}
            isValidPassword={isValidPassword}
            setIsValidPassword={setIsValidPassword}
            isEmailLinkUser={isEmailLinkUser}
          />
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
        <RedesButtonsStyled onClick={signUpWithGoogleHandle}>
          <GoogleSvg />
          Continue with Google
        </RedesButtonsStyled>
        <RedesButtonsStyled>
          <Link to="/">
            <FacebookSvg />
            Continue con Facebook
          </Link>
        </RedesButtonsStyled>
        <RedesButtonsStyled>
          <EmailSvg onClick={authWithEmailHandle} />
          Ingrese con su Email
        </RedesButtonsStyled>
      </GFADivStyled>
    </SignInUpContainer>
  );
};

export default SignInUp;
