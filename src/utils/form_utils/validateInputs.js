const VALID_EMAIL = 'VALID_EMAIL';
const VALIDATOR_REQUIRE = 'REQUIRE';
const VALID_MIN_LENGTH = 'VALID_MIN_LENGTH';
const VALID_CREDIT_CARD = 'VALID_CREDIT_CARD';

import { validateCardNumber } from '../../utils/payment_utils.js/paymentUtils';

export const VALIDATE_EMAIL = () => ({ type: VALID_EMAIL });
export const VALIDATOR_TYPE_REQUIRE = () => ({ type: VALIDATOR_REQUIRE });

export const VALIDATE_MIN_LENGTH = (num) => ({
  type: VALID_MIN_LENGTH,
  num: num,
});

export const VALIDATE_CREDIT_CARD = () => ({
  type: VALID_CREDIT_CARD,
});

export const validateInputs = (validators = [], value) => {
  let isValid = true;
  validators.forEach((validator) => {
    if (validator.type === VALID_CREDIT_CARD) {
      isValid = isValid && validateCardNumber(value);
    }
    if (validator.type === VALID_EMAIL) {
      isValid =
        isValid && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }
    if (validator.type === VALIDATOR_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALID_MIN_LENGTH) {
      isValid = isValid && value.trim().length >= validator.num;
    }
  });
  return isValid;
};
