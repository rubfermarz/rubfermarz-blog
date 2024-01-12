import { useState } from 'react';
import useUser from '../hooks/useUser';
import UserContext from '../context/interfaces/UserContextType';
import { signOut } from '../services/auth';
import './Login.css';
import Register from './Register';
import SignIn from './SignIn';

function Login() {
  const { user, clearUser, setUser } = useUser() as UserContext;

  const [register, setRegister] = useState(false);

  const handleLogout = () => {
    signOut(clearUser);
  };

  const handleRegister = () => {
    setRegister(!register);
  };

  return (
    <div>
      {user && (
        <div>
          <p>{JSON.stringify(user)}</p>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
      {!user && !register && <SignIn handleRegister={handleRegister} setUser={setUser} />}
      {register && !user && <Register backAction={handleRegister} />}
    </div>
  );
}

export default Login;
