import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import useUser from '../../hooks/useUser';
import UserContext from '../../context/interfaces/UserContextType';
import { signOut } from '../../services/auth';
import Register from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import ConfirmationEmailSent from './ConfirmationEmailSent/ConfirmationEmailSent';
import ForgotPassword from './ForgotPassword/ForgotPassword';

function Login() {
  const { user, clearUser, setUser } = useUser() as UserContext;
  const [register, setRegister] = useState(false);
  const [confirmationLink, setConfirmationLink] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogout = () => {
    signOut(clearUser);
  };

  const handleRegister = () => {
    setRegister(!register);
  };

  const handleConfirmationLink = (newEmail: string) => {
    setEmail(newEmail);
    setConfirmationLink(true);
  };

  const handleForgotPassword = () => {
    setForgotPassword(!forgotPassword);
  };

  const handleBack = () => {
    setConfirmationLink(false);
    setRegister(false);
    setForgotPassword(false);
  };

  return (
    <section className="w-full max-w-md m-auto bg-indigo-100 rounded p-5">
      {user && (
        <div>
          <p>{JSON.stringify(user)}</p>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

      {forgotPassword && !confirmationLink && !user && !register && <ForgotPassword handleBack={handleBack} />}
      {!forgotPassword && confirmationLink && !user && register && (
        <ConfirmationEmailSent email={email} handleBack={handleBack} />
      )}
      {!confirmationLink && !forgotPassword && (
        <header className="justify-center inline-flex w-full">
          <FaUserCircle className="text-8xl text-indigo-500" />
        </header>
      )}
      {!forgotPassword && !user && !register && !confirmationLink && <SignIn setUser={setUser} />}
      {register && !user && !confirmationLink && (
        <Register backAction={handleRegister} confirmationAction={handleConfirmationLink} />
      )}
      {!forgotPassword && !register && !user && !confirmationLink && (
        <footer className="pb-8">
          <button
            className="text-indigo-700 hover:text-pink-700 text-sm float-left"
            onClick={handleForgotPassword}
            type="button"
          >
            Forgot Password?
          </button>
          <button
            className="text-indigo-700 hover:text-pink-700 text-sm float-right"
            onClick={handleRegister}
            type="button"
          >
            Create Account
          </button>
        </footer>
      )}
    </section>
  );
}

export default Login;
