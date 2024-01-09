import { useContext } from 'react';
import { UserContextInstance } from '../context/User';

const useUser = () => {
  const context = useContext(UserContextInstance);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export default useUser;
