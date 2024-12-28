import { createContext, useContext, useState } from 'react';
import FinanceDataTable from '../features/financeData/FinanceDataTable';
import { useFinance } from '../features/financeData/useFinance';
import Card from '../ui/Card';
import CreateFinance from '../features/financeData/createFinance';
import Spinner from '../ui/Spinner';
import AuthContextProvider from '../features/authentication/AuthProvider';
export const FinanceContext = createContext();

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormtype] = useState('Income');
  const [isEditForm, setisEditForm] = useState(false);
  const [editFormData, setEditFormData] = useState({});

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
      }}
      className="static"
    >
      {showForm && <CreateFinance />}

      <div className="flex justify-evenly align-middle my-7">
        <Card type="Income" key="Income" />
        <Card type="Expence" key="Expence" />
        <Card type="Total" key="Total" />
      </div>
      <div className="flex justify-center items-center m-20 ">
        <FinanceDataTable />
      </div>
    </FinanceContext.Provider>
  );
}
