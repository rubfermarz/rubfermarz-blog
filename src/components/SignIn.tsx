import { useId, useState } from 'react';
import { signInWithGoogle, signIn } from '../services/auth';
import Form from './Form';
import TextInput from './TextInput';
import './SignIn.css';

interface Props {
  setUser: any;
  handleRegister: any;
}

function SignIn({ setUser, handleRegister }: Props): JSX.Element {
  const emailId = useId();
  const passwordId = useId();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (data: FormData) => {
    const formData: any = Object.fromEntries(data.entries());
    signIn(setUser, formData.email, formData.password).catch((e) => {
      setError(e.message);
    });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle(setUser).catch((e) => {
      setError(e.message);
    });
  };

  return (
    <div>
      <Form error={error} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <TextInput label="Email:" id={emailId} type="email" name="email" required />
        <TextInput label="Password:" id={passwordId} type="password" name="password" autoComplete="password" required />
        <div className="login-btn-group">
          <button type="submit">Login</button>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </div>
        <button type="button" onClick={handleGoogleLogin}>
          Google
        </button>
      </Form>
    </div>
  );
}

export default SignIn;
