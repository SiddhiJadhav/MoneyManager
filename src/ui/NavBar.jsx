import { FaMoneyCheck, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import { TbPigMoney } from 'react-icons/tb';
import { useUser } from '../features/authentication/useUser';
import { useEffect, useState } from 'react';
import { useLogoutUser } from '../features/authentication/useLogoutUser';
import RoundedBtn from './RoundedBtn';
import { RiMoneyRupeeCircleFill } from 'react-icons/ri';

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();
  const { logoutUser } = useLogoutUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (isAuthenticated && !isLoading) setIsLoggedIn(true);
    },
    [isAuthenticated, isLoading]
  );

  function handleLogout() {
    logoutUser();
  }

  return (
    <header>
      <nav className="bg-gray-100 top-0 left-0 p-4 drop-shadow-xl text-slate-700">
        <ui className="list-none flex justify-between items-center">
          <div className="flex justify-start items-center gap-3">
            <div className="text-3xl">
              <RiMoneyRupeeCircleFill />
            </div>
            <li className="text-xl font-bold">Money Manager</li>
          </div>
          {isLoggedIn && (
            <div className="flex justify-start items-center gap-5">
              <div className="rounded-full text-3xl">
                <FaUserCircle />
              </div>
              <RoundedBtn
                className="flex justify-between items-center gap-2 text-xl font-semibold"
                onClick={handleLogout}
              >
                <FaSignOutAlt />
              </RoundedBtn>
            </div>
          )}
        </ui>
      </nav>
    </header>
  );
}