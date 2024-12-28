import { createContext, useContext } from 'react';
const AuthContext = createContext();
export function useAuth() {
  const { user, isLoading } = useContext(AuthContext);
}
