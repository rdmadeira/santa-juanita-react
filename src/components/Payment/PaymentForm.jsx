import React from 'react';
import styled from 'styled-components';
import SignInUpInput from '../sign-in-up/SignInUpInput.jsx';
import {
  VALIDATOR_TYPE_REQUIRE,
  VALIDATE_LENGTH,
} from '../../utils/form_utils/validateInputs';

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const PaymentForm = () => {
  return (
    <StyledForm>
      <h2>Agregue Medio de Pago</h2>
      <SignInUpInput
        type="text"
        validators={[VALIDATOR_TYPE_REQUIRE()]}
        name="cardName"
      />
    </StyledForm>
  );
};
