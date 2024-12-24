import { createContext, useState } from 'react';
import FinanceDataTable from '../features/financeData/FinanceDataTable';
import { useFinance } from '../features/financeData/useFinance';
import Card from '../ui/Card';
import CreateFinance from '../features/financeData/createFinance';
export const FinanceContext = createContext();

export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormtype] = useState('Income');
  const [isEditForm, setisEditForm] = useState(false);
  const [editFormData, setEditFormData] = useState({});

  const { isLoading, error, finance } = useFinance();

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
    >
      {showForm && <CreateFinance />}

      <div className="flex justify-evenly align-middle">
        <Card type="Income" />
        <Card type="Expence" />
        <Card type="Total" />
      </div>
      <div className="flex justify-evenly align-middle">
        <FinanceDataTable />
      </div>
    </FinanceContext.Provider>
  );
}
