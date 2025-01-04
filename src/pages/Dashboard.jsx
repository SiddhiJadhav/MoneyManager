import { createContext, useState } from 'react';
import FinanceDataTable from '../features/financeData/FinanceDataTable';
import { useFinance } from '../features/financeData/useFinance';
import CreateFinance from '../features/financeData/createFinance';
import Spinner from '../ui/Spinner';
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
      <div className="mt-20 w-3/4 text-4xl font-bold text-center m-auto p-4 bg-white border border-gray-200 rounded-xl shadow-lg text-gray-900 uppercase">
        Financial Dashboard
        <span> {showYear}</span>
      </div>
      <CardComponents />
      <div className="flex justify-center items-center m-20 ">
        <FinanceDataTable key={finance?.length} />
      </div>
    </FinanceContext.Provider>
  );
}
