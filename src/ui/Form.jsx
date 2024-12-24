import { useForm } from 'react-hook-form';
import { useAddFinanceData } from './../features/financeData/useAddFinanceData';
import { useContext } from 'react';
import { FinanceContext } from '../pages/Dashboard';
import { useEditFinanceData } from '../features/financeData/useEditFinanceData';

export default function Form() {
  const { formType, isEditForm, editFormData } = useContext(FinanceContext);
  const { isAdding, addFianance } = useAddFinanceData();
  const { isEditing, editFianance } = useEditFinanceData();

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditForm ? editFormData : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditForm) {
      editFianance(
        {
          data: {
            ...data,
            created_at: new Date(data.created_at),
            isIncome: formType === 'Income' ? true : false,
          },
        },
        {
          onSuccess: response => {
            console.log(response);

            reset();
            // onCloseModal?.();
          },
        }
      );
    } else {
      addFianance(
        {
          data: {
            ...data,
            created_at: new Date(data.created_at),
            isIncome: formType === 'Income' ? true : false,
          },
        },
        {
          onSuccess: response => {
            console.log(response);

            reset();
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
        <label htmlFor="created_at">Date</label>
        <input
          type="Date"
          id="created_at"
          disabled={isAdding}
          {...register('created_at', {
            required: 'This field is required',
          })}
        />
        <p>{errors?.amount?.message}</p>

        <label htmlFor="account">Account</label>
        <select
          id="account"
          disabled={isAdding}
          {...register('account', {
            required: 'This field is required',
          })}
        >
          <option value="Cash">Cash</option>
          <option value="Account">Account</option>
          <option value="Card">Card</option>
        </select>
        <p>{errors?.account?.message}</p>

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          disabled={isAdding}
          {...register('amount', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Amount should be greater than 1',
            },
          })}
        />
        <p>{errors?.amount?.message}</p>

        <label htmlFor="category">Category</label>
        <select
          id="category"
          disabled={isAdding}
          {...register('category', {
            required: 'This field is required',
          })}
        >
          <option value="Food">Food</option>
          <option value="Social Life">Social Life</option>
          <option value="Transportation">Transportation</option>
          <option value="Household">Household</option>
          <option value="Health">Health</option>
          <option value="Apparel">Apparel</option>
          <option value="Culture">Culture</option>
          <option value="Gift">Gift</option>
        </select>
        <p>{errors?.category?.message}</p>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          disabled={isAdding}
          {...register('description', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'description should be greater than 1',
            },
          })}
        />
        <p>{errors?.description?.message}</p>

        <button
          type="reset"
          // onClick={() => onCloseModal?.()}
        >
          Cancel
        </button>
        <button disabled={isAdding}>
          {formType === 'Income' ? 'Add Income' : 'Add Expence'}
        </button>
      </form>
    </div>
  );
}
