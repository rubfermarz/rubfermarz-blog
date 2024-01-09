import { useId, useState } from 'react';
import useUser from '../hooks/useUser';
import UserContext from '../context/interfaces/UserContextType';

function Login() {
  const usernameId = useId();
  const passwordId = useId();
  const { user, clearUser, setUser } = useUser() as UserContext;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Perform login logic here
    if (!username || !password) return;
    setUser({
      name: username,
    });
  };

  return (
    <div>
      {user && (
        <button type="button" onClick={clearUser}>
          Logout
        </button>
      )}
      {!user && (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor={usernameId}>
              Username:
              <input id={usernameId} type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label htmlFor={passwordId}>
              Password:
              <input id={passwordId} type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
