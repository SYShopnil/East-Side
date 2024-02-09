import { IFormValues } from '@src/types/root';
/**
 * @method lengthCheck
 * @param {string} data
 * @returns {boolean}
 * @description this method will return true if data length is greater-than two else false
 */
export const lengthCheck = (data: string) => {
  if (data.length >= 3) return true;
  else return false;
};

/**
 * @method isValidMail
 * @param {string} mail
 * @returns {boolean}
 * @description this method will check, a mail valid or not. if valid it will return true else false
 */
export const isValidMail = (mail: string) => {
  const regexPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexPattern.test(mail);
};

// dataValidation
export const dataValidation = (
  requiredFieldNames: IFormValues,
  formValues: IFormValues
) => {
  const errors: IFormValues = {};
  Object.entries(requiredFieldNames).forEach(([key, value]) => {
    if (requiredFieldNames[`${key}`] && !formValues[`${key}`]) {
      errors[key] = value;
    } else {
      if (key == 'email') {
        const isValid = isValidMail(`${formValues[key]}`);
        if (!isValid) errors[key] = 'Email is not valid';
        else delete errors[key];
      } else {
        const length = lengthCheck(`${formValues[key]}`);
        if (!length) errors[key] = `${key} at least 3 characters`;
      }
    }
  });
  return errors;
};
