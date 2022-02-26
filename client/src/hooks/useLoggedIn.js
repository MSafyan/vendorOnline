import { useState, useEffect } from 'react';

const useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, [user]);

  const logout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, logout, user };
};

export default useLoggedIn;
