import { useReducer, createContext, useMemo } from 'react';
import { userInitialState, userReducer } from '../reducers/user';
import UserContext from './interfaces/UserContextType';
import User from '../interfaces/User';

export const UserContextInstance = createContext<UserContext | null>(null);

function useUserReducer() {
  const [state, dispatch] = useReducer(userReducer, userInitialState);
  const setUser = (user: User) =>
    dispatch({
      type: 'SET_USER',
      payload: user,
    });

  const clearUser = () => dispatch({ type: 'CLEAR_USER' });

  return { state, setUser, clearUser };
}

// la dependencia de usar React Context
// es MÍNIMA
export function UserProvider({ children }: any) {
  const { state, setUser, clearUser } = useUserReducer();

  const memoUser = useMemo(
    () => ({
      user: state,
      setUser,
      clearUser,
    }),
    [state, setUser, clearUser]
  );
  return <UserContextInstance.Provider value={memoUser}>{children}</UserContextInstance.Provider>;
}
