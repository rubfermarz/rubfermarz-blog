import User from '../interfaces/User';

const localStorageUser: string | null = window.localStorage.getItem('user');
export const userInitialState = localStorageUser ? JSON.parse(localStorageUser) : null;

export const USER_ACTION_TYPES = {
  SET_USER: 'SET_USER',
  CLEAR_USER: 'CLEAR_USER',
};

// update localStorage with state for cart
export const updateLocalStorage = (state: User | null) => {
  window.localStorage.setItem('user', JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [USER_ACTION_TYPES.SET_USER]: (state: User, action: any) => {
    const newState = {
      ...state,
      ...action.payload,
    };
    updateLocalStorage(newState);
    return newState;
  },
  [USER_ACTION_TYPES.CLEAR_USER]: () => {
    updateLocalStorage(null);
    return null;
  },
};

export const userReducer = (state: User, action: any) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
