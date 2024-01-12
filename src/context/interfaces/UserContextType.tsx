import User from '../../interfaces/User';

interface UserContext {
  user: User | null;
  clearUser: () => void;
  setUser: (user: User) => void;
}

export default UserContext;
