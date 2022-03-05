import { createContext, useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { AuthAPI } from '../api';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  function checkUserData() {
    const userData = localStorage.getItem('user');

    if (userData) {
      setUser(JSON.parse(userData));
      setIsLoggedIn(true);
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }

    return Boolean(userData);
  }

  useEffect(() => {
    checkUserData();
  }, []);

  const { mutate: logout } = useMutation(AuthAPI.logout, {
    onSuccess: () => {
      localStorage.removeItem('user');
      checkUserData();
    },
  });

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, logout, recheck: checkUserData, user }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;
