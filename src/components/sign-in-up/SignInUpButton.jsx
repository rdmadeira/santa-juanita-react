import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 1.2vw;
  background-color: var(--twilight-lavender);
  color: var(--snow);
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

const SignInUpButton = ({ isLogin }) => {
  return (
    <Button>
      {isLogin === true
        ? 'LOG IN'
        : isLogin === false
        ? 'SIGN UP'
        : 'SIGUIENTE'}
    </Button>
  );
};

export default SignInUpButton;
