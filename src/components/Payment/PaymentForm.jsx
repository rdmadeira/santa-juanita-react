import React from 'react';
import styled from 'styled-components';
import SignInUpInput from '../sign-in-up/SignInUpInput.jsx';
import {
  VALIDATOR_TYPE_REQUIRE,
  VALIDATE_CREDIT_CARD,
} from '../../utils/form_utils/validateInputs';
import useForm from '../../hooks/useForm';

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const PaymentForm = () => {
  const initialInputs = {
    cardNumber: {
      value: '',
      isValid: false,
    },
    expiryDate: {
      value: '',
      isValid: false,
    },
    cardName: {
      value: '',
      isValid: false,
    },
  };
  const [formState, inputHandle, setFormData] = useForm(initialInputs, false);
  return (
    <StyledForm>
      <h2>Agregue Medio de Pago</h2>
      <SignInUpInput
        type="text"
        id="creditCardNumber"
        validators={[VALIDATOR_TYPE_REQUIRE()]}
        name="cardName"
        onInput={inputHandle}
        errorText="Insert a Valid Credit Card Number"
      />
      <SignInUpInput
        type="text"
        id="creditCardNumber"
        validators={[VALIDATOR_TYPE_REQUIRE(), VALIDATE_CREDIT_CARD()]}
        name="cardName"
        onInput={inputHandle}
        errorText="Insert a Valid Credit Card Number"
      />
    </StyledForm>
  );
};
