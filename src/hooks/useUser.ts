import { useContext } from 'react';
import { UserContextInstance } from '../context/User';
import UserContext from '../context/interfaces/UserContextType';

const useUser = (): UserContext | null => {
  const context = useContext(UserContextInstance);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export default useUser;
