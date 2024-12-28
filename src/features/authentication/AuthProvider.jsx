import { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../../services/supabase';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [session, setSession] = useState();
  const [isloading, setIsLoading] = useState();

  useEffect(() => {
    async function setData() {
      const { data: session } = await supabase.auth.getSession();
      console.log(session);

      if (!session) return null;

      setSession(session);
      setUser(session?.session?.user);
      setIsLoading(false);
    }
    setData();
  }, []);

  const values = {
    user,
    isloading,
  };
  console.log(values);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
