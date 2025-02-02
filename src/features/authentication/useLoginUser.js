import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { loginUser as loginUserApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLoginUSer() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: loginUser, isLoading: isLogging } = useMutation({
    mutationFn: loginUserApi,
    onSuccess: () => {
      toast.success('Login Successful');
      queryClient.invalidateQueries({ queryKey: ['user'] });
      navigate('/dashboard', { replace: true });
    },
    onError: err => toast.error(err.message),
  });

  return { isLogging, loginUser };
}
