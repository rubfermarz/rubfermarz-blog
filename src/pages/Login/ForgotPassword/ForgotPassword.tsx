import { useId, useState } from 'react';
import { MdMarkEmailUnread, MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { IoIosArrowBack } from 'react-icons/io';
import Form from '../../../components/Form/Form';
import { Input } from '../../../components/Form/Input';
import { emailValidation } from '../SignIn/FormData';
import { forgotPassword } from '../../../services/auth';
import FormError from '../../../components/Form/FormError';
import HTTP_ERRORS from './HTTP_ERRORS.json';

function ForgotPassword(): JSX.Element {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const methods = useForm();
  const emailId = useId();

  const handleSubmit = methods.handleSubmit((data) => {
    forgotPassword(data.email)
      .then(() => {
        setEmail(data.email);
        setSuccess(true);
      })
      .catch((e) => {
        setError(e.code);
      });
  });

  return (
    <div className="w-full max-w-md m-auto bg-indigo-100 rounded p-5">
      {!success && (
        <div>
          <header className="justify-center inline-flex w-full">
            <MdEmail className="text-8xl text-indigo-500" />
          </header>
          <div className="justify-center inline-flex w-full">
            <h1 className="text-2xl text-indigo-500">Forgot Password?</h1>
          </div>
          <div className="justify-center inline-flex w-full mt-6 mb-6">
            <p className="text-xl text-indigo-500">
              Enter your email address below and we will send you a link to reset your password.
            </p>
          </div>
          <Form methods={methods}>
            <Input id={emailId} {...emailValidation} />
            <div className="mt-5">
              <FormError error={error} translationFile={HTTP_ERRORS} />
              <button
                className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 rounded"
                type="submit"
                onClick={handleSubmit}
              >
                Send Reset Link
              </button>
              <a
                className="w-full bg-white border-solid hover:bg-gray-100 text-black font-bold py-2 px-4 mb-2 rounded inline-flex items-center justify-center gap-2 "
                href="./sign-in"
              >
                <IoIosArrowBack />
                Back to login
              </a>
            </div>
          </Form>
        </div>
      )}
      {success && (
        <div>
          <header className="justify-center inline-flex w-full">
            <MdMarkEmailUnread className="text-8xl text-indigo-500" />
          </header>
          <div className="justify-center inline-flex w-full">
            <h1 className="text-2xl text-indigo-500">Reset Email Sent To:</h1>
          </div>
          <div className="justify-center inline-flex w-full mt-6 mb-6">
            <p className="text-xl text-indigo-500">{email}</p>
          </div>
          <div className="justify-center inline-flex w-full">
            <p className="text-indigo-500 text-sm">
              Please check your email and follow the link instructions to reset your password.
            </p>
          </div>
          <div className="mt-5">
            <a
              className="w-full bg-white border-solid hover:bg-gray-100 text-black font-bold py-2 px-4 mb-2 rounded inline-flex items-center justify-center"
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
    </div>
  );
}

export default ForgotPassword;
