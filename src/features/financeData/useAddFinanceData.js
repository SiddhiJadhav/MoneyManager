import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { addFinance as addFinanceApi } from '../../services/apiFinance';

export function useAddFinanceData() {
  const queryClient = useQueryClient();

  const { mutate: addFianance, isLoading: isAdding } = useMutation({
    mutationFn: addFinanceApi,
    onSuccess: () => {
      toast.success('New entry successfully created');
      queryClient.invalidateQueries({ queryKey: ['finance'] });
    },
    onError: err => toast.error(err.message),
  });

  return { isAdding, addFianance };
}
