import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { editFinance as editFinanceApi } from '../../services/apiFinance';

export function useEditFinanceData() {
  const queryClient = useQueryClient();

  const { mutate: editFianance, isLoading: isEditing } = useMutation({
    mutationFn: editFinanceApi,
    onSuccess: () => {
      toast.success('Entry edited successfully created');
      queryClient.invalidateQueries({ queryKey: ['finance'] });
    },
    onError: err => toast.error(err.message),
  });

  return { isEditing, editFianance };
}
