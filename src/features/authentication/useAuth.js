import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
//const AuthContext = createContext();
export function useAuth() {
  const { user, isLoading } = useContext(AuthContext);

  return { isLoading, user, isAuthenticated: user?.role === 'authenticated' };
}
