import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { loginUser as loginUserApi } from '../../services/apiAuth';

export function useLoginUSer() {
  //const queryClient = useQueryClient();

  const { mutate: loginUser, isLoading: isLogging } = useMutation({
    mutationFn: loginUserApi,
    onSuccess: () => {
      toast.success('Login Successful');
      //queryClient.invalidateQueries({ queryKey: ['finance'] });
    },
    onError: err => toast.error(err.message),
  });

  return { isLogging, loginUser };
}
