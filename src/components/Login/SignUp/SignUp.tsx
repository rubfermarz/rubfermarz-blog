import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosArrowBack } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { createAccount } from '../../../services/auth';
import Form from '../../Form/Form';
import { Input } from '../../Form/Input';
import { displayNameValidation, passwordValidation, repeatPasswordValidation } from './FormData';
import User from '../../../interfaces/User';
import { emailValidation } from '../SignIn/FormData';
import FormError from '../../Form/FormError';
import HTTP_ERRORS from './HTTP_ERRORS.json';

function SignUp(): JSX.Element {
  const methods = useForm();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const emailId = useId();
  const passwordId = useId();
  const repeatPasswordId = useId();
  const displayNameId = useId();

  const onSubmit = methods.handleSubmit((data) => {
    const dataBackup = { ...data };
    createAccount(dataBackup as User, dataBackup.password)
      .then(() => {
        setSuccess(true);
      })
      .catch((e) => {
        setError(e.code);
      });
  });

  return (
    <>
      {!success && (
        <div>
          <header className="justify-center inline-flex w-full">
            <FaUserCircle className="text-8xl text-indigo-500" />
          </header>
          <Form methods={methods}>
            <Input id={displayNameId} {...displayNameValidation} />
            <Input id={emailId} {...emailValidation} />
            <Input id={passwordId} {...passwordValidation(methods)} />
            <Input id={repeatPasswordId} {...repeatPasswordValidation(methods)} />
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
                <a
                  href="./sign-in"
                  className="w-full bg-white border-solid hover:bg-gray-100 text-black font-bold py-2 px-4 mb-2 rounded inline-flex items-center justify-center gap-2"
                >
                  <IoIosArrowBack />
                  Back to login
                </a>
              </div>
            </div>
          </Form>
        </div>
      )}
      {success && (
        <div className="w-full max-w-md m-auto bg-indigo-100 rounded p-5">
          <header className="justify-center inline-flex w-full">
            <MdMarkEmailUnread className="text-8xl text-indigo-500" />
          </header>
          <div className="justify-center inline-flex w-full">
            <h1 className="text-2xl text-indigo-500">Confirmation Email Sent To:</h1>
          </div>
          <div className="justify-center inline-flex w-full mt-6 mb-6">
            <p className="text-xl text-indigo-500">{methods.getValues().email}</p>
          </div>
          <div className="justify-center inline-flex w-full">
            <p className="text-indigo-500 text-sm">Please check your email for a confirmation link.</p>
          </div>
          <div className="mt-5">
            <a
              className="w-full bg-white border-solid hover:bg-gray-100 text-black font-bold py-2 px-4 mb-2 rounded inline-flex items-center justify-center"
              type="button"
              href="/"
            >
              Go to home
            </a>
            <a
              className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 rounded inline-flex items-center justify-center gap-2"
              href="./sign-in"
            >
              <IoIosArrowBack />
              Back to login
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
