import { useContext } from 'react';
import Tables from './../../ui/Tables';
import { FinanceContext } from '../../pages/Dashboard';

export default function FinanceDataTable() {
  const { isLoading, error, finance } = useContext(FinanceContext);

  return (
    <div className="bg-white rounded-xl shadow-2xl ">
      <Tables show="total" data={finance} isLoading={isLoading} />
    </div>
  );
}
