// context/UserContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { api } from '../api/api';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(() => {
  setLoading(true);

  console.log("Token:", localStorage.getItem("token"));

  return api
    .get("me")
    .then((res) => {
      console.log("ME RESPONSE:", res.data);
      setUser(res.data);
    })
    .catch((err) => {
      console.log("ME ERROR:", err.response?.status, err.response?.data);
      console.log("FULL ERROR:", err);
      setUser(null);
    })
    .finally(() => setLoading(false));
}, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <UserContext.Provider value={{ user, setUser, loading, refreshUser: fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = () => useContext(UserContext);