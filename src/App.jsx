import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import AppLayout from './ui/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Dashboard from './pages/Dashboard';
import AuthProvider from './features/authentication/AuthProvider';
import ProtectedRoute from './ui/ProtectedRoute';
import ProtectedRouteLogin from './ui/ProtectedRouteLogin';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 15 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route
            element={
              <ProtectedRouteLogin>
                <AppLayout />
              </ProtectedRouteLogin>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '15px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
            },
          }}
        />{' '}
      </BrowserRouter>
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}

export default App;
