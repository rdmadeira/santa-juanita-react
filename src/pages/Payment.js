import React from 'react';
import PaymentSection from '../components/Payment/PaymentSection.jsx';
import useForm from '../hooks/useForm';

const Payment = () => {
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

  return <PaymentSection></PaymentSection>;
};

export default Payment;
