export const emailValidation = {
  name: 'email',
  label: 'Email',
  type: 'email',
  placeholder: 'Enter your email here ...',
  autocomplete: 'email',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'Not match email format',
    },
  },
};

export const passwordValidation = {
  name: 'password',
  label: 'Password',
  type: 'password',
  autocomplete: 'current-password',
  placeholder: 'Enter you password here ...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    minLength: {
      value: 6,
      message: 'Min 6 characters',
    },
  },
};
