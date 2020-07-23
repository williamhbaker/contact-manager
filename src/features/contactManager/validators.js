export default {
  validEmail(input) {
    const validEmail = !!input.match(/^\w+@\w+\.[a-z0-9]{2,}$/i);

    return {
      error: !validEmail,
      errorMsg: validEmail ? '' : 'This email is not valid.'
    };
  },

  validName(input) {
    const validName = !!input.match(/^[a-z]+$/i);

    return {
      error: !validName,
      errorMsg: validName ? '' : 'Enter a valid name.'
    };
  },

  validPassword(input) {
    const validPassword = input.length >= 8;

    return {
      error: !validPassword,
      errorMsg: validPassword
        ? ''
        : 'Password must be at least 8 characters long.'
    };
  },

  validPhoneNumber(input) {
    const strippedInput = input.replace(/\D/g, '');
    const validPhoneNumber =
      strippedInput.length === 10 && !strippedInput.match(/\D/);

    return {
      error: !validPhoneNumber,
      errorMsg: validPhoneNumber ? '' : 'Please enter a valid phone number.'
    };
  }
};
