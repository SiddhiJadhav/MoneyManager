import { useForm } from 'react-hook-form';
import { useLoginUSer } from '../features/authentication/useLoginUser';
import { useSignupUser } from '../features/authentication/useSignupUser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import FormLayout from './FormLayout';
import Button from './Button';
import AnchorTag from './AnchorTag';
import Spinner from './Spinner';

export default function UserForm({ formType }) {
  const navigate = useNavigate();
  const { isLogging: isLoadingLogin, loginUser } = useLoginUSer();
  const { isSigningup: isLoadingSignup, signupUser } = useSignupUser();

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
          onSettled: () => {
            reset();
          },
        }
      );
    }
  }

  function onError(errors) {
    // console.log(errors);
  }

  if (isLoadingLogin || isLoadingSignup) return <Spinner />;

  return (
    <div className="mt-32 bg-slate-200 w-1/3 h-full py-10 gap-5 flex flex-col items-center m-auto my-16 rounded-xl shadow-xl shadow-slate-300">
      <div className="text-4xl font-bold text-slate-700">
        {formType == 'login' ? 'Login' : 'Sign Up'}
      </div>
      <FormLayout
        onSubmit={handleSubmit(onSubmit, onError)}
        classes="flex flex-col gap-3 w-2/3"
      >
        {formType == 'signup' && (
          <>
            <Input
              id="user_name"
              label="User name"
              type="text"
              isLoading={isLoadingLogin || isLoadingSignup}
              errors={errors.user_name}
              register={register}
            />
          </>
        )}

        <Input
          id="email"
          label="Email"
          type="email"
          isLoading={isLoadingLogin || isLoadingSignup}
          errors={errors.email}
          register={register}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isLoading={isLoadingLogin || isLoadingSignup}
          errors={errors.password}
          register={register}
        />
        <Button
          formType={formType}
          isLoading={isLoadingLogin || isLoadingSignup}
        />
        <AnchorTag
          href={formType == 'signup' ? '/login' : '/signup'}
          text={
            formType == 'signup'
              ? 'Already have an account ? Log In'
              : 'Don’t have an account ? Sign up for one now'
          }
        />
      </FormLayout>
    </div>
  );
}
