import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteFinance as deleteFinanceApi } from '../../services/apiFinance';

export function useDeleteFinanceData() {
  const queryClient = useQueryClient();

  const { mutate: deleteFianance } = useMutation({
    mutationFn: deleteFinanceApi,
    onSuccess: () => {
      toast.success('Entry deleteed successfully created');
      queryClient.invalidateQueries({ queryKey: ['finance'] });
    },
    onError: err => toast.error(err.message),
  });

  return { deleteFianance };
}
