import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ProtectedRouteLogin({ children }) {
  debugger;
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (isAuthenticated && !isLoading) navigate('/dashboard');
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );

  // 4. If there IS a user, render the app
  if (!isAuthenticated) return children;
}

export default ProtectedRouteLogin;
