import { UseFormReturn } from 'react-hook-form';

export const displayNameValidation = {
  name: 'displayName',
  label: 'Display Name',
  type: 'text',
  placeholder: 'Enter your display name here ...',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    minLength: {
      value: 3,
      message: 'Min 3 characters',
    },
  },
};

export const passwordValidation = (methods: UseFormReturn) => {
  return {
    name: 'password',
    label: 'Password',
    type: 'password',
    autocomplete: 'off',
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
      validate: (value: string) => {
        methods.clearErrors('currentPassword');
        return value === methods.getValues('repeatPassword') || 'The passwords do not match';
      },
    },
  };
};

export const repeatPasswordValidation = (methods: UseFormReturn) => {
  return {
    name: 'repeatPassword',
    label: 'Repeat Password',
    type: 'password',
    autocomplete: 'off',
    placeholder: 'Re-enter you password here ...',
    validation: {
      required: {
        value: true,
        message: 'Required',
      },
      minLength: {
        value: 6,
        message: 'Min 6 characters',
      },
      validate: (value: string) => {
        methods.clearErrors('password');
        return value === methods.getValues('password') || 'The passwords do not match';
      },
    },
  };
};
