const VALID_EMAIL = 'VALID_EMAIL';

export const VALIDATE_EMAIL = () => ({ type: VALID_EMAIL });

export const validateInputs = (validators = [], value) => {
  let isValid = true;
  validators.forEach((validator) => {
    if (validator.type === VALID_EMAIL) {
      isValid =
        isValid && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }
  });
  return isValid;
};
