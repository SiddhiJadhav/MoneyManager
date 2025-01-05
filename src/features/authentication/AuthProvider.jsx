import { createContext, useContext, useEffect, useState } from 'react';
import supabase from '../../services/supabase';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [session, setSession] = useState();
  const [isLoading, setIsLoading] = useState(false);
  debugger;
  useEffect(() => {
    async function setData() {
      //setIsLoading(true);
      //const { data: session } = await supabase.auth.getSession();
      // console.log(session);

      //if (!session.session) return null;

      //setSession(session);

      const { isLoading, data: user } = await supabase.auth.getUser();

      if (!user) return null;
      debugger;
      setUser(user);
      setIsLoading(isLoading);
      console.log(user);
    }
    setData();
  }, []);

  const values = {
    user,
    isLoading,
  };
  console.log(values);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
