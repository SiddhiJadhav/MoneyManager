import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar';
function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default AppLayout;
