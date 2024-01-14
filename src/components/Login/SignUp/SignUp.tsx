import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosArrowBack } from 'react-icons/io';
import { createAccount } from '../../../services/auth';
import Form from '../../Form/Form';
import { Input } from '../../Form/Input';
import { displayNameValidation, passwordValidation, repeatPasswordValidation } from './FormData';
import User from '../../../interfaces/User';
import { emailValidation } from '../SignIn/FormData';
import FormError from '../../Form/FormError';
import HTTP_ERRORS from './HTTP_ERRORS.json';

interface Props {
  backAction: any;
  confirmationAction: any;
}

function Register({ backAction, confirmationAction }: Readonly<Props>): JSX.Element {
  const methods = useForm();
  const [error, setError] = useState(null);

  const onSubmit = methods.handleSubmit((data) => {
    const dataBackup = { ...data };
    createAccount(dataBackup as User, dataBackup.password)
      .then(() => {
        confirmationAction(data.email);
      })
      .catch((e) => {
        setError(e.code);
      });
  });

  const handleBack = () => {
    backAction();
  };

  return (
    <Form methods={methods}>
      <Input id={useId()} {...displayNameValidation} />
      <Input id={useId()} {...emailValidation} />
      <Input id={useId()} {...passwordValidation(methods)} />
      <Input id={useId()} {...repeatPasswordValidation(methods)} />
      <div className="mt-5">
        <FormError error={error} translationFile={HTTP_ERRORS} />
        <button
          onClick={onSubmit}
          className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 rounded"
          type="submit"
        >
          Sign Up
        </button>
        <div className="w-full gap-2 justify-center">
          <button
            onClick={handleBack}
            className="w-full bg-white border-solid hover:bg-gray-100 text-black font-bold py-2 px-4 mb-2 rounded inline-flex items-center justify-center gap-2"
            type="button"
          >
            <IoIosArrowBack />
            Back to login
          </button>
        </div>
      </div>
    </Form>
  );
}

export default Register;
