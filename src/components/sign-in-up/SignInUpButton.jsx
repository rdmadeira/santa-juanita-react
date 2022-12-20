import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 1.2vw;
  background-color: var(--twilight-lavender);
  color: var(--snow);
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background: #88446a21;
    `}
`;

const SignInUpButton = ({ isLogin, disabled }) => {
  return (
    <Button disabled={disabled}>
      {isLogin === true
        ? 'LOG IN'
        : isLogin === false
        ? 'SIGN UP'
        : 'SIGUIENTE'}
    </Button>
  );
};

export default SignInUpButton;
