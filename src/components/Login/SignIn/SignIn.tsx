import { useId, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';
import Form from '../../Form/Form';
import { signIn, signInWithGoogle } from '../../../services/auth';
import { Input } from '../../Form/Input';
import { emailValidation, passwordValidation } from './FormData';
import FormError from '../../Form/FormError';
import HTTP_ERRORS from './HTTP_ERRORS.json';
import useUser from '../../../hooks/useUser';
import UserContext from '../../../context/interfaces/UserContextType';

function SignIn(): JSX.Element {
  const { setUser } = useUser() as UserContext;
  const [error, setError] = useState(null);
  const methods = useForm();
  const emailId = useId();
  const passwordId = useId();

  const onSubmit = methods.handleSubmit((data) => {
    signIn(setUser, data.email, data.password).catch((e) => {
      setError(e.code);
    });
  });

  const handleGoogleLogin = () => {
    signInWithGoogle(setUser).catch((e) => {
      setError(e.code);
    });
  };

  return (
    <>
      <header className="justify-center inline-flex w-full">
        <FaUserCircle className="text-8xl text-indigo-500" />
      </header>
      <Form methods={methods}>
        <Input id={emailId} {...emailValidation} />
        <Input id={passwordId} {...passwordValidation} />
        <div className="mt-5">
          <FormError error={error} translationFile={HTTP_ERRORS} />
          <button
            onClick={onSubmit}
            className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <div className="justify-center inline-flex w-full mb-4">
            <span className="block text-indigo-500">OR</span>
          </div>
          <div className="w-full gap-2 justify-center">
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-white border-solid hover:bg-gray-100 text-black font-bold py-2 px-4 mb-2 rounded inline-flex items-center justify-center gap-2"
              type="button"
            >
              <FcGoogle />
              Continue with Google
            </button>
          </div>
        </div>
      </Form>
      <footer className="pb-8">
        <a className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="/forgot-password">
          Forgot Password?
        </a>
        <a className="text-indigo-700 hover:text-pink-700 text-sm float-right" href="./sign-up" type="button">
          Create Account
        </a>
      </footer>
    </>
  );
}

export default SignIn;
