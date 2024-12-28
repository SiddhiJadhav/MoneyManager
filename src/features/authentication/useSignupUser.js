import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { signupUser as signupUserApi } from '../../services/apiAuth';

export function useSignupUser() {
  //const queryClient = useQueryClient();

  const { mutate: signupUser, isLoading: isSigningup } = useMutation({
    mutationFn: signupUserApi,
    onSuccess: () => {
      toast.success('signup Successful');
      //queryClient.invalidateQueries({ queryKey: ['finance'] });
    },
    onError: err => toast.error(err.message),
  });

  return { isSigningup, signupUser };
}
