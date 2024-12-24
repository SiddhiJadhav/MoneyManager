import { useQuery } from '@tanstack/react-query';
import { getfinance } from '../../services/apiFinance';

export function useFinance() {
  const {
    isLoading,
    data: finance,
    error,
  } = useQuery({
    queryKey: ['finance'],
    queryFn: getfinance,
  });

  return { isLoading, error, finance };
}
