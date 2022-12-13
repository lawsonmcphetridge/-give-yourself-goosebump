import { createContext, useEffect, useState } from 'react';
import { getUser } from '../../services/auth';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const getCurrentUser = async () => {
    const currentUser = await getUser({});
    setUser(currentUser);
    return currentUser;
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  // const fetchedUser = getCurrentUser();

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
