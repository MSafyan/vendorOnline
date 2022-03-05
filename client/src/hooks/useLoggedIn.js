import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';

const useLoggedIn = () => {
  const { isLoggedIn, logout, recheck, user } = useContext(LoginContext);

  return { isLoggedIn, logout, recheck, user };
};

export default useLoggedIn;
