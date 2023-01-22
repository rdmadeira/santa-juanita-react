import React from 'react';
import styled from 'styled-components';
import { PaymentForm } from './PaymentForm.jsx';

const PaymentConteiner = styled.section`
  background: white;
  height: 80vh;
  width: 100%;
  display: flex;
  padding: 3vw 5vw;
`;

const PaymentSection = () => {
  return (
    <PaymentConteiner>
      <PaymentForm />
    </PaymentConteiner>
  );
};

export default PaymentSection;
