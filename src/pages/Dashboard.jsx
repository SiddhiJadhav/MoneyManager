import { createContext, useContext, useState } from 'react';
import FinanceDataTable from '../features/financeData/FinanceDataTable';
import { useFinance } from '../features/financeData/useFinance';
import Card from '../ui/Card';
import BarChart from '../ui/BarChart';
import CreateFinance from '../features/financeData/createFinance';
import Spinner from '../ui/Spinner';
import AuthContextProvider from '../features/authentication/AuthProvider';
import CardComponents from '../ui/CardComponents';
import Stats from '../ui/Stats';
export const FinanceContext = createContext();

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormtype] = useState('Income');
  const [isEditForm, setisEditForm] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const [showStat, setShowStat] = useState(false);
  const [showYear, setshowYear] = useState(new Date().getFullYear());

  const { isLoading, error, finance } = useFinance();

  if (isLoading) return <Spinner />;
  return (
    <FinanceContext.Provider
      value={{
        finance,
        isLoading,
        error,
        setShowForm,
        formType,
        setFormtype,
        isEditForm,
        setisEditForm,
        editFormData,
        setEditFormData,
        setShowStat,
        showYear,
        setshowYear,
      }}
      className="static"
    >
      {showForm && <CreateFinance />}
      {showStat && <Stats />}
      <CardComponents />
      <div className="flex justify-center items-center m-20 ">
        <FinanceDataTable key={finance?.length} />
      </div>
    </FinanceContext.Provider>
  );
}
