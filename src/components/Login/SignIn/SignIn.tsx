import { useId, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import Form from '../../Form/Form';
import { signIn, signInWithGoogle } from '../../../services/auth';
import { Input } from '../../Form/Input';
import { emailValidation, passwordValidation } from './FormData';
import FormError from '../../Form/FormError';
import HTTP_ERRORS from './HTTP_ERRORS.json';

interface Props {
  setUser: any;
}

function SignIn({ setUser }: Props): JSX.Element {
  const [error, setError] = useState(null);
  const methods = useForm();

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
    <Form methods={methods}>
      <Input id={useId()} {...emailValidation} />
      <Input id={useId()} {...passwordValidation} />
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
  );
}

export default SignIn;
