import { useId } from 'react';
import Form from './Form';
import TextInput from './TextInput';
import { createAccount } from '../services/auth';

interface Props {
  setUser: any;
  backAction: any;
}

function Register({ setUser, backAction }: Props): JSX.Element {
  const emailId = useId();
  const passwordId = useId();
  const repeatPasswordId = useId();
  const displayNameId = useId();

  const handleSubmit = (data: FormData) => {
    const formData: any = Object.fromEntries(data.entries());
    const { password } = formData;
    delete formData.password;
    delete formData.repeatPassword;
    createAccount(setUser, formData, password);
  };

  const handleBack = () => {
    backAction();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <TextInput label="Display name:" id={displayNameId} type="text" name="displayName" required />
        <TextInput label="Email:" id={emailId} type="email" name="email" required />
        <TextInput label="Password:" id={passwordId} type="password" name="password" autoComplete="off" required />
        <TextInput
          label="Repeat password:"
          id={repeatPasswordId}
          type="password"
          name="repeatPassword"
          autoComplete="off"
          required
        />
        <button type="submit">Register</button>
        <button type="button" onClick={handleBack}>
          Back
        </button>
      </Form>
    </div>
  );
}

export default Register;
