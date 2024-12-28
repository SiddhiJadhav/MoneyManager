import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { logoutUser as LogoutUserApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogoutUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logoutUser } = useMutation({
    mutationFn: LogoutUserApi,
    onSuccess: () => {
      toast.success('Logout Successful');
      navigate('/login', { replace: true });
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: err => toast.error(err.message),
  });

  return { logoutUser };
}
