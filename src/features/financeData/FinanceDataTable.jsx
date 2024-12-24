import { useContext } from 'react';
import Tables from './../../ui/Tables';
import { FinanceContext } from '../../pages/Dashboard';

export default function FinanceDataTable() {
  const { isLoading, error, finance } = useContext(FinanceContext);

  return <Tables show="total" data={finance} isLoading={isLoading} />;
}
