import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useLoginUSer } from '../features/authentication/useLoginUser';
import { useSignupUser } from '../features/authentication/useSignupUser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function UserForm({ formType }) {
  const navigate = useNavigate();
  const { isLogging, loginUser } = useLoginUSer();
  const { isSigningup, signupUser } = useSignupUser();

  const { register, handleSubmit, reset, getValues, formState } = useForm({});
  const { errors } = formState;

  function onSubmit(data) {
    if (formType == 'signup') {
      signupUser(
        {
          ...data,
        },
        {
          onSuccess: response => {
            console.log(response);
            toast.success(
              'Account created successfully.Kindly login to proceed.'
            );
            reset();
            navigate('/login', { replace: true });
            // onCloseModal?.();
          },
        }
      );
    } else {
      loginUser(
        {
          ...data,
        },
        {
          onSuccess: response => {
            debugger;
            console.log(response);
            toast.success('Login Successful');
            reset();
            navigate('/dashboard', { replace: true });
            // onCloseModal?.();
          },
        }
      );
    }
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {formType == 'signup' && (
          <>
            <label htmlFor="user_name">User Name</label>
            <input
              type="text"
              id="user_name"
              disabled={isLogging}
              {...register('user_name', {
                required: 'This field is required',
              })}
            />
            <p>{errors?.user_name?.message}</p>
          </>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          disabled={isLogging}
          {...register('email', {
            required: 'This field is required',
          })}
        />
        <p>{errors?.email?.message}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          disabled={isLogging}
          {...register('password', {
            required: 'This field is required',
          })}
        />
        <p>{errors?.password?.message}</p>

        <button disabled={isLogging}>
          {formType == 'login' ? 'Login' : 'SignUp'}
        </button>
      </form>
    </div>
  );
}
