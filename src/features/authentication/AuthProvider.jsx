import { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../../services/supabase';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [session, setSession] = useState();
  const [isloading, setIsLoading] = useState();

  useEffect(() => {
    async function setData() {
      const { data: session } = await supabase.auth.getSession();
      debugger;
      if (!session?.session?.user) return null;

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

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

// export const useUserFromSession = () => {
//   return useContext(AuthContext);
// };
