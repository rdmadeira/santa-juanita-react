import React from 'react';
import { Link } from 'react-router-dom';
/* import styled, { css } from 'styled-components'; */
import { Button } from '@chakra-ui/react';

/* const StyledButton = styled.button`
  padding: 1.5vw;
  background: var(--thistle);
  font-family: system-ui, serif;
  font-weight: 400;
  border-radius: 10px;
  color: var(--twilight-lavender);
  cursor: pointer;
  border: none;
  box-shadow: -1px -1px 10px #f3e8eefa, 3px 3px 10px #88446a7a;
  transition: all 0.2s ease-in;
  font-size: var(--step--1);
  &:hover {
    background: #e7cddc;
    box-shadow: inset 0px -5px 25px var(--pink-lavender),
      inset 0px -1px 25px var(--pink-lavender);
    transition: all 0.2s ease-in;
  }
  ${({ ismobile }) =>
    ismobile &&
    css`
      font-size: var(--step-1);
      padding: 10px;
    `}
`; */

const SectionButton = ({ href }) => {
  return (
    <Link to={href} style={{ width: 'max-content' }}>
      <Button
        variant="outline"
        borderColor="#d2a8beab"
        /* size="lg" */
      >
        Sepa Más
      </Button>
    </Link>
  );
};

export default SectionButton;
